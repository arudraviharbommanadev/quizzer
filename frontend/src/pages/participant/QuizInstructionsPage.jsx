import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout.jsx';
import QuizInstructions from '../../components/quiz/QuizInstructions.jsx';

export default function QuizInstructionsPage() {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="space-y-6 rounded-4xl bg-slate-100 p-10 shadow-soft">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <QuizInstructions instructions="Follow the instructions carefully, keep your screen visible, and do not refresh during the attempt." />
          <div className="mt-6 flex justify-end">
            <button onClick={() => navigate('/quiz/attempt')} className="rounded-3xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-700">
              Start quiz
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
