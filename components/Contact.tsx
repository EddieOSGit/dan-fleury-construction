
import React from 'react';
import { PhoneIcon, MapPinIcon, ClockIcon } from './icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-blue mb-4">Get In Touch</h2>
          <p className="text-lg text-brand-gray-700 max-w-3xl mx-auto">
            We're here to answer your questions and help you get started on your next project.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-xl">
          <div>
            <h3 className="text-2xl font-serif font-bold text-brand-blue mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <PhoneIcon className="h-8 w-8 text-brand-gold mr-4"/>
                <div>
                  <p className="font-bold">Phone</p>
                  <a href="tel:406-656-5638" className="text-lg text-brand-gray-700 hover:text-brand-gold">(406) 656-5638</a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-8 w-8 text-brand-gold mr-4"/>
                <div>
                  <p className="font-bold">Address</p>
                  <p className="text-lg text-brand-gray-700">2110 Harnish Blvd, Billings, MT 59101</p>
                </div>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-8 w-8 text-brand-gold mr-4"/>
                <div>
                  <p className="font-bold">Business Hours</p>
                  <p className="text-lg text-brand-gray-700">Mon - Fri, 9:00 a.m. – 5:00 p.m.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-brand-blue rounded-r-lg">
                <h4 className="font-bold text-brand-blue">Request Information</h4>
                <p className="text-brand-gray-700">For project estimates and consultations, please call us directly. We look forward to hearing from you!</p>
            </div>
          </div>
          <div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.07693994326!2d-108.5724216844391!3d45.76941197910547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53488f57c5e55555%3A0x6758655074e0d473!2s2110%20Harnish%20Blvd%2C%20Billings%2C%20MT%2059101!5e0!3m2!1sen!2sus!4v1672533000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="Dan Fleury Construction Co. Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
