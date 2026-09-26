import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from 'lucide-react';

const galleryImages = [
    { id: 1, src: "/multi.jpg", title: "Team Win Award", desc: "39th Multi Topic International Symposium" },
    { id: 2, src: "/silver.jpeg", title: "Receiving Silver Medal", desc: "39th Multi Topic International Symposium" },
    { id: 3, src: "/presenting.jpeg", title: "Presenting my research", desc: "39th Multi Topic International Symposium" },
    { id: 4, src: "/40th.jpeg", title: "Receiving 2nd Position", desc: "40th IEEEP All Pakistan Student's Seminar 2025" },
    { id: 5, src: "/qnA.jpeg", title: "Q&A session", desc: "40th IEEEP All Pakistan Student's Seminar 2025" },
    { id: 6, src: "/presentVR.jpeg", title: "Presenting Project", desc: "Mindscape-VR" },
    { id: 7, src: "/techteam.jpeg", title: "Team Win at Technova — 3rd Position", desc: "Technova 2025" },
    { id: 8, src: "/presenttech.jpeg", title: "Presenting at Tech Event", desc: "Technova 2025" },
    { id: 9, src: "/silvermedal.jpeg", title: "Silver Medal", desc: "" },
    { id: 10, src: "/techaward.jpeg", title: "3rd Position with Cash Prize", desc: "" },
    { id: 11, src: "/seo.jpeg", title: "Attended International Conference", desc: "" },
];

export default function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section className="pb-4" id="gallery">
            <div className="text-center mb-14">
                <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="section-eyebrow"
                >
                    Highlights
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.1 }}
                    className="mt-2 font-display text-3xl md:text-4xl font-bold"
                >
                    Moments of <span className="gradient-text">Excellence</span>
                </motion.h2>
                <p className="mt-3 text-white/60 max-w-xl mx-auto">A glimpse into my journey, awards, and professional milestones.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                {galleryImages.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                        whileHover={{ y: -6 }}
                        onClick={() => setSelectedImg(item)}
                        className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-card shadow-card transform-gpu"
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-110"
                        />

                        {/* Dark gradient & text - Mobile pe hidden, sm+ pe visible */}
                        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="hidden sm:flex absolute inset-x-0 bottom-0 flex-col gap-0.5 p-3 sm:p-4">
                            <h4 className="font-display text-xs font-semibold text-white sm:text-sm">{item.title}</h4>
                            {item.desc && <p className="text-[10px] text-primary sm:text-xs">{item.desc}</p>}
                        </div>

                        <div className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                            <Expand size={14} />
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {selectedImg && (
                    <motion.div
                        key="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedImg(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 transform-gpu"
                    >
                        <motion.div
                            key="modal-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full"
                        >
                            <button
                                onClick={() => setSelectedImg(null)}
                                className="absolute -top-10 right-0 text-white/70 hover:text-white transition"
                            >
                                <X size={26} />
                            </button>
                            <img
                                src={selectedImg.src}
                                alt={selectedImg.title}
                                className="w-full h-auto max-h-[80vh] rounded-xl shadow-2xl border border-white/10 object-contain"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-semibold text-white">{selectedImg.title}</h3>
                                {selectedImg.desc && <p className="text-primary text-sm mt-1">{selectedImg.desc}</p>}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}