
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-4">
          Ready to Build Your Future?
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Connect today for a personalized quote or consultation with Billings' trusted construction experts. Let's bring your vision to life.
        </p>
        <div className="space-x-4">
          <a href="#contact" className="bg-brand-gold text-white font-bold py-3 px-8 rounded-md hover:bg-yellow-600 transition-all transform hover:scale-105 inline-block">
            Request a Quote
          </a>
          <a href="tel:406-656-5638" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-brand-blue transition-all transform hover:scale-105 inline-block">
            Call Now: (406) 656-5638
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
