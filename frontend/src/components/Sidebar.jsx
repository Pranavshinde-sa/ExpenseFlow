import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-950 border-r border-white/10 p-6">

      <div className="flex items-center gap-3 mb-10">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600">
          <span className="font-bold text-white">
            EF
          </span>
        </div>

        <div>
          <h2 className="font-bold text-white">
            ExpenseFlow
          </h2>

          <p className="text-xs text-slate-400">
            Dashboard
          </p>
        </div>

      </div>

      <nav className="space-y-2">

        <Link
          to="/dashboard"
          className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white transition"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/expenses"
          className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white transition"
        >
          💸 Expenses
        </Link>

        <Link
          to="/categories"
          className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white transition"
        >
          🏷️ Categories
        </Link>

      </nav>

      <div className="mt-auto pt-10">

        <button className="w-full rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-400 hover:bg-red-500/20 transition">
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;