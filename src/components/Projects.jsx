import React from 'react'
import { motion } from 'framer-motion'
import { GalleryHorizontal, Code2, Camera } from 'lucide-react'

const projects = [
  {
    title: 'Cinematic Reel',
    icon: Camera,
    desc: 'Short-form edits with dramatic pacing and moody grading.',
  },
  {
    title: 'Interactive Experiments',
    icon: Code2,
    desc: 'Futuristic UI concepts with sharp, minimal interactions.',
  },
  {
    title: 'Selected Works',
    icon: GalleryHorizontal,
    desc: 'A curated grid of projects with a sleek, metallic accent.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_20%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Projects</h2>
          <div className="h-px flex-1 mx-6 bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, icon: Icon, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950/70 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-zinc-700/80 transition"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-10 transition" />
              <Icon className="w-6 h-6 text-zinc-400 mb-4" />
              <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
              <p className="text-zinc-400 mt-2 text-sm leading-relaxed">{desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent" />
              <button className="mt-4 text-sm text-zinc-300 hover:text-zinc-100 transition">
                View details →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
