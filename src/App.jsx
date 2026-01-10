function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-12 text-center shadow-2xl max-w-md mx-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-6">
          Micro-Learn AI
        </h1>
        <p className="text-xl text-white/90 mb-8">
          AI-powered CS learning platform
        </p>
        <div className="space-y-3">
          <button className="w-full bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all">
            🚀 Start Learning
          </button>
          <button className="w-full bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all border border-white/30">
            👥 Leaderboard
          </button>
        </div>
        <p className="text-white/70 mt-8 text-sm">Day 1: Suditi Tomar</p>
      </div>
    </div>
  )
}

export default App
