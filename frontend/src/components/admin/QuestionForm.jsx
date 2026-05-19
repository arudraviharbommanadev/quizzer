export default function QuestionForm({ question = {}, onChange, onAdd }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">Question builder</h3>
      <label className="mt-4 block text-sm text-slate-700">
        Prompt
        <textarea
          value={question.prompt || ''}
          onChange={(e) => onChange({ ...question, prompt: e.target.value })}
          className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 focus:border-slate-900 focus:outline-none"
        />
      </label>
      <label className="mt-4 block text-sm text-slate-700">
        Options (comma separated)
        <input
          type="text"
          value={(question.options || []).join(', ')}
          onChange={(e) => onChange({ ...question, options: e.target.value.split(',').map((opt) => opt.trim()) })}
          className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 focus:border-slate-900 focus:outline-none"
        />
      </label>
      <button type="button" onClick={onAdd} className="mt-6 rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
        Add question
      </button>
    </div>
  );
}
