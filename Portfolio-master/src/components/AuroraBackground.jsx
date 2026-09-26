import React from 'react';
import { motion } from 'framer-motion';

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />

      {/* Slow-rotating blob cluster for organic drift */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/25 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-10 right-1/4 h-80 w-80 rounded-full bg-primary2/25 blur-[110px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-coral/20 blur-[100px]"
        />
      </motion.div>

      {/* Extra accent glow, counter-drifting for depth */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/15 blur-[90px]"
      />

      {/* Soft vignette so foreground text always reads clean */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-base" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_30%,rgba(10,10,12,0.6)_100%)]" />
    </div>
  );
}