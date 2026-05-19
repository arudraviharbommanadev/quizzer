import { useState } from 'react';
import QuizForm from '../../components/admin/QuizForm.jsx';
import AdminLayout from '../../layouts/AdminLayout.jsx';
import { DEFAULT_QUIZ } from '../../utils/constants.js';

export default function CreateQuiz() {
  const [quiz, setQuiz] = useState(DEFAULT_QUIZ);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Create quiz', quiz);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-slate-900">Create new quiz</h1>
          <p className="mt-2 text-sm text-slate-600">Build the assessment and configure security options.</p>
        </div>
        <QuizForm quiz={quiz} onChange={setQuiz} onSubmit={handleSubmit} submitLabel="Publish quiz" />
      </div>
    </AdminLayout>
  );
}
