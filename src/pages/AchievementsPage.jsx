import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import Gallery from '../components/Gallery';
import Certificates from '../components/Certificates';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
    { id: 'gallery', label: 'Moments Gallery' },
    { id: 'certificates', label: 'Certifications' },
];

export default function AchievementsPage() {
    const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'certificates'

    return (
        <div className="flex flex-col justify-between min-h-[calc(100vh-80px)]">
            <PageShell>
                {/* Exact Projects-style Animated Gradient Pill */}
                <div className="flex justify-center items-center gap-2 mb-6 sm:mb-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                                activeTab === tab.id ? 'text-ink font-semibold' : 'glass text-white/60 hover:text-white'
                            }`}
                        >
                            {activeTab === tab.id && (
                                <motion.span
                                    layoutId="achievement-tab-pill"
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary2"
                                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                    >
                        {activeTab === 'gallery' ? <Gallery /> : <Certificates />}
                    </motion.div>
                </AnimatePresence>
            </PageShell>

        </div>
    );
}