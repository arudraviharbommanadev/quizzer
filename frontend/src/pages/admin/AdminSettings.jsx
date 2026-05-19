import AdminLayout from '../../layouts/AdminLayout.jsx';
import QuizSettings from '../../components/admin/QuizSettings.jsx';

export default function AdminSettings() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
          <p className="mt-2 text-sm text-slate-600">Configure security and grading preferences for the platform.</p>
        </div>
        <QuizSettings />
      </div>
    </AdminLayout>
  );
}
