// src/components/About/About.tsx
import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-white transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-brand-dark text-center">
          About Me
        </h2>
        <div className="space-y-4 text-gray-800 leading-relaxed">
          <p>
            I’m an <strong>Integrated MBA</strong> student at NIIT University with
            a <strong>6.79 CGPA</strong>. My journey blends strategic thinking
            from business studies with a passion for <strong>digital marketing</strong>
            and <strong>UI/UX design</strong>.
          </p>
          <p>
            I’ve tackled real‑world projects—like enhancing a health clinic’s digital
            presence—and interned at Vishwa Yuvak Kendra, where I honed my
            <strong>communication</strong> and <strong>team collaboration</strong>
            skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-brand-dark">
              Education
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Integrated MBA, NIIT University (6.79 CGPA)</li>
              <li>12<sup>th</sup> Commerce, CBSE (79.5%)</li>
              <li>10<sup>th</sup>, CBSE (82.4%)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-brand-dark">
              Soft Skills
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Interpersonal &amp; Communication</li>
              <li>Leadership &amp; Teamwork</li>
              <li>Problem‑Solving &amp; Proactivity</li>
              <li>Organization &amp; Persistence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
);
}
