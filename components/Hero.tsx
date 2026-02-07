
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
          alt="Mesa Familia Venue" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="inline-block px-4 py-1 border border-orange-400/30 rounded-full mb-6 animate-fade-in">
          <span className="text-orange-400 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
            Cabanatuan's Most Elegant Buffet
          </span>
        </div>
        <h1 className="text-white text-5xl md:text-8xl font-serif italic mb-8 max-w-5xl leading-[1.1] drop-shadow-2xl">
          A Feast for the Senses in Our Floral Sanctuary
        </h1>
        <p className="text-stone-100 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Step into a world where gourmet Filipino heritage meets a breathtaking garden setting. Your table at Mesa Familia awaits.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#reservation" 
            className="w-full md:w-auto px-12 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-all font-bold text-sm uppercase tracking-widest shadow-xl hover:shadow-orange-600/20"
          >
            Book Your Feast
          </a>
          <a 
            href="#menu" 
            className="w-full md:w-auto px-12 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white hover:text-stone-900 text-white rounded-full transition-all font-bold text-sm uppercase tracking-widest"
          >
            Browse The Spread
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] text-white font-bold uppercase tracking-[0.3em]">Discover More</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
