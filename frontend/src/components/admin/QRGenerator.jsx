export default function QRGenerator({ code }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">QR code</h3>
      <div className="mt-4 grid place-items-center rounded-3xl bg-slate-50 p-5">
        <img src="/qr-placeholder.png" alt="Quiz QR" className="h-48 w-48 object-contain" />
      </div>
      <p className="mt-4 text-sm text-slate-600">Use this QR code to let participants join instantly.</p>
    </div>
  );
}
