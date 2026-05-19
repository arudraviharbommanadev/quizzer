export default function ConfirmDialog({ open, message, onConfirm, onCancel }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-soft">
        <p className="mb-6 text-slate-700">{message}</p>
        <div className="flex justify-end gap-3">
          <button onClick={onCancel} className="rounded-2xl border border-slate-300 px-4 py-2 text-sm text-slate-700">
            Cancel
          </button>
          <button onClick={onConfirm} className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
