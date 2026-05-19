import { useState } from 'react';
import QuizForm from '../../components/admin/QuizForm.jsx';
import AdminLayout from '../../layouts/AdminLayout.jsx';
import { DEFAULT_QUIZ } from '../../utils/constants.js';

export default function EditQuiz() {
  const [quiz, setQuiz] = useState(DEFAULT_QUIZ);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Update quiz', quiz);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-slate-900">Edit quiz</h1>
          <p className="mt-2 text-sm text-slate-600">Update the quiz configuration and settings.</p>
        </div>
        <QuizForm quiz={quiz} onChange={setQuiz} onSubmit={handleSubmit} submitLabel="Save changes" />
      </div>
    </AdminLayout>
  );
}
