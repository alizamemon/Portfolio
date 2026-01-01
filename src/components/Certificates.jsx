import React from 'react';
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Oracle University",
    image: "/src/assets/Orecal.PNG",
  },
  {
    title: "Fundamentals of Encryption & Quantum-Safe Techniques ",
    image: "/src/assets/IBM Encryprtion.PNG",
  },
  {
    title: "End Point Security ",
    image: "/src/assets/Cisco.PNG",
  },
  {
    title: "Generative AI",
    image: "/src/assets/Gen AI.jpg",
  },
  {
    title: "XPACE Technologies",
    image: "/src/assets/XSpace.PNG",
  },
  {
    title: "$0th IEEP All Pakistan ",
    image: "/src/assets/IEEEP.PNG",
  },
];

export default function Certificates() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white" id="certificates">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Certifications & Achievements
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-4 rounded-2xl shadow-lg border border-gray-700 hover:border-indigo-500 transition"
            >
              <div className="relative w-full h-64 mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold">{cert.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
