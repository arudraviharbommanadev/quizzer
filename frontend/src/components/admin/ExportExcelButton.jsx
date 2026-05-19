export default function ExportExcelButton({ onExport }) {
  return (
    <button onClick={onExport} className="rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
      Export to Excel
    </button>
  );
}
