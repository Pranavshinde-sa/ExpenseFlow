import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold text-white mb-8">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-slate-400 text-sm">
            Total Balance
          </h2>

          <p className="mt-2 text-3xl font-bold text-white">
            ₹1,24,580
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-slate-400 text-sm">
            Income
          </h2>

          <p className="mt-2 text-3xl font-bold text-emerald-400">
            ₹85,000
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-slate-400 text-sm">
            Expenses
          </h2>

          <p className="mt-2 text-3xl font-bold text-rose-400">
            ₹12,500
          </p>
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;