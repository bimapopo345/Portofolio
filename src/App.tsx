import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Awards from "./components/Awards";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Modern decorative background elements */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-white/20" />

        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] 
            bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(99,102,241,0.15),transparent)] 
            animate-pulse-soft"
          />
          <div
            className="absolute top-[20%] right-0 w-[600px] h-[600px] 
            bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent)] 
            rounded-full blur-3xl animate-float"
          />
          <div
            className="absolute top-[60%] left-0 w-[600px] h-[600px] 
            bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1),transparent)] 
            rounded-full blur-3xl"
            style={{ animationDelay: "-2s" }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 pattern-grid opacity-[0.02]" />
      </div>

      <Navbar />

      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-32">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Certifications />
          <Skills />
          <Awards />
        </div>

        {/* Decorative side elements */}
        <div
          className="hidden lg:block fixed top-1/4 -left-12 w-24 h-96 
          bg-gradient-to-b from-indigo-500/5 to-purple-500/5 blur-3xl"
        />
        <div
          className="hidden lg:block fixed top-1/2 -right-12 w-24 h-96 
          bg-gradient-to-b from-pink-500/5 to-purple-500/5 blur-3xl"
        />
      </main>

      {/* Modern gradient footer */}
      <footer className="relative mt-32">
        <div className="h-24 bg-gradient-to-t from-white via-white to-transparent" />
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r 
          from-transparent via-indigo-500/10 to-transparent"
        />
      </footer>
    </div>
  );
}

export default App;
