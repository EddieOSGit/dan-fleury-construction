
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#trust', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className={`font-serif font-bold text-2xl transition-colors ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
          Dan Fleury Construction
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`font-medium transition-colors ${isScrolled ? 'text-brand-gray-700 hover:text-brand-gold' : 'text-white hover:text-gray-200'}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-brand-gold text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-600 transition-all transform hover:scale-105">
          Request a Quote
        </a>
        {/* Mobile menu button can be added here */}
      </div>
    </header>
  );
};

export default Header;
