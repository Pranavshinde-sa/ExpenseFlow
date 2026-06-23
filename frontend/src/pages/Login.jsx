function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-teal-600/20 blur-3xl"></div>

      <div className="relative w-full max-w-md">

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-black/40">

          {/* Logo */}
          <div className="flex flex-col items-center mb-8">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/30">
              <span className="text-lg font-bold text-white">
                EF
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold text-white">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Sign in to your ExpenseFlow account
            </p>

          </div>

          {/* Form */}
          <form className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-500/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-500/50"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-600 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02]"
            >
              Sign In
            </button>

          </form>

          {/* Footer */}
          <div className="mt-6 text-center">

            <p className="text-sm text-slate-400">
              Don't have an account?{" "}
              <span className="cursor-pointer font-medium text-emerald-400 hover:text-emerald-300">
                Register
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;