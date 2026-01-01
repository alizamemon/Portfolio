import React from 'react';
import { motion } from 'framer-motion';
import profile from '/public/profile2.jpeg';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

export default function About() {
  return (
    <section id="about" className="py-24 scroll-mt-40 md:scroll-mt-0"> {/* <-- CHANGE HERE */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center md:text-left"
      >
        About Me
      </motion.h2>

      <div className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-[240px,1fr]">
        {/* Profile image - hidden on small screens, shown on medium and larger screens */}
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src={profile}
          alt="Profile"
          className="mx-auto w-48 rounded-2xl border border-white/10 p-1 shadow hidden md:block"
        />

        <div>
          <p className="text-white/75 text-justify hidden md:block">
            I’m a recent Computer Engineering graduate with a strong passion for cybersecurity and building secure, resilient systems. I specialize in designing and implementing secure applications, end-to-end encrypted communications, and machine learning–powered threat detection systems. My recent projects include developing intrusion detection and prevention systems, secure chat applications, and cloud-based security frameworks. I’m currently seeking a full-time role or freelance opportunities where I can apply my skills in cybersecurity, secure system design, and AI-driven defense technologies.
          </p>
          {/* Cybersecurity intro */}


          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            {/* Gmail Link with animation */}
            <motion.a
              href="mailto:Alizanisar11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-white/80 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FaEnvelope />
            </motion.a>

            {/* Github Link with animation */}
            <motion.a
              href="https://github.com/alizamemon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-white/80 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FaGithub />
            </motion.a>

            {/* LinkedIn Link with animation */}
            <motion.a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-white/80 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FaLinkedin />
            </motion.a>

            {/* X (formerly Twitter) Link with animation */}
            <motion.a
              href="https://x.com/your-x-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-white/80 hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FaXTwitter />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}