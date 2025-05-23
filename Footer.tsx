import React from 'react';
import { SOCIAL_LINKS } from '../data';
import * as Icons from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <span className="text-blue-400">Your</span>Name
            </div>
            <p className="text-gray-400 max-w-xs">
              A fresh Computer Science graduate passionate about web development and creating beautiful user experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              {SOCIAL_LINKS.map((social) => {
                const LucideIcon = Icons[social.icon as keyof typeof Icons];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={`Visit my ${social.name}`}
                  >
                    {LucideIcon && <LucideIcon size={18} />}
                  </a>
                );
              })}
            </div>

            <div className="text-gray-400 text-sm">
              &copy; {currentYear} YourName. All rights reserved.
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            Designed and built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="mt-1">
            <a 
              href="#home" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;