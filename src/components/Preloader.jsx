import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] grid place-items-center bg-base"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              initial={{ letterSpacing: '0.05em', opacity: 0.6 }}
              animate={{ letterSpacing: '0.3em', opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="font-display text-sm uppercase text-primary"
            >
              Aliza Memon
            </motion.span>
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
