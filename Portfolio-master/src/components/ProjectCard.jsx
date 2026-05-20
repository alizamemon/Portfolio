import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ index, title, desc, img, tech, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-card"
    >
      <div className="relative h-56 overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/80 via-base/20 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-white/70 text-justify">{desc}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map(t => (
            <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">{t}</li>
          ))}
        </ul>
      </div>
    </motion.a>
  )
}
