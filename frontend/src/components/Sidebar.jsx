import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-white/10 bg-slate-950 p-6">

      <div className="mb-10 flex items-center gap-3">

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
          className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/expenses"
          className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
        >
          💸 Expenses
        </Link>

        <Link
          to="/categories"
          className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
        >
          🏷️ Categories
        </Link>

      </nav>

      <div className="mt-auto">

        <button
          onClick={handleLogout}
          className="w-full rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-400 transition hover:bg-red-500/20"
        >
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;