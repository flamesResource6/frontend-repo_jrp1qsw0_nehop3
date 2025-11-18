import React from 'react'
import { motion } from 'framer-motion'
import { Github, Instagram, Linkedin } from 'lucide-react'

const links = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/' },
]

export default function Social() {
  return (
    <section id="social" className="relative bg-black py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Social</h2>
          <div className="h-px flex-1 mx-6 bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent" />
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {links.map(({ name, icon: Icon, href }, i) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/70 p-6 hover:border-zinc-700/80 transition shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-10 transition" />
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-zinc-400" />
                <span className="text-zinc-200 font-medium">{name}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
