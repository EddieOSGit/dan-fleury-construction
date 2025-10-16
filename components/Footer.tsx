
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Dan Fleury Construction Co.</h3>
            <p className="text-gray-400">Building quality homes and lasting relationships in Billings, Montana since day one.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>2110 Harnish Blvd, Billings, MT 59101</li>
              <li>Phone: (406) 656-5638</li>
              {/* Social media links can be added here */}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {currentYear} Dan Fleury Construction Co. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;