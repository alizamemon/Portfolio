import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.webp';
import project6 from '../assets/project6.webp';
import project7 from '../assets/project7.png';
import project8 from '../assets/project8.png';
import project9 from '../assets/project9.png';
import project10 from '../assets/project10.webp';
import project11 from '../assets/project11.webp';
import project12 from '../assets/project12.avif';
import project13 from '../assets/project13.jfif';

const items = [
  {
    title: 'Enterprise Logistics & Fleet Management System',
    desc: 'Modular Spring Boot REST API for vehicle dispatching, driver-to-asset mapping, trip allocation, GPS integration, and maintenance lifecycle management. Deployed on AWS EC2 behind an Application Load Balancer across Multi-AZ subnets with NGINX reverse proxies and automated CI/CD; JWT-based RBAC across Admin, Dispatcher, Driver, and Customer roles with audit logging.',
    img: project10,
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'AWS', 'NGINX', 'CI/CD'],
    link: 'https://logistics-and-fleet-management-nine.vercel.app/',
    category: 'Full Stack',
    featured: true,
  },
  {
    title: 'Warehouse & Inventory Management System',
    desc: 'Transactional backend and web app for product catalogs, user accounts, and real-time stock allocation, built with a normalized 3NF schema and optimistic concurrency handling to prevent deadlocks.',
    img: project11,
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Thymeleaf', 'Bootstrap'],
    link: 'https://github.com/alizamemon/Inventory_Management_System',
    category: 'Full Stack',
    featured: true,
  },
  {
    title: 'Real-Time Stock Market Data Analytics Pipeline',
    desc: 'End-to-end real-time data processing pipeline built with Apache Kafka and Spark Structured Streaming. Ingests high-throughput stock market feeds, performs streaming transformations, stores analytical data in Parquet, and visualizes live anomalies via a Streamlit dashboard.',
    img: project12,
    tech: ['Python', 'Apache Kafka', 'PySpark', 'Spark Streaming', 'Parquet', 'Streamlit'],
    link: 'https://github.com/alizamemon/End-to-End-Real-Time-Data-Pipeline-for-Stock-Market-Analytics-using-Kafka-Spark',
    category: 'Full Stack',
  },
  {
    title: 'Spatiotemporal Urban Mobility Analytics',
    desc: 'Advanced spatiotemporal data modeling and analytical framework for urban mobility intelligence. Uses Medallion Architecture with T-SQL geospatial queries, spatial index optimization, and star schema warehousing to extract insights from transit and vehicle flow datasets.',
    img: project13,
    tech: ['T-SQL', 'Geospatial Analytics', 'Data Warehousing', 'Medallion Architecture', 'SQL Server'],
    link: 'https://github.com/alizamemon/Spatiotemporal-Data-Modeling-and-Analytics-for-Urban-Mobility-Intelligence',
    category: 'Full Stack',
  },
  {
    title: 'Cyber Assurance Framework',
    desc: 'High-impact cyber assurance framework for securing cloud-based systems. Features include IAM, RBAC, AES-256 encryption, live audit trails, and compliance dashboard built with Flask and Streamlit.',
    img: project7,
    tech: ['Python', 'Flask', 'Streamlit', 'RBAC', 'IAM', 'Cybersecurity'],
    link: 'https://github.com/alizamemon/Cyber-Assurance-Framework',
    category: 'Cybersecurity',
  },
  {
    title: 'ML-Powered Intrusion Detection & Prevention System',
    desc: 'An end-to-end ML-based IDS/IPS using Random Forest and SMOTE to detect malicious network traffic and automatically block attacking IPs. Features real-time analytics and threat visualization via Streamlit.',
    img: project8,
    tech: ['Python', 'Machine Learning', 'SMOTE', 'IDS', 'IPS', 'Streamlit'],
    link: 'https://github.com/alizamemon/ML--Intrusion-Detection-Prevention-System',
    category: 'Cybersecurity',
  },
  {
    title: 'Secure ML Chat App',
    desc: 'End-to-end encrypted chat application with ML-based spam detection. Features AES session encryption, RSA key exchange, Tkinter GUI, audit logging, and real-time message security monitoring.',
    img: project9,
    tech: ['Python', 'Socket Programming', 'Cryptography', 'Tkinter', 'ML'],
    link: 'https://github.com/alizamemon/Secure_ML_chat_app',
    category: 'Cybersecurity',
  },
  {
    title: 'Secure Medical System',
    desc: 'A secure medical system with a Tkinter GUI for encrypted medical image storage. The project utilizes Pycryptodome for encryption, decryption, and hashing to ensure data integrity and confidentiality.',
    img: project5,
    tech: ['Python', 'Pycryptodome', 'Tkinter'],
    link: 'https://github.com/alizamemon/Secure_Medical_Image_System',
    category: 'Cybersecurity',
  },
  {
    title: 'Saas Landing Experience',
    desc: 'A modern SaaS landing page built with React.js and Tailwind CSS. It features a mobile-first UI with an interactive 3D hero section and dynamic animations, demonstrating skills in creating visually engaging web experiences.',
    img: project1,
    tech: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://github.com/alizamemon/saas-landing/tree/master',
    category: 'Frontend',
  },
  {
    title: 'Gemini Clone',
    desc: 'A sleek Gemini Clone showcasing a responsive dashboard with real-time AI responses. This project highlights a modern UI, dark mode, and seamless keyboard navigation, built with React, Vite, and Tailwind CSS.',
    img: project2,
    tech: ['React', 'Vite', 'Tailwind', 'Gen-AI'],
    link: 'https://github.com/alizamemon/gemini-clone/tree/master',
    category: 'Frontend',
  },
  {
    title: 'Mindscape-VR',
    desc: 'A cross-platform VR application designed to provide interactive learning sessions for students. A detailed jungle theme and a captivating solar space theme. The app also includes engaging quizzes to enhance learning and retention.',
    img: project3,
    tech: ['Flutter', 'Dart', 'Unity3D', 'Blender', 'Firebase'],
    link: 'https://github.com/alizamemon/Mindscape-VR-App',
    category: 'Frontend',
  },
  {
    title: 'Arcade Game',
    desc: 'This project includes real-time movement, collision detection, and score tracking, all within a browser-based environment. It’s a simple yet effective demonstration of creating an interactive, fully functional game from scratch.',
    img: project4,
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/alizamemon/Arcade-game',
    category: 'Frontend',
  },
  {
    title: 'LearnSphere',
    desc: 'It is a responsive educational website built with HTML, CSS, and Bootstrap. It focuses on a clean, professional UI and a mobile-first design, highlighting a strong foundation in core web development principles.',
    img: project6,
    tech: ['HTML', 'CSS', 'Bootstrap'],
    link: 'https://portfolio-5cb81.web.app/',
    category: 'Frontend',
  },
];

const filters = ['All', 'Full Stack', 'Cybersecurity', 'Frontend'];

export default function Projects() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(
      () => (active === 'All' ? items : items.filter(p => p.category === active)),
      [active]
  );

  return (
      <section id="projects" className="pb-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                className="section-eyebrow block"
            >
              Selected work
            </motion.span>
            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-2 font-display text-3xl md:text-4xl font-bold"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
                <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        active === f ? 'text-ink' : 'glass text-white/60 hover:text-white'
                    }`}
                >
                  {active === f && (
                      <motion.span
                          layoutId="project-filter-pill"
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary2"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                  )}
                  <span className="relative z-10">
                {f}
                    <span className="ml-1.5 text-xs opacity-60">
                  {f === 'All' ? items.length : items.filter(p => p.category === f).length}
                </span>
              </span>
                </button>
            ))}
          </div>
        </div>

        <motion.div
            layout
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
                <ProjectCard key={p.title} index={i} {...p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
            <p className="mt-10 text-center text-white/50">No projects in this category yet.</p>
        )}
      </section>
  );
}