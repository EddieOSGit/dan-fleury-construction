import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white -mt-[88px]">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1682144351190-9034a7c3b3a8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9uJTIwbW9udGFuYXxlbnwwfHwwfHx8MA%3D%3D')" }}
      ></div>
      <div className="relative z-20 text-center p-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 leading-tight animate-fade-in-down">
          Dan Fleury Construction Co.
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up">
          Building Your Dream, One Detail at a Time.
        </p>
        <div className="space-x-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a href="#services" className="bg-brand-gold text-white font-bold py-3 px-8 rounded-md hover:bg-yellow-600 transition-all transform hover:scale-105 inline-block">
            Our Services
          </a>
          <a href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-brand-blue transition-all transform hover:scale-105 inline-block">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;