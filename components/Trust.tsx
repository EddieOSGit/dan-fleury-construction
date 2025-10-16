
import React, { useState, useEffect } from 'react';
import type { Testimonial, TrustBadge } from '../types';
import { CheckBadgeIcon, StarIcon } from './icons';

const trustBadges: TrustBadge[] = [
    { icon: <CheckBadgeIcon className="h-8 w-8 text-green-500" />, title: 'Licensed & Insured', subtitle: 'MT #11480, ND #41668' },
    { icon: <CheckBadgeIcon className="h-8 w-8 text-green-500" />, title: 'Decades of Experience', subtitle: 'Proven Billings Contractor' },
    { icon: <CheckBadgeIcon className="h-8 w-8 text-green-500" />, title: 'HBA of Billings', subtitle: 'Proud Member' },
];

const testimonials: Testimonial[] = [
    {
        quote: 'Dan Fleury Construction was the team we trusted with our forever home. With an eye for quality and craftsmanship, we knew we were in the best hands throughout the entire process.',
        author: 'S.B., Billings, MT'
    },
    {
        quote: 'Their attention to detail is unmatched. Our renovation project was handled with complete transparency and professionalism.',
        author: 'J. & M. R., Billings, MT'
    },
    {
        quote: 'A 5-star experience from start to finish. They turned our vision into a reality, on time and on budget. Highly recommended!',
        author: 'A.P., Billings, MT'
    }
];

const differentiators = [
    'Extensive experience and expertise',
    'Personalized service & strong client relationships',
    'Commitment to quality and accuracy',
    'Trustworthy and transparent communication'
];

const Trust: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds
    return () => clearTimeout(timer);
  }, [currentTestimonial]);

  return (
    <section id="trust" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-blue mb-4">Why Choose Us?</h2>
          <p className="text-lg text-brand-gray-700 max-w-3xl mx-auto">
            Our reputation is built on a foundation of trust, quality, and an unwavering commitment to our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-2xl font-serif font-bold text-brand-blue mb-6">Our Commitment to Excellence</h3>
                <ul className="space-y-4">
                    {differentiators.map((text, index) => (
                        <li key={index} className="flex items-start">
                            <CheckBadgeIcon className="h-6 w-6 text-brand-gold mr-3 flex-shrink-0 mt-1" />
                            <span className="text-lg">{text}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    {trustBadges.map(badge => (
                        <div key={badge.title} className="bg-brand-gray-100 p-4 rounded-lg">
                            {badge.icon && React.cloneElement(badge.icon, { className: 'h-8 w-8 text-brand-gold mx-auto mb-2' })}
                            <p className="font-bold text-brand-blue">{badge.title}</p>
                            <p className="text-sm text-brand-gray-700">{badge.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-brand-blue p-8 md:p-12 rounded-lg shadow-xl text-white">
                <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="h-6 w-6 text-yellow-400" />)}
                </div>
                <div className="relative h-56 overflow-hidden">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 flex flex-col justify-center ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-xl italic text-center">"{testimonial.quote}"</p>
                            <p className="text-right mt-4 font-bold text-brand-gold">- {testimonial.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;