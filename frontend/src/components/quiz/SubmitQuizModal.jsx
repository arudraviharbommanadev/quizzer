export default function SubmitQuizModal({ open, onClose, onSubmit }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-slate-900">Submit quiz</h3>
        <p className="mt-3 text-slate-600">Once you submit your quiz, answers are final. Please review before continuing.</p>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-2xl border border-slate-300 px-4 py-2 text-sm text-slate-700">
            Cancel
          </button>
          <button onClick={onSubmit} className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
