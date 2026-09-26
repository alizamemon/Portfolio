import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, Award } from 'lucide-react';

const certificates = [
  { title: "Fundamentals of Encryption & Quantum-Safe Techniques", image: "/IBM Encryprtion.PNG" },
  { title: "Cyber Threat Management", image: "/cyber.png" },
  { title: "End Point Security", image: "/Cisco.PNG" },
  { title: "AI Foundations Associate", issuer: "Oracle University", image: "/Oracle.PNG" },
  { title: "Generative AI", image: "/Gen AI.jpg" },
  { title: "Aspire Leadership Programme", issuer: "Harvard University", image: "/aspire.png" },
  { title: "40th IEEEP All Pakistan Students Seminar", image: "/IEEEP.PNG" },
  { title: "39th Multi-Topic International Conference", image: "/Multi International.PNG" },
  { title: "Python for Data Science", image: "/Data.PNG" },
  { title: "SQL for Data Science | University of California", image: "/SQL.PNG" },
  { title: "Introduction to DevOps", image: "/DevOps.PNG" },
];

export default function Certificates() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="pt-1 pb-4" id="certificates">
      <div className="text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="section-eyebrow"
        >
          Proof of work
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1 }}
          className="mt-2 font-display text-3xl md:text-4xl font-bold"
        >
          Certifications & <span className="gradient-text">Achievements</span>
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            onClick={() => cert.image && setSelectedImg(cert)}
            className={`shimmer-border glass rounded-2xl p-4 transition ${cert.image ? 'cursor-pointer' : ''}`}
          >
            {cert.image ? (
              <div className="relative w-full h-44 mb-4 rounded-xl overflow-hidden bg-white/5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ) : (
              <div className="relative w-full h-44 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary2/10 flex flex-col items-center justify-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-primary2">
                  <Award size={22} className="text-ink" />
                </div>
                <span className="text-xs text-white/50 tracking-wide">{cert.issuer}</span>
              </div>
            )}
            <h3 className="text-sm font-semibold text-white/90">{cert.title}</h3>
            {cert.image && cert.issuer && (
              <p className="mt-1 text-xs text-white/50">{cert.issuer}</p>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              src={selectedImg.image}
              alt={selectedImg.title}
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-line"
            />
            <button className="absolute top-8 right-8 text-white/70 hover:text-white transition">
              <X size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
