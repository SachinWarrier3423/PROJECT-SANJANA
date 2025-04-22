// src/components/Skills/Skills.tsx
import React from 'react';

const skills = [
  'Canva',
  'Figma',
  'Creative Thinking',
  'React',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'React Hook Form',
  'Zod',
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-4 bg-brand-light transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-brand-dark">
          Skills
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="px-4 py-2 bg-white rounded-2xl shadow-md font-semibold"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
