import AuthForm from './components/AuthForm';


export default function Home() {
  return (
    <main className="flex flex-col-reverse lg:flex-row min-h-screen">
      {/* Left Column (CTA) */}
      <div
        className="lg:w-1/2 p-10"
        style={{ background: 'linear-gradient(45deg, #00BFFF, #0099CC)' }}
      >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl font-bold mb-2 text-center text-white">
            Welcome to ChatBox!
          </h1>
          <p className="text-lg my-6 mx-auto text-center text-white">
            Your Ultimate Chat Experience
          </p>
        </div>
      </div>

      {/* Right Column (Form) */}
      <div className="lg:w-1/2 bg-gray-100 p-10">
        <div className="sm:mx-auto flex flex-col justify-center h-full sm:w-full sm:max-w-md">
          <AuthForm />
        </div>
      </div>
    </main>
  );
}
