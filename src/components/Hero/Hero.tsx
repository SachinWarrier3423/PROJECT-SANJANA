// src/components/Hero/Hero.tsx

import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 py-16">
        
        {/* Profile Photo */}
        <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-xl">
          <Image
            src="/images/profile.jpg"
            alt="Sanjana Nair"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6">
          {/* Tagline */}
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">
            Hi, I’m Sanjana Nair
          </h1>

          {/* Short Bio */}
          <p className="text-lg leading-relaxed text-gray-800">
            Integrated MBA student at NIIT University with a passion for digital marketing,
            UI/UX design, and building impactful online experiences.
          </p>

          {/* Quick Experience Highlights */}
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>Internship:</strong> Vishwa Yuvak Kendra (June–July 2020)</li>
            <li><strong>V Sem Project:</strong> My Health Wellness Clinic’s Digital Presence</li>
            <li><strong>VI Sem Capstone:</strong> Showcasing Me: A Digital Portfolio</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
