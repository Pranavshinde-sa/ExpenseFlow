function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10 shadow-lg shadow-black/20">
      <div className="h-16 px-8 flex items-center justify-between w-full">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30 ring-1 ring-white/10">
            <span className="text-sm font-extrabold text-white">
              EF
            </span>
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              ExpenseFlow
            </h1>

            <p className="text-xs text-slate-400">
              Personal Finance Dashboard
            </p>
          </div>

        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/5 bg-white/5 p-1">

          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-white/10"
          >
            Dashboard
          </a>

          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition"
          >
            Expenses
          </a>

          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition"
          >
            Categories
          </a>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

            <span className="text-xs font-medium text-emerald-300">
              Personal
            </span>
          </div>

          <button className="relative h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 ring-2 ring-white/10 hover:scale-105 transition">
            U

            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950"></span>
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;