import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 w-full">
          <div className="text-center w-full">
            <p className="text-lg font-semibold text-white">Nate Colon</p>
            <p className="text-sm mt-2">
              © {currentYear} Nate Colon. All rights reserved.
            </p>
          </div>
          <div className="text-xs text-gray-400 text-center w-full">
            <p>Built with Next.js, React, and TailwindCSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
