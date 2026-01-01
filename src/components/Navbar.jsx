import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // This function handles both closing the menu and scrolling
  const handleLinkClick = (e, href) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    setOpen(false); // Close the mobile menu

    // Use a small delay to ensure the menu is fully closed before scrolling
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-base/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="text-lg font-bold tracking-tight">
          <span className="text-primary">Aliza</span> Memon
        </a>
        <nav className="hidden gap-6 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="relative group text-white/80 hover:text-white transition">
              {l.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary rounded-full group-hover:w-full transition-[width] duration-300 -translate-x-1/2"></span>
            </a>
          ))}
          <a
            href="/Resume-2025.pdf"
            download="#"
            className="rounded-xl bg-primary px-4 py-2 font-semibold shadow-glow hover:brightness-110 transition"
          >
            Hire Me
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-white/10">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/5 bg-base/95 px-6 pb-6"
          >
            <ul className="flex flex-col gap-4 pt-4">
              {/* Call the new handler function */}
              {links.map(l => (
                <li key={l.href}>
                  <a onClick={(e) => handleLinkClick(e, l.href)} href={l.href} className="block rounded-lg px-2 py-2 hover:bg-white/5">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/Resume-2025.pdf"
                  download="Aliza_Memon_Resume.pdf"
                  className="block rounded-lg bg-primary px-4 py-2 text-center font-semibold shadow-glow hover:brightness-110"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}