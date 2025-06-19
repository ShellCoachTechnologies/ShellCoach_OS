export default function HomePage() {
  const apiBase = import.meta.env.VITE_API_BASE;

  async function fetchHello() {
    const res = await fetch(`${apiBase}/api/hello`);
    const data = await res.json();
    alert(data.message);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">ShellCoach OS</h1>
          <div>
            <button onClick={fetchHello} className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700">Try for Free</button>
            <button className="ml-4 border border-blue-600 text-blue-600 px-4 py-2 rounded-xl hover:bg-blue-50">See a Demo</button>
          </div>
        </div>
      </header>

      <main className="mt-10 max-w-5xl mx-auto px-4">
        <section className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900">An AI-Powered LMS for Hands-On Tech Training</h2>
          <p className="mt-4 text-lg text-gray-600">Teach Linux, DevOps, and Cloud with labs, quizzes, AI guidance, and instructor tools — all in one place.</p>
        </section>
      </main>
    </div>
  );
}
