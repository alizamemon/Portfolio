import React from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xeolpzyg");

  if (state.succeeded) {
    return <p className="text-white/70 md:col-span-2">Thanks! I will get back to you soon.</p>;
  }

  return (
    <section id="contact" className="py-24 flex flex-col items-center scroll-mt-40 md:scroll-mt-0">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-10"
      >
        Contact
      </motion.h2>

      {/* Outer Form with soft glow border */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 w-full max-w-3xl p-8 bg-white/5 rounded-2xl backdrop-blur-lg shadow-[0_0_12px_#0ea5e9]"
      >
        {/* Name */}
        <input
          required
          name="name"
          placeholder="Your name"
          className="rounded-xl border border-white/20 bg-transparent px-4 py-3 outline-none focus:border-white transition"
        />

        {/* Email */}
        <input
          required
          type="email"
          name="email"
          placeholder="Your email"
          className="rounded-xl border border-white/20 bg-transparent px-4 py-3 outline-none focus:border-white transition"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* Message */}
        <textarea
          required
          name="message"
          placeholder="Your message"
          rows="5"
          className="md:col-span-2 rounded-xl border border-white/20 bg-transparent px-4 py-3 outline-none focus:border-white transition"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        {/* Send Button with hover zoom only */}
        <div className="md:col-span-2 flex justify-center mt-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 250 }}
            type="submit"
            disabled={state.submitting}
            className="rounded-xl bg-primary px-8 py-4 font-semibold transition"
          >
            {state.submitting ? 'Sending...' : 'Send'}
          </motion.button>
        </div>
      </motion.form>
    </section>
  )
}
