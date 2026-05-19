export default function BulkUpload({ onUpload }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">Upload questions</h3>
      <p className="mt-2 text-sm text-slate-600">Upload an Excel or CSV file with quiz questions and answer mappings.</p>
      <input type="file" accept=".csv,.xlsx" onChange={(event) => onUpload(event.target.files?.[0])} className="mt-4" />
    </div>
  );
}
