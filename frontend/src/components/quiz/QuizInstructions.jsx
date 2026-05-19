export default function QuizInstructions({ instructions }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-slate-900">Instructions</h2>
      <p className="mt-3 text-slate-600">{instructions}</p>
    </section>
  );
}
