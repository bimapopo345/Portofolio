import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Awards from './components/Awards'

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-screen bg-gradient-to-b from-indigo-50/50 to-white/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(129,140,248,0.1),transparent)]" />
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.08),transparent)] rounded-full blur-2xl" />
        <div className="absolute top-[60%] left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent)] rounded-full blur-2xl" />
      </div>

      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-40">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Awards />
      </div>

      {/* Footer gradient */}
      <div className="h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}

export default App