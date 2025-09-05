import { motion } from 'framer-motion'

const jobs = [
  {
    role: 'Frontend Developer — Icreativez Technologies',
    period: '2024',
    points: [
      "Collaborated with the development team to design and implement responsive web pages for personal loans SpeedyFundsNow.com using HTML, CSS, and JavaScript.",
      "Designed and developed an interactive web dashboard using React, focusing on dynamic data visualization and a user-friendly interface.",
    ]
  },
  {
    role: 'Frontend Developer — Xpace Technologies pvt Ltd',
    period: '2024',
    points: [
      'Built animated, accessible UIs with React and Tailwind.',
      'Developed interactive 3D scenes with Three.js.',
      'Optimized performance: code-splitting and image strategies.'
    ]
  },
  {
    role: 'Computer Engineering — Graduate',
    period: '2021 — 2025',
    points: [
      'Final year project: immersive VR learning experience.',
      'Led a small team; delivered on time and documented.'
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 scroll-mt-40 md:scroll-mt-0">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold"
      >
        Experience
      </motion.h2>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {jobs.map((j, idx) => (
          <motion.div
            key={j.role}
            initial={{ y: 50, opacity: 0, scale: 0.8 }} // Increased Y and added a scale change
            whileInView={{ y: 0, opacity: 1, scale: 1 }} // Animate to final state
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: 'spring', // Use a spring transition for a natural feel
              stiffness: 100, // Controls the spring's stiffness
              damping: 10, // Controls the spring's dampening
              delay: idx * 0.1 // Increased delay for a more pronounced staggered effect
            }}
            className="rounded-2xl border border-white/10 bg-card p-6"
          >
            <h3 className="text-lg font-semibold">{j.role}</h3>
            <p className="mt-1 text-sm text-white/60">{j.period}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
              {j.points.map(p => <li key={p}>{p}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}