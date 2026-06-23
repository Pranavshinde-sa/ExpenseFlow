import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-8 h-full flex items-center">

      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"></div>
      <div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-teal-600/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto w-full">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left content */}
          <div className="flex-1 max-w-xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>

              <span className="text-xs font-medium text-emerald-300">
                Track smarter, spend better
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              Take control of your{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                finances
              </span>
            </h1>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Track expenses, set budgets, and gain clarity on your spending —
              all in one beautifully simple dashboard.
            </p>

            <div className="flex flex-wrap items-center gap-4">

                <Link
                to="/login"
                className="px-6 py-3 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-transform duration-200"
                >
                Get Started Free
                </Link>

              <button className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-colors duration-200">
                View Demo
              </button>

            </div>

          </div>

          {/* Right - Stats card */}
          <div className="flex-1 w-full max-w-md">

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl shadow-black/40">

              <div className="flex items-center justify-between mb-6">

                <div>
                  <p className="text-sm text-slate-400">
                    Total Balance
                  </p>

                  <p className="text-3xl font-bold text-white mt-1">
                    ₹1,24,580
                  </p>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1">
                  <span className="text-xs font-medium text-emerald-300">
                    +12.4%
                  </span>
                </div>

              </div>

              <div className="space-y-3">

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">

                  <div className="flex items-center gap-3">

                    <div className="h-9 w-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      🛒
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        Groceries
                      </p>

                      <p className="text-xs text-slate-500">
                        Today, 2:30 PM
                      </p>
                    </div>

                  </div>

                  <p className="text-sm font-semibold text-rose-400">
                    -₹1,240
                  </p>

                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">

                  <div className="flex items-center gap-3">

                    <div className="h-9 w-9 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                      💼
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        Salary
                      </p>

                      <p className="text-xs text-slate-500">
                        Yesterday
                      </p>
                    </div>

                  </div>

                  <p className="text-sm font-semibold text-emerald-400">
                    +₹85,000
                  </p>

                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">

                  <div className="flex items-center gap-3">

                    <div className="h-9 w-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      🎬
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white">
                        Entertainment
                      </p>

                      <p className="text-xs text-slate-500">
                        2 days ago
                      </p>
                    </div>

                  </div>

                  <p className="text-sm font-semibold text-rose-400">
                    -₹599
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;