import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiFlutter, SiSqlite, SiPython,
  SiTailwindcss, SiUnity, SiBlender, SiThreedotjs, SiFlask, SiPandas,
  SiNumpy, SiScikitlearn, SiTypescript, SiSpringboot, SiSpringsecurity,
  SiHibernate, SiApachemaven, SiAmazonwebservices, SiDocker, SiNginx,
  SiGithubactions, SiJsonwebtokens, SiMysql, SiMongodb, SiVite,
} from 'react-icons/si';
import {
  FaJava, FaShieldAlt, FaUserShield, FaKey, FaChartLine, FaBrain,
  FaNetworkWired, FaChartBar, FaLaptopCode, FaDesktop, FaLinux, FaServer,
} from 'react-icons/fa';

const allSkills = {
  'Backend & Frameworks': [
    { name: 'Java', icon: FaJava },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'Spring Security', icon: SiSpringsecurity },
    { name: 'Hibernate ORM', icon: SiHibernate },
    { name: 'REST APIs', icon: FaServer },
    { name: 'Microservices', icon: FaServer },
    { name: 'Maven', icon: SiApachemaven },
  ],
  'Frontend': [
    { name: 'React JS', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Vite', icon: SiVite },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Unity 3D', icon: SiUnity },
    { name: 'Blender', icon: SiBlender },
    { name: 'Three.js', icon: SiThreedotjs },
  ],
  'Cloud, DevOps & Security': [
    { name: 'AWS', icon: SiAmazonwebservices },
    { name: 'Docker', icon: SiDocker },
    { name: 'NGINX', icon: SiNginx },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'JWT', icon: SiJsonwebtokens },
    { name: 'RBAC', icon: FaUserShield },
    { name: 'Linux / Bash', icon: FaLinux },
  ],
  'Databases & Data': [
    { name: 'MySQL', icon: SiMysql },
    { name: 'AWS RDS', icon: SiAmazonwebservices },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'SQL', icon: SiSqlite },
    { name: 'Python', icon: SiPython },
    { name: 'Pandas', icon: SiPandas },
    { name: 'NumPy', icon: SiNumpy },
    { name: 'scikit-learn', icon: SiScikitlearn },
    { name: 'Data Analysis', icon: FaChartBar },
  ],
  'Cybersecurity': [
    { name: 'STRIDE', icon: FaShieldAlt },
    { name: 'RBAC', icon: FaUserShield },
    { name: 'IAM', icon: FaKey },
    { name: 'IDS', icon: FaNetworkWired },
    { name: 'IPS', icon: FaShieldAlt },
    { name: 'Socket Programming', icon: FaLaptopCode },
    { name: 'Cryptography', icon: FaShieldAlt },
    { name: 'Tkinter', icon: FaDesktop },
    { name: 'Machine Learning', icon: FaBrain },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Backend & Frameworks');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0, scale: 0.85 },
    show: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 160, damping: 12 } },
  };

  return (
    <section id="skills" className="relative overflow-hidden pb-4">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className="section-eyebrow relative z-10 block text-center md:text-left"
      >
        What I work with
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-2 font-display text-3xl md:text-4xl font-bold mb-8 relative z-10 text-center md:text-left"
      >
        My <span className="gradient-text">Skills</span>
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center md:justify-start gap-2 mb-10 relative z-10 flex-wrap">
        {Object.keys(allSkills).map(tab => (
          <button
            key={tab}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab ? 'text-ink' : 'glass text-white/60 hover:text-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {activeTab === tab && (
              <motion.span
                layoutId="skills-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary2"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0 }}
          className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-x-3 gap-y-4 max-w-4xl mx-auto relative z-10"
        >
          {allSkills[activeTab].map(skill => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -4 }}
                className="glass group relative flex flex-col items-center justify-center w-20 h-20 p-1.5 rounded-xl shadow-card transition-shadow hover:shadow-glow cursor-pointer overflow-hidden"
              >
                <IconComponent className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                <span className="mt-1 text-[11px] text-white/80 group-hover:text-white transition-colors text-center font-medium">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
