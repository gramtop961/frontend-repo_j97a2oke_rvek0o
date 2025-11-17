import Header from './components/Header'
import Offerings from './components/Offerings'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Offerings />
      <Certifications />
      <Contact />
      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-indigo-600 text-white grid place-content-center font-bold">TL</div>
            <span className="font-semibold">ThinkLouder</span>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} ThinkLouder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
