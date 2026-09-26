import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowUpRight } from 'lucide-react';
import AuroraBackground from './AuroraBackground';
import Magnetic from './Magnetic';
import { useRouter } from '../router';

const chips = [
  { label: 'Java', style: 'top-[8%] left-[6%]', delay: 0 },
  { label: 'Spring Boot', style: 'top-[18%] right-[4%]', delay: 0.6 },
  { label: 'React', style: 'bottom-[24%] left-[2%]', delay: 1.2 },
  { label: 'AWS', style: 'bottom-[10%] right-[8%]', delay: 1.8 },
  { label: 'Cybersecurity', style: 'top-[46%] right-[0%]', delay: 2.4 },
];

export default function Hero() {
  const { navigate } = useRouter();

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center py-6 sm:py-10 md:min-h-[calc(100vh-80px)] px-6 text-center overflow-hidden"
    >
      <AuroraBackground />

      {/* Floating tech chips */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {chips.map((c) => (
          <motion.span
            key={c.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: c.delay, duration: 0.8 }}
            className={`animate-drift absolute ${c.style} glass rounded-full px-4 py-2 text-xs font-medium text-white/70`}
            style={{ animationDelay: `${c.delay}s` }}
          >
            {c.label}
          </motion.span>
        ))}
      </div>

      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-eyebrow z-10 relative mb-4"
      >
        KARACHI, PAKISTAN &middot; OPEN TO FULL-TIME ROLES
      </motion.span>

      {/* Floating Profile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-br from-primary via-primary2 to-coral shadow-glowLg mb-6 z-10"
      >
        <div className="h-full w-full rounded-full overflow-hidden border-4 border-base">
          <img src="/pro.PNG" alt="Aliza Memon" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] z-10 relative tracking-tight"
      >
        Aliza <span className="gradient-text">Memon</span>
      </motion.h1>

      {/* Roles - Solid White Color */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-white z-10 relative h-8 font-display"
      >
        <TypeAnimation
          sequence={[
            'Full Stack Engineer', 2000,
            'Java & Spring Boot Developer', 2000,
            'Computer Engineer', 2000,
            'Cybersecurity Enthusiast', 2000,
            'React Developer', 2000,
          ]}
          wrapper="span"
          speed={50}
          deletionSpeed={70}
          repeat={Infinity}
        />
      </motion.div>

      {/* Description text - Mobile pe hide, sirf MD screens par dikhega */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.8 }}
        className="mt-4 max-w-xl text-xs sm:text-base !text-white/55 z-10 relative hidden md:block"
      >
        Building reliable backend systems, REST APIs, and scalable web apps with Spring Boot &amp; ReactJS — with a background in secure, resilient systems.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-6 sm:mt-7 flex flex-wrap justify-center gap-4 z-10 relative"
      >
        <Magnetic
          href="#/projects"
          onClick={(e) => { e.preventDefault(); navigate('/projects'); }}
          className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 font-display font-semibold text-xs sm:text-base text-ink shadow-glow"
        >
          View Projects
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Magnetic>
        <Magnetic
          href="#/contact"
          onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
          className="rounded-full border border-line px-6 py-3 font-display font-semibold text-xs sm:text-base !text-white hover:bg-white/5 transition-colors"
        >
          Contact Me
        </Magnetic>
      </motion.div>
    </section>
  );
}