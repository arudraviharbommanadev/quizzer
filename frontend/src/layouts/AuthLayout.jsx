import Navbar from '../components/common/Navbar.jsx';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar />
      <div className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-3xl">{children}</div>
      </div>
    </div>
  );
}
