import SignInForm from "./SignInForm";

const SignInPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>
        <SignInForm />
      </div>
    </main>
  );
};

export default SignInPage;
