import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { id: 1, src: "/multi.jpg", title: "Team Win Award", desc: "39Th Multi Topic International Symposium" },
  { id: 2, src: "/silver.jpeg", title: "Receiving Silver Medal", desc: "39Th Multi Topic International Symposium" },
  { id: 3, src: "/presenting.jpeg", title: "Presenting my research", desc: "39Th Multi Topic International Symposium" },
  { id: 4, src: "/award4.jpg", title: "CIPE'25 Presentation", desc: "Presenting my Research on Data Security" },
  { id: 5, src: "/award5.jpg", title: "Community Leadership", desc: "Awarded for Excellence in Technical Volunteering" },
  { id: 6, src: "/award6.jpg", title: "Innovation Award", desc: "Best Project Award at Multi-Topic Conference" },
  { id: 7, src: "/award2.jpg", title: "Team Win at Technova", desc: "Secured 1st Position in Cyber Track" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-20 bg-gray-950 text-white" id="gallery">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-400">Moments of Excellence</h2>
          <p className="text-gray-400 mt-2">A glimpse into my journey, awards, and professional milestones.</p>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImg(item)}
              className="relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group border border-gray-800"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="font-bold text-white text-sm">{item.title}</h4>
                <p className="text-xs text-indigo-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full"
            >
              <img
                src={selectedImg.src}
                className="w-full h-auto max-h-[85vh] rounded-lg shadow-2xl border border-gray-700"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white">{selectedImg.title}</h3>
                <p className="text-indigo-400">{selectedImg.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}