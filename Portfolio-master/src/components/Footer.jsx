import React from 'react'
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 py-8 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Aliza Memon —
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-2 md:mt-0">
          {/* Gmail Link */}
          <motion.a
            href="mailto:Alizanisar11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-xl text-white transition-colors duration-300"
            whileHover={{ scale: 1.15, color: '#0ea5e9' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <FaEnvelope />
          </motion.a>

          {/* Github Link */}
          <motion.a
            href="https://github.com/alizamemon"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-xl text-white transition-colors duration-300"
            whileHover={{ scale: 1.15, color: '#0ea5e9' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <FaGithub />
          </motion.a>

          {/* LinkedIn Link */}
          <motion.a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-xl text-white transition-colors duration-300"
            whileHover={{ scale: 1.15, color: '#0ea5e9' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <FaLinkedin />
          </motion.a>

          {/* X (formerly Twitter) Link */}
          <motion.a
            href="https://x.com/your-x-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-xl text-white transition-colors duration-300"
            whileHover={{ scale: 1.15, color: '#0ea5e9' }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <FaXTwitter />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
