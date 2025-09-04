import React from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground'; // Import the new component
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiFlutter,
    SiTailwindcss,
    SiPython,
    SiSqlite,
    SiUnity,
    SiBlender,
    SiThreedotjs
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';

const skills = [
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React JS', icon: SiReact },
    { name: 'Flutter', icon: SiFlutter },
    { name: 'Java', icon: FaJava },
    { name: 'SQL', icon: SiSqlite },
    { name: 'Python', icon: SiPython },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Unity 3D', icon: SiUnity },
    { name: 'Blender', icon: SiBlender },
    { name: 'Three.js', icon: SiThreedotjs }
];

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.8 },
        show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 10,
            },
        },
    };

    return (
        <section id="skills" className="py-24  relative overflow-hidden">
            {/* Place the background component here */}
            <ThreeBackground />

            <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-12 relative z-10 text-center md:text-left"
            >
                My Skills
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-x-3 gap-y-4 justify-items-center max-w-4xl mx-auto relative z-10"
            >
                {skills.map(skill => {
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