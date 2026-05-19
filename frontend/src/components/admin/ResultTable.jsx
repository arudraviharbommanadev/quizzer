export default function ResultTable({ results = [] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      <div className="border-b border-slate-200 px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Quiz results</div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-white text-slate-500">
            <th className="px-6 py-4">Participant</th>
            <th className="px-6 py-4">Score</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id} className="border-t border-slate-200 hover:bg-slate-50">
              <td className="px-6 py-4">{result.name}</td>
              <td className="px-6 py-4 text-slate-600">{result.score}</td>
              <td className="px-6 py-4 text-slate-600">{result.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
