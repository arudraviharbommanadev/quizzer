export default function FullscreenWarning({ required }) {
  if (!required) return null;
  return (
    <div className="rounded-3xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
      Fullscreen is required for this quiz to reduce distractions.
    </div>
  );
}
