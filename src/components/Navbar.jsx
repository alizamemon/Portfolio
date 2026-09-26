import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from '../router';

const links = [
  { to: '/about', label: 'About' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { path, navigate } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const go = (e, to) => {
    e.preventDefault();
    setOpen(false);
    navigate(to);
  };

  return (
      <header
          className={`sticky top-0 z-50 w-full transition-all duration-300 ${
              scrolled || path !== '/'
                  ? 'border-b border-white/10 bg-base/85 backdrop-blur-xl shadow-lg shadow-black/20 py-3.5 md:py-4'
                  : 'border-b border-transparent bg-base/40 backdrop-blur-md py-4 md:py-5'
          }`}
      >
        <div className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-14">
          {/* Brand Name */}
          <a
              href="#/"
              onClick={(e) => go(e, '/')}
              className="font-display text-xl sm:text-2xl font-extrabold tracking-tight hover:opacity-90 transition-opacity"
          >
            <span className="gradient-text">Aliza</span>{' '}
            <span className="text-white">Memon</span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-1 md:flex lg:gap-2">
            {links.map((l) => (
                <a
                    key={l.to}
                    onClick={(e) => go(e, l.to)}
                    href={`#${l.to}`}
                    className={`relative rounded-full px-4 py-2 text-sm md:text-base font-medium transition-colors ${
                        path === l.to ? '!text-white font-semibold' : '!text-white/70 hover:!text-white'
                    }`}
                >
                  {path === l.to && (
                      <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-lime-500/20 border border-lime-400/40 shadow-[0_0_15px_rgba(132,204,22,0.35)]"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
              onClick={() => setOpen(!open)}
              className="rounded-lg border border-white/10 p-2.5 text-white hover:bg-white/5 md:hidden"
              aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {open && (
              <motion.nav
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-t border-white/10 bg-base px-6 pb-6 md:hidden"
              >
                <ul className="flex flex-col gap-2 pt-4">
                  {links.map((l) => (
                      <li key={l.to}>
                        <a
                            onClick={(e) => go(e, l.to)}
                            href={`#${l.to}`}
                            className={`block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                                path === l.to
                                    ? 'bg-lime-500/20 text-lime-400 font-semibold border border-lime-500/30 shadow-[0_0_12px_rgba(132,204,22,0.25)]'
                                    : 'text-white/80 hover:bg-lime-500/10 hover:text-lime-300'
                            }`}
                        >
                          {l.label}
                        </a>
                      </li>
                  ))}
                </ul>
              </motion.nav>
          )}
        </AnimatePresence>
      </header>
  );
}