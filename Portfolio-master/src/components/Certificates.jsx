import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  { title: "Fundamentals of Encryption & Quantum-Safe Techniques", image: "/IBM Encryprtion.PNG" },
  { title: "Cyber Threat Management", image: "/cyber.png" },
  { title: "End Point Security", image: "/Cisco.PNG" },
  { title: "AI Foundations Associate", image: "/Oracle.PNG" },
  { title: "Generative AI", image: "/Gen AI.jpg" },
  { title: "Aspire Leadership programe", image: "/aspire.png" },
  { title: "40th IEEEP All Pakistan Students Seminar", image: "/IEEEP.PNG" },
  { title: "39Th Multi-Topic International Conference", image: "/Multi International.PNG" },
  { title: "XPACE Technologies", image: "/XSpace.PNG" },
];

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white" id="certificates">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-4xl font-bold mb-10"
        >
          Certifications & Achievements
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImg(cert.image)}
              className="bg-gray-800 p-4 rounded-2xl shadow-lg border border-gray-700 hover:border-indigo-500 transition cursor-pointer"
            >
              <div className="relative w-full h-48 mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain rounded-xl" 
                />
              </div>
              <h3 className="text-sm font-semibold">{cert.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Lightbox / Modal --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              src={selectedImg} 
              className="max-w-full max-h-full rounded-lg shadow-2xl"
            />
            <button className="absolute top-10 right-10 text-white text-3xl font-bold">&times;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}