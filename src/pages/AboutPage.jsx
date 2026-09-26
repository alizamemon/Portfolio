import React from 'react';
import PageShell from '../components/PageShell';
import About from '../components/About';

export default function AboutPage() {
    return (
        <div className="flex flex-col justify-between min-h-[calc(80vh-80px)]">
            <PageShell className="pb-0">
                <About />
            </PageShell>
        </div>
    );
}