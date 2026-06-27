function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 px-8 py-4">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-3">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20">
              <span className="text-xs font-bold text-white">
                EF
              </span>
            </div>

            <div>
              <h2 className="text-sm font-bold text-white">
                ExpenseFlow
              </h2>

              <p className="text-[11px] text-slate-500">
                Smart Finance Tracking
              </p>
            </div>

          </div>

          {/* Links */}
          <nav className="flex items-center gap-5">

            <a
              href="#"
              className="text-xs text-slate-400 hover:text-white transition"
            >
              Features
            </a>

            <a
              href="#"
              className="text-xs text-slate-400 hover:text-white transition"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-xs text-slate-400 hover:text-white transition"
            >
              Categories
            </a>

            <a
              href="#"
              className="text-xs text-slate-400 hover:text-white transition"
            >
              Contact
            </a>

          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">

            <a
              href="#"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
            >
              𝕏
            </a>

            <a
              href="#"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
            >
              in
            </a>

            <a
              href="#"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white"
            >
              gh
            </a>

          </div>

        </div>

        <div className="mt-3 border-t border-white/5 pt-3 text-center">

          <p className="text-xs text-slate-500">
            © 2026 ExpenseFlow • React • FastAPI • PostgreSQL
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;