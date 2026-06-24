import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError("");
      if (!email.trim()) {
        setError("Email is required");
        return;
      }

      if (!password.trim()) {
        setError("Password is required");
        return;
      }

      const formData = new URLSearchParams();

      formData.append("username", email.trim());
      formData.append("password", password);

      const response = await fetch(
        `${API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {

        let errorMessage =
          "Invalid email or password";

        if (
          Array.isArray(data.detail) &&
          data.detail.length > 0
        ) {
          errorMessage =
            data.detail[0].msg;
        } else if (data.detail) {
          errorMessage =
            data.detail;
        }

        throw new Error(errorMessage);
      }

      localStorage.setItem(
        "token",
        data.access_token
      );

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-teal-600/20 blur-3xl"></div>

      <div className="relative w-full max-w-md">

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl shadow-black/40">

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

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
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
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-emerald-500/50"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-600 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:scale-[1.02]"
            >
              Sign In
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;