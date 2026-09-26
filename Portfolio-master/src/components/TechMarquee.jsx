import React from 'react';
import {
  SiSpringboot, SiReact, SiMysql, SiAmazonwebservices, SiDocker,
  SiTailwindcss, SiTypescript, SiMongodb, SiNginx, SiHibernate, SiPython,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const stack = [
  { name: 'Java', Icon: FaJava },
  { name: 'Spring Boot', Icon: SiSpringboot },
  { name: 'React', Icon: SiReact },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'AWS', Icon: SiAmazonwebservices },
  { name: 'Docker', Icon: SiDocker },
  { name: 'NGINX', Icon: SiNginx },
  { name: 'Hibernate', Icon: SiHibernate },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Python', Icon: SiPython },
];

export default function TechMarquee() {
  const row = [...stack, ...stack];

  return (
    <div className="hidden md:block relative py-6 border-y border-line overflow-hidden bg-base">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-base to-transparent z-10" />
      <div className="flex w-max animate-marquee gap-12">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-white/50 whitespace-nowrap">
            <item.Icon className="h-5 w-5 shrink-0" />
            <span className="font-display text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}