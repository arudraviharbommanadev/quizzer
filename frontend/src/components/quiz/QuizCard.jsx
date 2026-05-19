export default function QuizCard({ quiz }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{quiz.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{quiz.description}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{quiz.duration} min</span>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
        <span>{quiz.questions} questions</span>
        <span>Randomized: {quiz.shuffleQuestions ? 'Yes' : 'No'}</span>
      </div>
    </article>
  );
}
