import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFlutter,
  SiSqlite,
  SiPython,
  SiTailwindcss,
  SiUnity,
  SiBlender,
  SiThreedotjs,
  SiFlask,
  SiPandas,
  SiNumpy,
  SiScikitlearn
} from 'react-icons/si';
import {
  FaJava,
  FaShieldAlt,
  FaUserShield,
  FaKey,
  FaChartLine,
  FaBrain,
  FaNetworkWired,
  FaChartBar,
  FaLaptopCode,
  FaDesktop
} from 'react-icons/fa';

const allSkills = {
  'Frontend': [
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React JS', icon: SiReact },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Unity 3D', icon: SiUnity },
    { name: 'Blender', icon: SiBlender },
    { name: 'Three.js', icon: SiThreedotjs }
  ],
  'Backend & Data': [
    { name: 'Java', icon: FaJava },
    { name: 'SQL', icon: SiSqlite },
    { name: 'Python', icon: SiPython },
    { name: 'Flask API', icon: SiFlask },
    { name: 'Streamlit', icon: FaChartLine },
    { name: 'Machine Learning', icon: FaBrain },
    { name: 'SMOTE', icon: FaBrain },
    { name: 'Pandas', icon: SiPandas },
    { name: 'NumPy', icon: SiNumpy },
    { name: 'Data Analysis', icon: FaChartBar },
    { name: 'scikit-learn', icon: SiScikitlearn }
  ],
  'Cybersecurity & Tools': [
    { name: 'STRIDE', icon: FaShieldAlt },
    { name: 'RBAC', icon: FaUserShield },
    { name: 'IAM', icon: FaKey },
    { name: 'IDS', icon: FaNetworkWired },
    { name: 'IPS', icon: FaShieldAlt },
    { name: 'Socket Programming', icon: FaLaptopCode },
    { name: 'Cryptography', icon: FaShieldAlt },
    { name: 'Tkinter', icon: FaDesktop },
    { name: 'UI/UX', icon: FaDesktop }
  ]
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    show: { y: 0, opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 10 } },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden scroll-mt-40 md:scroll-mt-0">
      <ThreeBackground />

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 relative z-10 text-center md:text-left"
      >
        My Skills
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center md:justify-start gap-4 mb-8 relative z-10">
        {Object.keys(allSkills).map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === tab
                ? 'bg-primary text-white'
                : 'bg-gray-700 text-white/70 hover:bg-gray-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-x-3 gap-y-4 justify-items-center max-w-4xl mx-auto relative z-10"
      >
        {allSkills[activeTab].map(skill => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative flex flex-col items-center justify-center w-20 h-20 p-1.5 bg-gray-800/50 rounded-lg shadow-lg border border-white/10 transition-transform hover:scale-110 cursor-pointer overflow-hidden backdrop-filter backdrop-blur-sm"
            >
              <IconComponent className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              <span className="mt-1 text-xs text-white/80 group-hover:text-white transition-colors text-center font-medium">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
