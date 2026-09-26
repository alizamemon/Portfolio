import React from 'react';
import { motion } from 'framer-motion';
import profile from '/public/profile3.jpg';

const stats = [
  { label: 'Projects Built', value: '10+' },
  { label: 'CGPA', value: '3.5/4.0' },
  { label: 'Certifications', value: '10+' },
];

export default function About() {
  return (
      <section id="about" className="py-5 md:pb-4 md:pt-2 flex flex-col justify-between min-h-[calc(80vh-120px)] md:min-h-0">
        <div>
          <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="section-eyebrow block text-center md:text-left text-[11px] sm:text-xs"
          >
            Get to know me
          </motion.span>
          <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="mt-0.5 font-display text-xl md:text-4xl font-bold text-center md:text-left"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <div className="mt-3 md:mt-10 grid grid-cols-1 items-start gap-3 md:gap-10 md:grid-cols-[280px,1fr]">
            {/* Profile Picture */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mx-auto md:mx-0"
            >
              <div className="relative w-28 sm:w-36 md:w-56">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-primary2/30 blur-md md:blur-xl" />
                <img
                    src={profile}
                    alt="Aliza Memon"
                    className="relative w-28 sm:w-36 md:w-56 rounded-2xl border border-line object-cover shadow-card"
                />
              </div>
            </motion.div>

            <div>
              {/* Mobile View Clean & Readable Text */}
              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="block md:hidden text-white/80 text-xs text-left leading-relaxed mt-1"
              >
                <p>
                  Computer Engineering graduate with expertise in <span className="text-white font-medium">Java & Full-Stack Web Development</span>.
                </p>
                <p className="mt-1.5 text-white/65 text-[11px]">
                  Specialized in <span className="text-white/85">Spring Boot, React, AWS cloud</span>, RBAC security, and ML-powered systems.
                </p>
              </motion.div>

              {/* Desktop View Detailed Text */}
              <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="hidden md:block text-white/70 text-base text-justify leading-relaxed"
              >
                I'm a Computer Engineering graduate with hands-on expertise in{' '}
                <span className="text-white/90 font-medium">Java and full-stack web development</span>.
                I'm passionate about building reliable backend systems, REST APIs, and scalable web
                applications using <span className="text-white/90 font-medium">Spring Boot and React</span>,
                with solid experience in database integrity, secure access control (RBAC/JWT), and
                production deployments on AWS. My background also includes cybersecurity — designing
                encrypted applications and ML-powered threat detection systems — which shapes how I
                approach building secure software end-to-end.
              </motion.p>

              {/* Stats Section */}
              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-3 md:mt-8 grid grid-cols-3 gap-1.5 sm:gap-4"
              >
                {stats.map(s => (
                    <div key={s.label} className="glass rounded-xl p-2 sm:p-4 text-center">
                      <p className="font-display text-xs sm:text-2xl font-bold gradient-text">{s.value}</p>
                      <p className="mt-0.5 text-[8px] sm:text-xs text-white/60 leading-tight">{s.label}</p>
                    </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
}