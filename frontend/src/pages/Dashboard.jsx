import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { API_URL } from "../services/api";

function Dashboard() {
  const [summary, setSummary] = useState({
    total_income: 0,
    total_expense: 0,
    balance: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/dashboard/summary`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      setSummary(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Track your income, expenses and financial health
        </p>

      </div>

      {loading ? (
        <p className="text-slate-400">
          Loading...
        </p>
      ) : (
        <>
          {/* Top Cards */}

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

              <h2 className="text-sm text-slate-400">
                Total Balance
              </h2>

              <p className="mt-3 text-3xl font-bold text-white">
                ₹{summary.balance}
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

              <h2 className="text-sm text-slate-400">
                Income
              </h2>

              <p className="mt-3 text-3xl font-bold text-emerald-400">
                ₹{summary.total_income}
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

              <h2 className="text-sm text-slate-400">
                Expenses
              </h2>

              <p className="mt-3 text-3xl font-bold text-rose-400">
                ₹{summary.total_expense}
              </p>

            </div>

          </div>

          {/* Financial Summary */}

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">

            <h2 className="mb-6 text-xl font-semibold text-white">
              Financial Summary
            </h2>

            <div className="space-y-6">

              <div>

                <div className="mb-2 flex justify-between">

                  <span className="text-slate-400">
                    Income
                  </span>

                  <span className="font-medium text-emerald-400">
                    ₹{summary.total_income}
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-800">

                  <div
                    className="h-3 rounded-full bg-emerald-500"
                    style={{
                      width: "100%",
                    }}
                  />

                </div>

              </div>

              <div>

                <div className="mb-2 flex justify-between">

                  <span className="text-slate-400">
                    Expense Ratio
                  </span>

                  <span className="font-medium text-rose-400">
                    ₹{summary.total_expense}
                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-800">

                  <div
                    className="h-3 rounded-full bg-rose-500"
                    style={{
                      width:
                        summary.total_income > 0
                          ? `${Math.min(
                              (summary.total_expense /
                                summary.total_income) *
                                100,
                              100
                            )}%`
                          : "0%",
                    }}
                  />

                </div>

              </div>

            </div>

          </div>

          {/* Status Card */}

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">

            <h2 className="mb-3 text-xl font-semibold text-white">
              Financial Status
            </h2>

            <p className="text-slate-400">

              {summary.balance > 0
                ? "You are currently in positive balance. Keep tracking your spending."
                : "Your expenses are greater than or equal to your income. Consider reducing expenses."}

            </p>

          </div>

        </>
      )}

    </DashboardLayout>
  );
}

export default Dashboard;