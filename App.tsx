
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Trust from './components/Trust';
import Community from './components/Community';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-gray-100 text-brand-gray-700 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Trust />
        <Community />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;