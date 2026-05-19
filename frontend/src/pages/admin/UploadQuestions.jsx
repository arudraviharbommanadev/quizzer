import { useState } from 'react';
import BulkUpload from '../../components/admin/BulkUpload.jsx';
import AdminLayout from '../../layouts/AdminLayout.jsx';

export default function UploadQuestions() {
  const [fileName, setFileName] = useState('');
  const handleUpload = (file) => {
    setFileName(file?.name || '');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-slate-900">Upload question bank</h1>
          <p className="mt-2 text-sm text-slate-600">Bulk import questions and answers from CSV or Excel.</p>
          {fileName && <p className="mt-3 text-sm text-slate-700">Selected file: {fileName}</p>}
        </div>
        <BulkUpload onUpload={handleUpload} />
      </div>
    </AdminLayout>
  );
}
