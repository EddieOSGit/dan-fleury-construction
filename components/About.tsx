import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-serif font-bold text-brand-blue mb-4">About Dan Fleury Construction</h2>
            <p className="text-lg text-brand-gray-700 mb-6">
              Based in Billings, Montana, Dan Fleury Construction Co. is a reputable general contractor known for building quality residential homes, custom fences, and full home renovations. As a locally-owned business, we have earned a strong reputation for reliability, top-tier workmanship, and commitment to customer satisfaction.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-brand-gray-100 rounded-lg">
                <h3 className="font-bold text-xl text-brand-blue mb-2">Our Mission</h3>
                <p>To deliver superior construction solutions that enhance the lives of our clients through attention to detail, open communication, and a "no shortcuts" philosophy.</p>
              </div>
              <div className="p-4 bg-brand-gray-100 rounded-lg">
                <h3 className="font-bold text-xl text-brand-blue mb-2">Our Core Values</h3>
                <p>We are dedicated to craftsmanship, integrity, and transparency in every project we undertake.</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1567100322695-496e2277e947?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3J1Y3Rpb258ZW58MHx8MHx8fDA%3D" 
              alt="Construction worker on a building site, symbolizing the craftsmanship and dedication of Dan Fleury Construction" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;