export default function StatsCards({ stats = [] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.15em] text-slate-500">{stat.label}</p>
          <p className="mt-4 text-3xl font-semibold text-slate-900">{stat.value}</p>
          <p className="mt-3 text-sm text-slate-600">{stat.description}</p>
        </div>
      ))}
    </div>
  );
}
