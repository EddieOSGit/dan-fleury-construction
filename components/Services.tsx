
import React from 'react';
import type { Service } from '../types';
import { HomeIcon, WrenchScrewdriverIcon, FenceIcon, BuildingOfficeIcon } from './icons';

const services: Service[] = [
  {
    icon: <HomeIcon className="h-12 w-12 text-brand-gold mb-4" />,
    title: 'Custom Home Building',
    description: 'Full design/build services for new homes, creating turnkey solutions for families wanting reliable homes.',
    useCases: 'New home construction',
    problemsSolved: 'Turnkey solutions for families'
  },
  {
    icon: <WrenchScrewdriverIcon className="h-12 w-12 text-brand-gold mb-4" />,
    title: 'Renovations & Remodeling',
    description: 'Interior & exterior remodels and upgrades to modernize living spaces and add significant property value.',
    useCases: 'Home expansions, updates',
    problemsSolved: 'Modernizes spaces, adds value'
  },
  {
    icon: <FenceIcon className="h-12 w-12 text-brand-gold mb-4" />,
    title: 'Custom Fencing',
    description: 'Durable and attractive custom residential and farm fencing for privacy, security, and agricultural needs.',
    useCases: 'Privacy/security, agriculture',
    problemsSolved: 'Durable perimeter solutions'
  },
  {
    icon: <BuildingOfficeIcon className="h-12 w-12 text-brand-gold mb-4" />,
    title: 'Infrastructure Projects',
    description: 'Tailored construction for varied needs, ensuring efficient and professional execution for complex projects.',
    useCases: 'Special builds, unique designs',
    problemsSolved: 'Execution for complex projects'
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
    {service.icon}
    <h3 className="text-2xl font-serif font-bold text-brand-blue mb-3">{service.title}</h3>
    <p className="text-brand-gray-700 flex-grow">{service.description}</p>
    <a href="#contact" className="mt-6 text-brand-gold font-bold hover:underline">Learn More &rarr;</a>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-brand-blue mb-4">Our Services</h2>
        <p className="text-lg text-brand-gray-700 max-w-3xl mx-auto mb-12">
          From the ground up, we provide a comprehensive suite of construction services tailored to the needs of homeowners and businesses in Billings.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
