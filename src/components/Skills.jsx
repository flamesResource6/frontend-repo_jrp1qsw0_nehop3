import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'Video Editing',
  'Color Grading',
  'Storyboarding',
  'React',
  'Motion Design',
  'Photography',
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-black py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_10%,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Skills</h2>
          <div className="h-px flex-1 mx-6 bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent" />
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="px-4 py-2 rounded-md border border-zinc-800/90 bg-zinc-950/70 text-zinc-300 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
