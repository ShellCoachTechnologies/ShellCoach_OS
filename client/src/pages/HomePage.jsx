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
        <div className="max-w-7xl mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">ShellCoach OS</h1>
          <div>
            <button onClick={fetchHello} className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700">Try for Free</button>
          </div>
        </div>
      </header>
    </div>
  );
}
