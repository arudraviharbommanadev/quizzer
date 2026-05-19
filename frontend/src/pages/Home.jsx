import { Link } from 'react-router-dom';
import Navbar from './../components/common/Navbar.jsx';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-6 rounded-4xl bg-white p-10 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Secure assessment platform</p>
            <h1 className="text-4xl font-semibold text-slate-900">Quizzer empowers admins and participants with a modern exam workflow.</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">Build quizzes with proctoring, randomized delivery, and intuitive analytics in a light-themed interface designed for productivity.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/login" className="rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-700">
                Admin login
              </Link>
              <Link to="/join" className="rounded-3xl border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                Join quiz
              </Link>
            </div>
          </section>
          <section className="rounded-4xl bg-gradient-to-br from-slate-900 to-slate-700 p-10 text-white shadow-soft">
            <h2 className="text-2xl font-semibold">Platform highlights</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7">
              <li>• Admin console with quiz creation, upload, and deployment.</li>
              <li>• Participant journey with instructions, proctoring, and secure submission.</li>
              <li>• Tailwind-based light theme for clean readability.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
