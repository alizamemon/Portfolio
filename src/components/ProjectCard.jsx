import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ index, title, desc, img, tech, link, featured }) {
  return (
    <motion.a
      layout
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-card transition-colors hover:border-primary/40"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />

        <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-ink shadow-glow">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-2 text-white/60 text-sm leading-relaxed line-clamp-3">{desc}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5 pt-1">
          {tech.slice(0, 5).map(t => (
            <li
              key={t}
              className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </motion.a>
  )
}
