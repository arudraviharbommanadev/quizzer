import AdminLayout from '../../layouts/AdminLayout.jsx';
import DeployQuiz from '../../components/admin/DeployQuiz.jsx';
import QRGenerator from '../../components/admin/QRGenerator.jsx';

export default function DeployQuizPage() {
  return (
    <AdminLayout>
      <div className="grid gap-6 xl:grid-cols-2">
        <DeployQuiz quiz={{ id: 'Q-1024' }} />
        <QRGenerator code="Q-1024" />
      </div>
    </AdminLayout>
  );
}
