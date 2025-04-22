import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white text-center py-6">
      <p className="text-sm">
        © {new Date().getFullYear()} Sanjana S Nair. All rights reserved.
      </p>
    </footer>
  );
}
