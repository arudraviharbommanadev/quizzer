export default function MultiSelectOption({ label, selected, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full rounded-3xl border px-4 py-3 text-left transition ${selected ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : 'border-slate-200 bg-white text-slate-800 hover:border-slate-400'}`}
    >
      {label}
    </button>
  );
}
