import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enforce dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-sm shadow-md py-2'
          : 'bg-black py-4'
      } text-white`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Portfolio Title */}
        <a href="#home" className="text-xl font-bold">
          <span className="text-blue-400">Portifolio</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* GitHub Profile Link with border */}
            <li>
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-500 border border-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition-all"
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black shadow-lg py-4 px-4 transition-all text-white">
          <ul className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Mobile GitHub Profile with border */}
            <li>
              <a
                href="https://github.com/your-github-username"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold text-blue-500 border border-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
