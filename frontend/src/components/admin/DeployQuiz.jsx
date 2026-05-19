export default function DeployQuiz({ quiz }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">Deploy quiz</h3>
      <p className="mt-2 text-sm text-slate-600">Publish your quiz and share the link with participants.</p>
      <div className="mt-6 rounded-3xl bg-slate-50 p-4 text-sm text-slate-700">
        {quiz?.id ? `Quiz ID: ${quiz.id}` : 'Select a quiz to deploy.'}
      </div>
    </div>
  );
}
