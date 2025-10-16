
import React from 'react';

const galleryImages = [
  { seed: 'house1', alt: 'Exterior of a custom built modern home' },
  { seed: 'kitchen', alt: 'Renovated modern kitchen with island' },
  { seed: 'fence', alt: 'Custom wooden privacy fence in a backyard' },
  { seed: 'deck', alt: 'Spacious wooden deck for outdoor living' },
  { seed: 'bathroom', alt: 'Luxury bathroom remodel with custom tile' },
  { seed: 'livingroom', alt: 'Cozy living room with fireplace' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-brand-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-brand-blue mb-4">Our Work</h2>
          <p className="text-lg text-brand-gray-700 max-w-3xl mx-auto">
            A glimpse into the quality and craftsmanship we bring to every project.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img
                src={`https://picsum.photos/seed/${image.seed}/800/600`}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
