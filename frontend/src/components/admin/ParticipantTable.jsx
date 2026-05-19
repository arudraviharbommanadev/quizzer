export default function ParticipantTable({ participants = [] }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      <div className="border-b border-slate-200 px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Participants</div>
      <div className="divide-y divide-slate-200">
        {participants.map((participant) => (
          <div key={participant.id} className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:justify-between sm:items-center">
            <div>
              <p className="font-medium text-slate-900">{participant.name}</p>
              <p className="text-sm text-slate-600">{participant.email}</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{participant.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
