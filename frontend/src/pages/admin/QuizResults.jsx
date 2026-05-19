import AdminLayout from '../../layouts/AdminLayout.jsx';
import ResultTable from '../../components/admin/ResultTable.jsx';

const results = [
  { id: 'r1', name: 'Aria Thompson', score: '92%', status: 'Passed' },
  { id: 'r2', name: 'Noah Lee', score: '84%', status: 'Passed' },
  { id: 'r3', name: 'Mia Patel', score: '78%', status: 'Passed' },
];

export default function QuizResults() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-slate-900">Quiz results</h1>
          <p className="mt-2 text-sm text-slate-600">Review score summaries and export participant data.</p>
        </div>
        <ResultTable results={results} />
      </div>
    </AdminLayout>
  );
}
