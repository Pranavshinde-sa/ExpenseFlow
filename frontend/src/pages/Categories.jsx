import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { API_URL, getAuthHeaders } from "../services/api";

function Categories() {
  const [categories, setCategories] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [showModal, setShowModal] =
    useState(false);

  const [name, setName] = useState("");

  const [message, setMessage] =
    useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `${API_URL}/categories`,
        {
          headers: getAuthHeaders(),
        }
      );

      const data = await response.json();

      setCategories(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCategory =
    async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(
          `${API_URL}/categories`,
          {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify({
              name,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(
            "Failed to create category"
          );
        }

        setName("");
        setShowModal(false);

        setMessage(
          "Category created successfully"
        );

        fetchCategories();

        setTimeout(() => {
          setMessage("");
        }, 3000);

      } catch (error) {
        console.error(error);
      }
    };

  const handleDeleteCategory =
    async (id) => {
      const confirmed =
        window.confirm(
          "Delete this category?"
        );

      if (!confirmed) return;

      try {
        await fetch(
          `${API_URL}/categories/${id}`,
          {
            method: "DELETE",
            headers: getAuthHeaders(),
          }
        );

        setMessage(
          "Category deleted successfully"
        );

        fetchCategories();

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
            Categories
          </h1>

          <p className="text-slate-400 mt-1">
            Organize your expenses
          </p>
        </div>

        <button
          onClick={() =>
            setShowModal(true)
          }
          className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 font-semibold text-white hover:opacity-90"
        >
          + Add Category
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
      ) : categories.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-12 text-center">

          <h3 className="text-xl font-semibold text-white mb-2">
            No Categories Yet
          </h3>

          <p className="text-slate-400">
            Create your first category.
          </p>

        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {categories.map(
            (category) => (
              <div
                key={category.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >

                <div className="flex items-center justify-between">

                  <h3 className="text-lg font-semibold text-white">
                    {category.name}
                  </h3>

                  <button
                    onClick={() =>
                      handleDeleteCategory(
                        category.id
                      )
                    }
                    className="text-red-400 hover:text-red-300"
                  >
                    Delete
                  </button>

                </div>

              </div>
            )
          )}

        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-950 p-8 shadow-2xl">

            <h2 className="text-2xl font-bold text-white mb-6">
              Add Category
            </h2>

            <form
              onSubmit={
                handleCreateCategory
              }
              className="space-y-4"
            >

              <input
                type="text"
                placeholder="Category Name"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
                required
              />

              <div className="flex gap-3">

                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-emerald-600 py-3 text-white font-semibold"
                >
                  Create
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setShowModal(false)
                  }
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

export default Categories;