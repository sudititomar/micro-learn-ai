export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="glass-panel max-w-6xl mx-auto p-8 rounded-3xl mx-6 mt-12 mb-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
            <p className="text-xl text-gray-600">Continue your learning journey, Suditi</p>
          </div>
          <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-xl transition-all">
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: "📚", label: "Courses", value: "12", color: "text-blue-600" },
            { icon: "⏱️", label: "Hours", value: "48h", color: "text-green-600" },
            { icon: "🔥", label: "Streak", value: "7 days", color: "text-orange-600" },
            { icon: "🥇", label: "Rank", value: "#42", color: "text-purple-600" }
          ].map((stat, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl hover:shadow-xl transition-all text-center">
              <div className="text-3xl mb-4">{stat.icon}</div>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">{stat.label}</p>
              <p className="text-3xl font-bold {stat.color}">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="glass-panel p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
            Continue Learning
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "DSA Mastery", subtitle: "Arrays, Trees, Graphs", color: "from-blue-500 to-blue-600" },
              { title: "React Advanced", subtitle: "Hooks & Routing", color: "from-indigo-500 to-purple-600" },
              { title: "Node.js API", subtitle: "Express Backend", color: "from-green-500 to-emerald-600" }
            ].map((course, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl hover:shadow-xl transition-all cursor-pointer group">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.subtitle}</p>
                <button className="btn-primary w-full group-hover:shadow-lg transform group-hover:-translate-y-1 transition-all">
                  Continue Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
