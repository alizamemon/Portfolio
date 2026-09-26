import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import PageShell from '../components/PageShell';
import { useRouter } from '../router';

export default function NotFoundPage() {
  const { navigate } = useRouter();
  return (
    <PageShell className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-6xl font-bold gradient-text"
      >
        404
      </motion.h1>
      <p className="mt-3 text-white/60">This page wandered off somewhere.</p>
      <a
        href="#/"
        onClick={(e) => { e.preventDefault(); navigate('/'); }}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-display font-semibold text-ink shadow-glow"
      >
        <ArrowLeft size={16} /> Back home
      </a>
    </PageShell>
  );
}
