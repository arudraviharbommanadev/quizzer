import LoginForm from '../../components/auth/LoginForm.jsx';
import AuthLayout from '../../layouts/AuthLayout.jsx';

export default function Login() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="rounded-4xl bg-slate-100 p-10 shadow-soft">
          <LoginForm />
        </div>
      </div>
    </AuthLayout>
  );
}
