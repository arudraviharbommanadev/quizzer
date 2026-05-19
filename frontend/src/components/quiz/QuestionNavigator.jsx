export default function QuestionNavigator({ questions, currentIndex, onSelect }) {
  return (
    <div className="grid grid-cols-5 gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft md:grid-cols-10">
      {questions.map((question, index) => (
        <button
          key={question.id}
          type="button"
          onClick={() => onSelect(index)}
          className={`rounded-2xl px-3 py-2 text-xs font-semibold transition ${index === currentIndex ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
