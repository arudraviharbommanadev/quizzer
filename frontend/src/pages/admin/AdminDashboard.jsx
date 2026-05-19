import DashboardCard from '../../components/dashboard/DashboardCard.jsx';
import RecentQuizTable from '../../components/dashboard/RecentQuizTable.jsx';
import StatsCards from '../../components/dashboard/StatsCards.jsx';
import AdminLayout from '../../layouts/AdminLayout.jsx';

const stats = [
  { label: 'Total quizzes', value: 18, description: 'Live and draft.' },
  { label: 'Active students', value: 132, description: 'Currently engaging.' },
  { label: 'Avg score', value: '82%', description: 'Average performance.' },
];

const recents = [
  { id: '1', title: 'React fundamentals', status: 'Live', participants: 60 },
  { id: '2', title: 'Data structures', status: 'Draft', participants: 14 },
  { id: '3', title: 'Math aptitude', status: 'Live', participants: 58 },
];

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="grid gap-6 xl:grid-cols-3">
          <StatsCards stats={stats} />
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          <DashboardCard title="Submission rate" value="91%" details="Healthy completion rate." icon="📈" />
          <DashboardCard title="Unreviewed quizzes" value="3" details="Quizzes waiting for deployment." icon="🗂" />
        </div>
        <RecentQuizTable items={recents} />
      </div>
    </AdminLayout>
  );
}
