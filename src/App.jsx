import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Social from './components/Social'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-zinc-100">
      {/* Top chrome: razor-thin metallic rule */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-600/30 to-transparent" />
      <Hero />
      <Projects />
      <Skills />
      <Social />
      <footer className="relative bg-black py-14">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_50%_0%,rgba(255,255,255,0.04),transparent_60%)]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 flex items-center justify-between">
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} — Crafted with intent.</p>
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <span className="h-1 w-1 rounded-full bg-zinc-600/60" />
            <span>Dark. Cinematic. Minimal.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
