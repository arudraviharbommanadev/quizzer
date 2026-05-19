import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';

export default function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await login(form);
      navigate('/admin');
    } catch (err) {
      setError(err?.response?.data?.message || 'Unable to login.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold text-slate-900">Admin login</h2>
      <p className="text-sm text-slate-600">Secure access for administrators.</p>
      {error && <div className="rounded-2xl bg-rose-100 p-3 text-sm text-rose-700">{error}</div>}
      <label className="space-y-2 text-sm text-slate-700">
        Email
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus:border-slate-900 focus:outline-none"
        />
      </label>
      <label className="space-y-2 text-sm text-slate-700">
        Password
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 focus:border-slate-900 focus:outline-none"
        />
      </label>
      <button type="submit" className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-white transition hover:bg-slate-700">
        Sign in
      </button>
    </form>
  );
}
