import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, User, Trophy, FolderGit2, Sparkles, Briefcase, Mail } from 'lucide-react';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import { useRouter } from '../router';

const explore = [
  { to: '/about', label: 'About', desc: 'Who I am & what drives me', Icon: User },
  { to: '/achievements', label: 'Achievements', desc: 'Gallery & certifications', Icon: Trophy },
  { to: '/projects', label: 'Projects', desc: 'Things I have built', Icon: FolderGit2 },
  { to: '/skills', label: 'Skills', desc: 'My tech stack', Icon: Sparkles },
  { to: '/experience', label: 'Experience', desc: 'Where I have worked', Icon: Briefcase },
  { to: '/contact', label: 'Contact', desc: "Let's talk", Icon: Mail },
];

export default function Home() {
  const { navigate } = useRouter();

  return (
      <>
        <Hero />

        {/* Mobile view par hide (hidden), Desktop par visible (md:block) */}
        <div className="hidden md:block">
          <TechMarquee />

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="section-eyebrow">Quick links</span>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Explore my <span className="gradient-text">work</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {explore.map((item, i) => (
                  <motion.a
                      key={item.to}
                      href={`#${item.to}`}
                      onClick={(e) => { e.preventDefault(); navigate(item.to); }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="group glass shimmer-border relative flex items-center gap-4 rounded-2xl p-5 transition"
                  >
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary2/20 text-primary">
                      <item.Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-white">{item.label}</h3>
                      <p className="text-xs text-white/55">{item.desc}</p>
                    </div>
                    <ArrowUpRight size={18} className="text-white/30 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </motion.a>
              ))}
            </div>
          </section>
        </div>
      </>
  );
}