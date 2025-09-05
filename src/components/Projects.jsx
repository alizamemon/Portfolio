import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.webp';
import project6 from '../assets/project6.webp';

const items = [
  {
    title: 'Saas Landing Experience',
    desc: 'A modern SaaS landing page built with React.js and Tailwind CSS. It features a mobile-first UI with an interactive 3D hero section and dynamic animations, demonstrating skills in creating visually engaging web experiences.',
    img: project1,
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://github.com/alizamemon/saas-landing/tree/master'
  },
  {
    title: 'Gemini Clone',
    desc: 'A sleek Gemini Clone showcasing a responsive dashboard with real-time AI responses. This project highlights a modern UI, dark mode, and seamless keyboard navigation, built with React, Vite, and Tailwind CSS.',
    img: project2,
    tech: ['React', 'Vite', 'Tailwind', 'Gen-AI'],
    link: 'https://github.com/alizamemon/gemini-clone/tree/master'
  },
  {
    title: 'Mindscape-VR',
    desc: 'A cross-platform VR application designed to provide interactive learning sessions for students A detailed jungle theme and a captivating solar space theme. The app also includes engaging quizzes to enhance learning and retention.',
    img: project3,
    tech: ['flutter', 'Dart', 'Unity3D', 'Blender', 'Firebase'],
    link: 'https://github.com/alizamemon/Mindscape-VR-App'
  },
  {
    title: 'Arcade Game',
    desc: 'This project includes real-time movement, collision detection, and score tracking, all within a browser-based environment. Its a simple yet effective demonstration of creating an interactive, fully functional game from scratch.',
    img: project4,
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/alizamemon/Arcade-game'
  },
  {
    title: 'Secure Medical System',
    desc: 'A secure medical system with a Tkinter GUI for encrypted medical image storage. The project utilizes Pycryptodome for encryption, decryption, and hashing to ensure data integrity and confidentiality.',
    img: project5,
    tech: ['Python', 'Pycryptodome', 'Tkinter'],
    link: 'https://github.com/alizamemon/Secure_Medical_Image_System'
  },
  {
    title: 'LearnSphere',
    desc: 'It is a responsive educational website built with HTML, CSS, and Bootstrap. It focuses on a clean, professional UI and a mobile-first design, highlighting a strong foundation in core web development principles.',
    img: project6,
    tech: ['HTML', 'CSS', 'Bootstrap'],
    link: 'https://portfolio-5cb81.web.app/'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 scroll-mt-40 md:scroll-mt-0">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold"
      >
        Featured Projects
      </motion.h2>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((p, i) => (
          <ProjectCard key={p.title} index={i} {...p} />
        ))}
      </div>
    </section>
  );
}