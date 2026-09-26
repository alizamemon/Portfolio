import { motion } from 'framer-motion'

const jobs = [
  {
    role: 'Trainee Full-Stack Engineer',
    org: 'Utopia Industries Pvt Ltd | Pakistan Engineering Council',
    period: 'Apr 2026 – Present',
    points: [
      'Contributing to an internal ERP system, developing scalable backend services with Java 17 and Spring Boot integrated with high-availability MySQL databases.',
      'Designed a project & task management module with team assignments, start/end dates, and dynamic Gantt chart generation for task timelines and dependencies.',
      'Built automatic task rescheduling and deadline-extension logic, improving planning flexibility and on-time delivery tracking.',
      'Enforced system-wide RBAC and standardized QR code handling across PDF generation modules for stronger document security.',
      'Replaced a legacy file-based QR code approach with a secure, in-memory method across report and voucher modules.',
    ]
  },
  {
    role: 'Frontend Developer Intern',
    org: 'iCreativez Technologies Pvt Ltd',
    period: 'Sep 2024 – Oct 2024',
    points: [
      'Engineered responsive, dynamic web interfaces using modern JavaScript frameworks, ensuring optimized frontend rendering and seamless REST API data visualization.',
      'Designed and developed an interactive web dashboard using React, focusing on dynamic data visualization and a user-friendly interface.',
    ]
  },
  {
    role: 'Web Development Intern',
    org: 'Xpace Technologies Pvt Ltd',
    period: 'May 2024 – Jul 2024',
    points: [
      'Developed full-stack web modules focused on database integration, structured data management, and secure user record processing using MySQL and backend frameworks.',
      'Built animated, accessible UIs with React and Tailwind, and interactive 3D scenes with Three.js.',
    ]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="pb-4">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="section-eyebrow block"
      >
        Where I've worked
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-2 font-display text-3xl md:text-4xl font-bold"
      >
        Experience
      </motion.h2>

      <div className="mt-12 relative pl-8 md:pl-10">
        <div className="absolute left-[7px] md:left-[9px] top-1 bottom-1 w-px bg-gradient-to-b from-primary via-primary2 to-transparent" />

        {jobs.map((j, idx) => (
          <motion.div
            key={j.role + j.org}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 100, damping: 14, delay: idx * 0.12 }}
            className="relative mb-10 last:mb-0"
          >
            <span className={`absolute -left-[29px] md:-left-[37px] top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-base ${idx === 0 ? 'bg-gradient-to-br from-primary to-primary2 shadow-glow' : 'bg-white/25'}`} />

            <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{j.role}</h3>
                <span className="text-xs font-medium text-primary">{j.period}</span>
              </div>
              <p className="mt-1 text-sm text-white/55">{j.org}</p>
              <ul className="mt-4 space-y-2">
                {j.points.map(p => (
                  <li key={p} className="flex gap-2 text-white/70 text-sm leading-relaxed">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
