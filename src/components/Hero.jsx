import React from 'react';
import { motion } from 'framer-motion';
import Scene from './canvas/Scene';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden"
    >
      {/* Cinematic 3D Background */}
      <Scene />

      {/* Floating Profile */}
      <div className="animate-float w-48 sm:w-52 sm:h-52 md:w-72 md:h-72 h-48 rounded-full border-4 border-cyan-400 overflow-hidden shadow-xl shadow-cyan-500/40 mb-8 z-10 relative">
        <img src="/profile2.jpeg" alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight z-10 relative"
      >
        Hi, I’m <span className="text-primary">Aliza Memon</span>
      </motion.h1>

      {/* Roles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-xl sm:text-2xl font-semibold text-white z-10 relative"
      >
        <TypeAnimation
          sequence={[
            'Computer Engineer', 2000,
            'Frontend Developer', 2000,
            'Unity 3D Developer', 2000,
            'App Developer', 2000,
          ]}
          wrapper="span"
          speed={50}
          deletionSpeed={70}
          repeat={Infinity}
        />
      </motion.div>

      {/* Buttons */}
      {/* Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="mt-8 flex justify-center gap-3 z-10 relative"
      >
        <a
          href="#projects"
          className="rounded-xl bg-primary px-4 py-2 sm:px-5 sm:py-3 font-semibold shadow-glow hover:brightness-110 transition text-sm sm:text-base !text-white"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-xl border border-white/10 px-4 py-2 sm:px-5 sm:py-3 font-semibold hover:bg-white/5 transition text-sm sm:text-base !text-white"
        >
          Contact Me
        </a>
      </motion.div>

    </section>
  );
}