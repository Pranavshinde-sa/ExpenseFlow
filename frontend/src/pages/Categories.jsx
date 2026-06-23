import DashboardLayout from "../layouts/DashboardLayout";

function Categories() {
  return (
    <DashboardLayout>

      <div className="flex items-center justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold text-white">
            Categories
          </h1>

          <p className="text-slate-400 mt-1">
            Organize your expenses into categories
          </p>
        </div>

        <button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-3 font-semibold text-white hover:opacity-90">
          + Add Category
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Food
          </h3>

          <p className="mt-2 text-slate-400">
            Restaurants, groceries and snacks
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Travel
          </h3>

          <p className="mt-2 text-slate-400">
            Fuel, bus tickets and transportation
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Shopping
          </h3>

          <p className="mt-2 text-slate-400">
            Clothes, gadgets and purchases
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Bills
          </h3>

          <p className="mt-2 text-slate-400">
            Electricity, internet and subscriptions
          </p>
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Categories;