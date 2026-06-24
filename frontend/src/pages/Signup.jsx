import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../services/api";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (name.trim().length < 3) {
  setError(
    "Name must be at least 3 characters"
  );
  return;
}

if (password.length < 8) {
  setError(
    "Password must be at least 8 characters"
  );
  return;
}

    try {
      setLoading(true);

      const response = await fetch(
        `${API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {

        let errorMessage =
          "Signup failed";

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

      setSuccess(
        "Account created successfully! Redirecting to login..."
      );

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
        setError(
          err.message ||
          "Invalid email or password"
        );
      } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-teal-600/20 blur-3xl"></div>

      <div className="relative w-full max-w-md">

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

          <div className="text-center mb-8">

            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600">
              <span className="font-bold text-white">
                EF
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Create Account
            </h1>

            <p className="mt-2 text-slate-400">
              Start managing your finances today
            </p>

          </div>

          <form
            onSubmit={handleSignup}
            className="space-y-5"
          >

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-emerald-500"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500">
                {error}
              </p>
            )}

            {success && (
              <p className="text-sm text-green-500">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-50"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <span
              onClick={() =>
                navigate("/login")
              }
              className="cursor-pointer text-emerald-400"
            >
              Login
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;