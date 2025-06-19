export default function InstructorDashboard() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <aside className="w-64 bg-white shadow-xl p-4 space-y-6">
        <h2 className="text-2xl font-bold text-blue-600">Instructor Panel</h2>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Cohorts</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Assignments</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Lab Builder</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Quiz Generator</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Analytics</a>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Instructor Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h2 className="text-xl font-semibold text-gray-800">Active Learners</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">127</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h2 className="text-xl font-semibold text-gray-800">Assignments Due</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">5</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <h2 className="text-xl font-semibold text-gray-800">Avg. Completion Rate</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">82%</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Students</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-3">Name</th>
                <th className="py-2 px-3">Email</th>
                <th className="py-2 px-3">Progress</th>
                <th className="py-2 px-3">Last Activity</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Alex Morgan', email: 'alex@example.com', progress: '92%', last: '1 hour ago' },
                { name: 'Jamie Lee', email: 'jamie@example.com', progress: '78%', last: '3 hours ago' },
                { name: 'Riley Stone', email: 'riley@example.com', progress: '56%', last: 'Yesterday' },
              ].map((student, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2 px-3 font-medium text-gray-800">{student.name}</td>
                  <td className="py-2 px-3 text-gray-600">{student.email}</td>
                  <td className="py-2 px-3 text-blue-600 font-semibold">{student.progress}</td>
                  <td className="py-2 px-3 text-gray-500">{student.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
