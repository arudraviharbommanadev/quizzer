import QuizLayout from '../../layouts/QuizLayout.jsx';

export default function ParticipantProfile() {
  return (
    <QuizLayout>
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-2xl font-semibold text-slate-900">Participant profile</h1>
        <p className="mt-3 text-sm text-slate-600">Your registration details and current quiz progress are visible here.</p>
      </div>
    </QuizLayout>
  );
}
