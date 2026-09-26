import React from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaPhone } from 'react-icons/fa6';
import Magnetic from './Magnetic';

export default function Contact() {
  const [state, handleSubmit] = useForm("xeolpzyg");

  return (
    <section id="contact" className="pb-4">
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="section-eyebrow"
        >
          Let's connect
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1 }}
          className="mt-2 font-display text-3xl md:text-4xl font-bold"
        >
          Get in <span className="gradient-text">Touch</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-4xl mx-auto items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 glass rounded-2xl p-6"
        >
          <h3 className="font-display text-lg font-semibold">Say hello</h3>
          <p className="mt-2 text-sm text-white/65 leading-relaxed">
            Open to full-time roles, freelance work, or collaborations in full-stack development and secure system design. I usually reply within a day.
          </p>

          <div className="mt-5 space-y-2.5 text-sm">
            <Magnetic as="a" strength={0.15} href="mailto:alizanisar11@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
              <FaEnvelope size={14} /> alizanisar11@gmail.com
            </Magnetic>
            <Magnetic as="a" strength={0.15} href="tel:+923342109285" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors">
              <FaPhone size={14} /> +92 334 2109285
            </Magnetic>
          </div>

          <div className="mt-6 flex gap-3">
            {[
              { Icon: FaEnvelope, href: 'mailto:alizanisar11@gmail.com' },
              { Icon: FaGithub, href: 'https://github.com/alizamemon' },
              { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/aliza-memon' },
              { Icon: FaXTwitter, href: 'https://x.com/your-x-handle' },
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 border border-line text-white/80 hover:text-primary transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3 shimmer-border glass rounded-2xl p-6 sm:p-8"
        >
          {state.succeeded ? (
            <div className="flex h-full min-h-[240px] flex-col items-center justify-center text-center">
              <p className="font-display text-xl font-semibold gradient-text">Thank you!</p>
              <p className="mt-2 text-white/70">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <input
                required
                name="name"
                placeholder="Your name"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-primary transition text-sm"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your email"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-primary transition text-sm"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <textarea
                required
                name="message"
                placeholder="Your message"
                rows="5"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-primary transition text-sm resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 250 }}
                type="submit"
                disabled={state.submitting}
                className="mt-1 rounded-xl bg-gradient-to-r from-primary to-primary2 px-8 py-3.5 font-semibold text-ink shadow-glow transition disabled:opacity-60"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
