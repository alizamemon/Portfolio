import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="mt-2 border-t border-white/10 py-3 text-center bg-transparent">
            {/* First Line: Designed & built text */}
            <p className="font-display text-xs text-white/50">
                Designed & built by <span className="gradient-text font-semibold">Aliza Memon</span>
            </p>

            {/* Second Line: Social Icons */}
            <div className="flex items-center justify-center gap-4 mt-2">
                {/* Gmail Link */}
                <motion.a
                    href="mailto:alizanisar11@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-base transition-colors duration-300"
                    whileHover={{ scale: 1.15, color: '#84cc16' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    <FaEnvelope />
                </motion.a>

                {/* Github Link */}
                <motion.a
                    href="https://github.com/alizamemon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-base transition-colors duration-300"
                    whileHover={{ scale: 1.15, color: '#84cc16' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    <FaGithub />
                </motion.a>

                {/* LinkedIn Link */}
                <motion.a
                    href="https://www.linkedin.com/in/aliza-memon-engr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white text-base transition-colors duration-300"
                    whileHover={{ scale: 1.15, color: '#84cc16' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    <FaLinkedin />
                </motion.a>
            </div>
        </footer>
    )
}