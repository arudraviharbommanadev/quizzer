export default function RecentQuizTable({ items = [] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
        Recent quizzes
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-white text-slate-500">
            <th className="px-6 py-4">Title</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Participants</th>
          </tr>
        </thead>
        <tbody>
          {items.map((quiz) => (
            <tr key={quiz.id} className="border-t border-slate-200 hover:bg-slate-50">
              <td className="px-6 py-4">{quiz.title}</td>
              <td className="px-6 py-4 text-slate-600">{quiz.status}</td>
              <td className="px-6 py-4 text-slate-600">{quiz.participants}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
