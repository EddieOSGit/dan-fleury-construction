
import React from 'react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://plus.unsplash.com/premium_photo-1712685912270-01f62292dfb8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpbGxpbmdzJTIwbW9udGFuYXxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Skyline of Billings, Montana" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-brand-blue mb-4">Deeply Rooted in Billings</h2>
            <p className="text-lg text-brand-gray-700 mb-6">
              Dan Fleury Construction isn't just a business in Billings; we're part of the community. We are proud to invest in the future of our city and its people.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-brand-gold font-bold text-2xl mr-4">&#10003;</span>
                <div>
                  <h3 className="font-bold text-xl text-brand-blue">Supporting Local Students</h3>
                  <p>We proudly support scholarships for Montana State University–Billings, helping local students pursue careers in construction.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold font-bold text-2xl mr-4">&#10003;</span>
                <div>
                  <h3 className="font-bold text-xl text-brand-blue">Community Partnerships</h3>
                  <p>We partner with leading local contractors and actively participate in community events like the Billings Parade of Homes.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-gold font-bold text-2xl mr-4">&#10003;</span>
                <div>
                  <h3 className="font-bold text-xl text-brand-blue">Hiring Local Trades</h3>
                  <p>We prioritize hiring local talent, fostering strong relationships and strengthening the local economy.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;