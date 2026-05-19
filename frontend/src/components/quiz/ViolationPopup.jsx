export default function ViolationPopup({ open, message }) {
  if (!open) return null;
  return (
    <div className="fixed inset-x-4 bottom-6 z-50 rounded-3xl bg-rose-700 px-5 py-4 text-white shadow-soft">
      {message}
    </div>
  );
}
