
export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white p-6 shadow">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
      </header>
      <main className="p-8">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Linux Fundamentals', progress: '65%' },
              { title: 'DevOps Basics', progress: '42%' },
              { title: 'Cloud CLI Labs', progress: '90%' }
            ].map((course, idx) => (
              <div key={idx} className="bg-gray-50 border rounded-2xl p-4 shadow hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mt-2">Progress: {course.progress}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Resume Course
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
