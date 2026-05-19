import { NavLink } from 'react-router-dom';

const items = [
  { name: 'Dashboard', to: '/admin' },
  { name: 'Create Quiz', to: '/admin/create' },
  { name: 'Upload Questions', to: '/admin/upload' },
  { name: 'Deploy Quiz', to: '/admin/deploy' },
  { name: 'Results', to: '/admin/results' },
  { name: 'Settings', to: '/admin/settings' },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 flex-col gap-2 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft lg:flex">
      <div className="mb-4 text-sm uppercase tracking-[0.2em] text-slate-500">Admin</div>
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `rounded-2xl px-4 py-3 text-sm transition ${isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </aside>
  );
}
