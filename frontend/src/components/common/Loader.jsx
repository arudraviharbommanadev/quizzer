export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="flex min-h-[240px] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-10 shadow-soft">
      <div className="text-center text-slate-600">
        <div className="mb-4 inline-flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-slate-200 border-t-slate-900"></div>
        <div>{label}</div>
      </div>
    </div>
  );
}
