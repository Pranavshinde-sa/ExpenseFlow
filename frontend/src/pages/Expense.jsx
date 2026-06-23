import DashboardLayout from "../layouts/DashboardLayout";

function Expenses() {
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

        <button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 font-semibold text-white hover:opacity-90">
          + Add Expense
        </button>

      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">

        <table className="w-full">

          <thead className="border-b border-white/10">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Date
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Category
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Description
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Amount
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b border-white/5">

              <td className="px-6 py-4 text-slate-300">
                12 Jun 2026
              </td>

              <td className="px-6 py-4 text-white">
                Food
              </td>

              <td className="px-6 py-4 text-slate-400">
                Lunch
              </td>

              <td className="px-6 py-4 text-rose-400 font-medium">
                ₹250
              </td>

              <td className="px-6 py-4">
                <button className="text-emerald-400 hover:text-emerald-300">
                  Edit
                </button>
              </td>

            </tr>

            <tr className="border-b border-white/5">

              <td className="px-6 py-4 text-slate-300">
                13 Jun 2026
              </td>

              <td className="px-6 py-4 text-white">
                Travel
              </td>

              <td className="px-6 py-4 text-slate-400">
                Bus Ticket
              </td>

              <td className="px-6 py-4 text-rose-400 font-medium">
                ₹500
              </td>

              <td className="px-6 py-4">
                <button className="text-emerald-400 hover:text-emerald-300">
                  Edit
                </button>
              </td>

            </tr>

            <tr>

              <td className="px-6 py-4 text-slate-300">
                14 Jun 2026
              </td>

              <td className="px-6 py-4 text-white">
                Shopping
              </td>

              <td className="px-6 py-4 text-slate-400">
                T-Shirt
              </td>

              <td className="px-6 py-4 text-rose-400 font-medium">
                ₹899
              </td>

              <td className="px-6 py-4">
                <button className="text-emerald-400 hover:text-emerald-300">
                  Edit
                </button>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
}

export default Expenses;