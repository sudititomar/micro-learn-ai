import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <article className="glass-panel max-w-2xl w-full p-8 sm:p-12 lg:p-16 xl:p-20 rounded-3xl text-center mx-auto">
        {/* Logo */}
        <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
          <span className="text-2xl sm:text-3xl">📚</span>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-6 leading-tight">
          Micro-Learn AI
        </h1>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-10 leading-relaxed max-w-lg mx-auto">
          Master DSA, React & full-stack development with personalized AI learning paths
        </p>
        
        {/* CTA */}
        <Link 
          to="/login" 
          className="inline-flex btn-primary items-center gap-3 text-lg px-8 py-4 w-full sm:w-auto shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          title="Start your learning journey"
        >
          <span>Start Learning</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </article>
    </main>
  )
}

export default App
