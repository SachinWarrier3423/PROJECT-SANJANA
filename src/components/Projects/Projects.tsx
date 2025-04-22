// src/components/Projects/Projects.tsx

import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  learned: string[];
}

const projects: Project[] = [
  {
    title: 'Health Clinic Website',
    description:
      'Revamped a local clinic’s online presence with a responsive design and interactive booking form.',
    image: '/images/projects/project1.png',
    learned: [
      'Responsive design with Tailwind CSS',
      'Next.js dynamic routes',
      'Form handling with React Hook Form & Zod',
    ],
  },
  {
    title: 'Digital Portfolio',
    description:
      'Built this very portfolio site to showcase my skills and projects in a modern, sleek layout.',
    image: '/images/projects/project2.png',
    learned: [
      'Tailwind theming & animations',
      'Scroll‑triggered color changes',
      'Component-driven architecture in Next.js',
    ],
  },
  // Add more projects here as needed
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 bg-white animate-in fade-in duration-700 delay-300"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center text-brand-dark">
          Work & Projects
        </h2>
        <div className="space-y-16">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2 h-64 relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold text-brand-dark">
                  {proj.title}
                </h3>
                <p className="text-gray-800">{proj.description}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {proj.learned.map((item, i) => (
                    <li key={i}>What I Learned: {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
