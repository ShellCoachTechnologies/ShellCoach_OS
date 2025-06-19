export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">ShellCoach OS</h1>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700">Try for Free</button>
            <button className="ml-4 border border-blue-600 text-blue-600 px-4 py-2 rounded-xl hover:bg-blue-50">See a Demo</button>
          </div>
        </div>
      </header>

      <main className="mt-10 max-w-5xl mx-auto px-4">
        <section className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900">An AI-Powered LMS for Hands-On Tech Training</h2>
          <p className="mt-4 text-lg text-gray-600">Teach Linux, DevOps, and Cloud with labs, quizzes, AI guidance, and instructor tools — all in one place.</p>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">Join Early Access</button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'AI Learning Assistant', desc: 'Real-time explanations and adaptive learning.' },
            { title: 'Auto-Validated Labs', desc: 'Hands-on labs from beginner to expert.' },
            { title: 'Smart Quizzes', desc: 'Dynamic quizzes with instant feedback.' },
            { title: 'Instructor Dashboard', desc: 'Track cohorts, assignments, and engagement.' },
            { title: 'Role-Based Access', desc: 'Portals for students, instructors, and admins.' },
            { title: 'Built-in Analytics', desc: 'Insights into learner progress and outcomes.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to revolutionize your tech training?</h3>
          <p className="text-gray-600 mb-6">Join the waitlist and get 3 months free.</p>
          <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-xl border border-gray-300" />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-r-xl hover:bg-blue-700">Notify Me</button>
        </section>
      </main>
    </div>
  );
}
