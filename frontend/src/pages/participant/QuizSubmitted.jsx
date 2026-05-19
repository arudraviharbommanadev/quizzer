import { Link } from 'react-router-dom';
import QuizLayout from '../../layouts/QuizLayout.jsx';

export default function QuizSubmitted() {
  return (
    <QuizLayout>
      <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-soft">
        <h1 className="text-3xl font-semibold text-slate-900">Quiz submitted</h1>
        <p className="mt-4 text-slate-600">Your responses have been recorded successfully.</p>
        <Link to="/" className="mt-8 inline-flex rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">
          Return to home
        </Link>
      </div>
    </QuizLayout>
  );
}
