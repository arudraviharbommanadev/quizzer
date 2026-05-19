import { formatSeconds } from '../../utils/timerUtils.js';

export default function Timer({ remaining }) {
  return (
    <div className="rounded-3xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 shadow-soft">
      Time remaining: {formatSeconds(remaining)}
    </div>
  );
}
