import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full bg-black overflow-hidden">
      {/* Cinematic vignette + moody spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(800px_400px_at_80%_30%,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 sm:py-36 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="backdrop-blur-[2px]"
        >
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-zinc-400/70 mb-6">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] text-zinc-50 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            A Great Student by Day and an Inspiring Content Creator by Night
          </h1>
          <p className="mt-6 max-w-2xl text-zinc-300/80 text-base sm:text-lg">
            Cinematic, restrained, and precise. A portfolio crafted with moody lighting, metallic accents, and a confident, modern edge.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-md border border-zinc-700 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-900 hover:border-zinc-600 transition shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              Explore Work
            </a>
            <a
              href="#social"
              className="px-5 py-2.5 rounded-md border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition"
            >
              Connect
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle horizon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600/20 to-transparent" />
    </section>
  )
}
