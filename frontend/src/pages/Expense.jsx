import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { API_URL, getAuthHeaders } from "../services/api";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] =
    useState("expense");
  const [categoryId, setCategoryId] =
    useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [expenseRes, categoryRes] =
        await Promise.all([
          fetch(`${API_URL}/expenses`, {
            headers: getAuthHeaders(),
          }),

          fetch(`${API_URL}/categories`, {
            headers: getAuthHeaders(),
          }),
        ]);

      const expenseData =
        await expenseRes.json();

      const categoryData =
        await categoryRes.json();

      setExpenses(expenseData);
      setCategories(categoryData);

      if (
        categoryData.length > 0 &&
        !categoryId
      ) {
        setCategoryId(categoryData[0].id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryName = (
    categoryId
  ) => {
    const category = categories.find(
      (c) => c.id === categoryId
    );

    return category
      ? category.name
      : "Unknown";
  };

  const handleDelete = async (
    expenseId
  ) => {
    const confirmDelete =
      window.confirm(
        "Delete this expense?"
      );

    if (!confirmDelete) return;

    try {
      await fetch(
        `${API_URL}/expenses/${expenseId}`,
        {
          method: "DELETE",
          headers: getAuthHeaders(),
        }
      );

      setMessage("Expense deleted successfully");

      fetchData();

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

const handleCreateExpense =
  async (e) => {
    e.preventDefault();

    try {
      const payload = {
        title,
        amount: parseFloat(amount),
        transaction_type:
          transactionType,
        category_id:
          parseInt(categoryId),
      };

      let response;

      if (editingExpense) {
        response = await fetch(
          `${API_URL}/expenses/${editingExpense.id}`,
          {
            method: "PUT",
            headers:
              getAuthHeaders(),
            body: JSON.stringify(
              payload
            ),
          }
        );

        setMessage(
          "Expense updated successfully"
        );
      } else {
        response = await fetch(
          `${API_URL}/expenses`,
          {
            method: "POST",
            headers:
              getAuthHeaders(),
            body: JSON.stringify(
              payload
            ),
          }
        );

        setMessage(
          "Expense created successfully"
        );
      }

      if (!response.ok) {
        throw new Error(
          "Request failed"
        );
      }

      setTitle("");
      setAmount("");
      setTransactionType(
        "expense"
      );

      setEditingExpense(null);

      setShowModal(false);

      fetchData();

      setTimeout(() => {
        setMessage("");
      }, 3000);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Expenses
          </h1>

          <p className="text-slate-400 mt-1">
            Manage and track your expenses
          </p>
        </div>

        <button
          onClick={() =>
            setShowModal(true)
          }
          className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 font-semibold text-white hover:opacity-90"
        >
          + Add Expense
        </button>

      </div>
      {message && (
        <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-400">
          {message}
        </div>
      )}

      {loading ? (
        <p className="text-slate-400">
          Loading...
        </p>
      ) : expenses.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-12 text-center">

          <h3 className="text-xl font-semibold text-white mb-2">
            No Expenses Yet
          </h3>

          <p className="text-slate-400">
            Click "+ Add Expense" to create your first expense.
          </p>

        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">

          <table className="w-full">

            <thead className="border-b border-white/10">

              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                  Title
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                  Category
                </th>

                <th className="px-12 py-4 text-left text-sm font-semibold text-slate-300">
                  Type
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                  Amount
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {expenses.map(
                (expense) => (
                  <tr
                    key={expense.id}
                    className="border-b border-white/5"
                  >

                    <td className="px-6 py-4 text-white">
                      {expense.title}
                    </td>

                    <td className="px-6 py-4 text-slate-300">
                      {getCategoryName(
                        expense.category_id
                      )}
                    </td>

                    <td className="px-6 py-4">

                    <span
                      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ${
                        expense.transaction_type === "income"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-rose-500/10 text-rose-400"
                      }`}
                    >
                      {expense.transaction_type}
                    </span>

                  </td>

                    <td
                      className={`px-6 py-4 font-semibold ${
                        expense.transaction_type === "income"
                          ? "text-emerald-400"
                          : "text-rose-400"
                      }`}
                    >
                      {expense.transaction_type === "income"
                        ? "+ "
                        : "- "}
                      ₹{expense.amount}
                    </td>

                    <td className="px-6 py-4">

                      <div className="flex justify-center">

                        <div className="flex items-center gap-6 rounded-full bg-white/5 px-4 py-2">

                          <button
                            onClick={() => {
                              setEditingExpense(expense);

                              setTitle(expense.title);
                              setAmount(expense.amount);
                              setTransactionType(
                                expense.transaction_type
                              );
                              setCategoryId(
                                expense.category_id
                              );

                              setShowModal(true);
                            }}
                            className="text-emerald-400 hover:text-emerald-300"
                          >
                            Edit
                          </button>

                          <div className="h-4 w-px bg-white/10"></div>

                          <button
                            onClick={() =>
                              handleDelete(expense.id)
                            }
                            className="text-red-400 hover:text-red-300"
                          >
                            Delete
                          </button>

                        </div>

                      </div>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-2xl">

            <h2 className="text-2xl font-bold text-white mb-6">
              {editingExpense
                ? "Edit Expense"
                : "Add Expense"}
            </h2>

            <form
              onSubmit={
                handleCreateExpense
              }
              className="space-y-4"
            >

              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
                required
              />

              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) =>
                  setAmount(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
                required
              />

              <select
                value={transactionType}
                onChange={(e) =>
                  setTransactionType(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-emerald-500"
              >
                <option
                  value="expense"
                  className="bg-slate-800 text-white"
                >
                  Expense
                </option>

                <option
                  value="income"
                  className="bg-slate-800 text-white"
                >
                  Income
                </option>
              </select>

              <select
                value={categoryId}
                onChange={(e) =>
                  setCategoryId(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-emerald-500"
              >
                {categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    className="bg-slate-800 text-white"
                  >
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="flex gap-3">

                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-emerald-600 py-3 text-white font-semibold"
                >
                  {editingExpense
                    ? "Update"
                    : "Create"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setEditingExpense(null);
                    setShowModal(false);
                  }}
                  className="flex-1 rounded-xl bg-slate-700 py-3 text-white"
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </DashboardLayout>
  );
}

export default Expenses;