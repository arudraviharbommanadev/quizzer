import AdminLayout from '../../layouts/AdminLayout.jsx';
import ParticipantTable from '../../components/admin/ParticipantTable.jsx';

const participants = [
  { id: 'p1', name: 'Aria Thompson', email: 'aria@example.com', status: 'Joined' },
  { id: 'p2', name: 'Noah Lee', email: 'noah@example.com', status: 'Attempting' },
  { id: 'p3', name: 'Mia Patel', email: 'mia@example.com', status: 'Completed' },
];

export default function QuizParticipants() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-slate-900">Participants</h1>
          <p className="mt-2 text-sm text-slate-600">Monitor attendance and live quiz progress.</p>
        </div>
        <ParticipantTable participants={participants} />
      </div>
    </AdminLayout>
  );
}
