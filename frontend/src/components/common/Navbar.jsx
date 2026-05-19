import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="text-xl font-semibold text-slate-900">
          Quizzer
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">
            Home
          </Link>
          {user ? (
            <button onClick={logout} className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-700">
              Logout
            </button>
          ) : (
            <Link to="/login" className="rounded-full bg-slate-900 px-4 py-2 text-sm text-white transition hover:bg-slate-700">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
