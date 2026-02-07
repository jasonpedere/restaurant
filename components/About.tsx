import React from 'react';
import Gallery, { GallerySection } from './Gallery.tsx';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  const gallerySections: GallerySection[] = [
    {
      title: 'Indoor Elegance',
      description: 'Step into our sophisticated indoor spaces featuring refined marble finishes, ambient lighting, and our signature hanging garden ceilings. Perfect for intimate dinners or grand celebrations with climate-controlled comfort.',
      photos: [
        { src: 'https://i.imgur.com/Vpd8gAv.png', alt: 'Indoor Dining' },
        { src: 'https://i.imgur.com/SjmY3Wj.png', alt: 'Indoor Chandelier' },
        { src: 'https://i.imgur.com/gnXDl5D.png', alt: 'Fine Dining Setup' },
        { src: 'https://i.imgur.com/DBFiZK1.jpg', alt: 'Restaurant Interior' },
      ]
    },
    {
      title: 'Outdoor Garden',
      description: 'Enjoy the freshness of our lush garden setting with natural light, blooming flowers, and the gentle breeze. Our outdoor spaces create an enchanting atmosphere for gatherings under the stars.',
      photos: [
        { src: 'https://i.imgur.com/pUWxUPP.jpg', alt: 'Outdoor Dining' },
        { src: 'https://i.imgur.com/Kk0wpuC.jpg', alt: 'Garden Seating' },
        { src: 'https://i.imgur.com/DCNspsu.jpg', alt: 'Outdoor Ambiance' },
        { src: 'https://i.imgur.com/u1YQyH5.jpg', alt: 'Garden Party' },
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-white pt-24">
      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 italic">About Mesa Familia</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover the story behind Cabanatuan City's premier dining destination
          </p>
        </div>

        {/* Main About Section */}
        <section className="py-24 bg-white">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Mesa Familia Interior" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-stone-100 rounded-2xl -z-10 hidden md:block"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-orange-600/20 rounded-2xl -z-10 hidden md:block"></div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-orange-600 text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Sanctuary</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight italic">Where Nature Meets Elegance</h3>
              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                Experience the enchantment of Mesa Familia. Our venue is designed as a floral sanctuary, blending the freshness of a garden with the sophistication of a grand banquet hall.
              </p>
              <p className="text-stone-600 text-lg mb-10 leading-relaxed">
                From our signature hanging garden ceilings to the refined marble finishes, every detail in our Cabanatuan City flagship is crafted to make your celebration truly unforgettable.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-serif text-orange-600 mb-1">50+</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-stone-400">Daily Dishes</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-orange-600 mb-1">200</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-stone-400">Seating Capacity</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-orange-600 mb-1">10k+</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-stone-400">Happy Guests</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-stone-50">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Our Values</h2>
            <p className="text-stone-600 text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-2xl font-serif mb-3">Freshness</h3>
              <p className="text-stone-600">
                We source the finest local and sustainable ingredients to create dishes that honor both tradition and innovation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-serif mb-3">Passion</h3>
              <p className="text-stone-600">
                Every meal is prepared with dedication and love, reflecting our commitment to culinary excellence and guest satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-serif mb-3">Elegance</h3>
              <p className="text-stone-600">
                From ambiance to service, we create experiences that celebrate the special moments that bring people together.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <Gallery sections={gallerySections} />

        {/* History Section */}
        <section className="py-24 bg-stone-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif mb-8 text-center">Our Story</h2>
            
            <div className="space-y-6 text-stone-600">
              <p className="text-lg leading-relaxed">
                Mesa Familia was born from a vision to create more than just a restaurant—to build a sanctuary where families, friends, and lovers could gather to celebrate life's precious moments. Founded in Cabanatuan City, we've grown to become the region's premier destination for fine dining and memorable celebrations.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our name, "Mesa Familia," reflects our core belief: that a table is where family comes together. Whether you're sharing a quiet dinner or hosting a grand celebration, our team is dedicated to making every moment extraordinary.
              </p>
              
              <p className="text-lg leading-relaxed">
                With our signature hanging gardens and elegant spaces, we've designed an environment that feels both intimate and grand. Our chefs work tirelessly to blend traditional Filipino flavors with international techniques, creating a culinary experience that's uniquely Mesa Familia.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-stone-50 text-center">
          <h2 className="text-4xl font-serif mb-6">Ready to Experience Mesa Familia?</h2>
          <p className="text-lg text-stone-600 mb-10 max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey. Whether for a special occasion or a regular celebration, we look forward to welcoming you.
          </p>
          <button 
            onClick={onBack}
            className="px-10 py-4 bg-orange-600 text-white rounded-full font-bold uppercase tracking-widest hover:bg-orange-700 transition-all transform active:scale-95"
          >
            Back to Home
          </button>
        </section>
      </main>
    </div>
  );
};

export default About;
