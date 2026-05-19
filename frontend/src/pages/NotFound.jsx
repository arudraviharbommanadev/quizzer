import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout.jsx';

export default function NotFound() {
  return (
    <AuthLayout>
      <div className="rounded-4xl bg-slate-100 p-10 shadow-soft">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Page not found</h1>
          <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
          <Link to="/" className="mt-6 inline-flex rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700">
            Return home
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
