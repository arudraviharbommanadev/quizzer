import Footer from '../components/common/Footer.jsx';
import Navbar from '../components/common/Navbar.jsx';
import Sidebar from '../components/common/Sidebar.jsx';

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <Sidebar />
        <div className="flex-1 space-y-6">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
