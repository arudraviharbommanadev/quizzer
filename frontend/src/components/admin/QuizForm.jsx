export default function QuizForm({ quiz = {}, onChange, onSubmit, submitLabel = 'Save Quiz' }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
      <div className="grid gap-6 lg:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700">
          Quiz title
          <input
            value={quiz.title || ''}
            onChange={(e) => onChange({ ...quiz, title: e.target.value })}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus:border-slate-900 focus:outline-none"
            required
          />
        </label>
        <label className="space-y-2 text-sm text-slate-700">
          Duration (minutes)
          <input
            type="number"
            min="5"
            value={quiz.duration || 15}
            onChange={(e) => onChange({ ...quiz, duration: Number(e.target.value) })}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus:border-slate-900 focus:outline-none"
            required
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-700">
        Description
        <textarea
          value={quiz.description || ''}
          onChange={(e) => onChange({ ...quiz, description: e.target.value })}
          className="w-full min-h-[120px] rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 focus:border-slate-900 focus:outline-none"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
          <input type="checkbox" checked={quiz.shuffleQuestions} onChange={(e) => onChange({ ...quiz, shuffleQuestions: e.target.checked })} />
          <span className="text-sm text-slate-700">Randomize questions</span>
        </label>
        <label className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
          <input type="checkbox" checked={quiz.shuffleOptions} onChange={(e) => onChange({ ...quiz, shuffleOptions: e.target.checked })} />
          <span className="text-sm text-slate-700">Randomize options</span>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
          <input type="checkbox" checked={quiz.fullscreenRequired} onChange={(e) => onChange({ ...quiz, fullscreenRequired: e.target.checked })} />
          <span className="text-sm text-slate-700">Fullscreen required</span>
        </label>
        <label className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
          <input type="checkbox" checked={quiz.autoSubmit} onChange={(e) => onChange({ ...quiz, autoSubmit: e.target.checked })} />
          <span className="text-sm text-slate-700">Auto submit</span>
        </label>
      </div>
      <button type="submit" className="rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
        {submitLabel}
      </button>
    </form>
  );
}
