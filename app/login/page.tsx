import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Rorilex CMS</h1>

        <p className="text-slate-500 text-center mb-8">Admin Login</p>

        <LoginForm />
      </div>
    </div>
  );
}
