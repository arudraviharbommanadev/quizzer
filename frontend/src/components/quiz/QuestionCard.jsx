export default function QuestionCard({ question, onAnswer }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Question</h3>
          <p className="mt-1 text-sm text-slate-600">{question.prompt}</p>
        </div>
        <span className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{question.type}</span>
      </div>
      <div className="space-y-3">{question.options?.map((option) => onAnswer(option))}</div>
    </div>
  );
}
