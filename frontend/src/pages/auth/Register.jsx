import RegisterForm from '../../components/auth/RegisterForm.jsx';
import AuthLayout from '../../layouts/AuthLayout.jsx';

export default function Register() {
  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="rounded-4xl bg-slate-100 p-10 shadow-soft">
          <RegisterForm />
        </div>
      </div>
    </AuthLayout>
  );
}
