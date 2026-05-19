import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout.jsx';

export default function JoinQuiz() {
  const [form, setForm] = useState({ name: '', email: '', rollNumber: '' });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/quiz/instructions');
  };

  return (
    <AuthLayout>
      <div className="space-y-6 rounded-4xl bg-slate-100 p-10 shadow-soft">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <h1 className="text-2xl font-semibold text-slate-900">Join quiz</h1>
          <p className="mt-2 text-sm text-slate-600">Enter your details to start the secure participant workflow.</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-slate-900"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-slate-900"
            />
            <input
              type="text"
              placeholder="Roll number"
              value={form.rollNumber}
              onChange={(e) => setForm({ ...form, rollNumber: e.target.value })}
              required
              className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-slate-900"
            />
            <button type="submit" className="w-full rounded-3xl bg-slate-900 px-4 py-3 text-white transition hover:bg-slate-700">
              Continue
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
