
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import MenuSection from './components/MenuSection.tsx';
import ChefAI from './components/ChefAI.tsx';
import ReservationForm from './components/ReservationForm.tsx';
import Location from './components/Location.tsx';
import Footer from './components/Footer.tsx';
import MenuPage from './components/MenuPage.tsx';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'menu'>('home');

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setView} currentView={view} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            
            <section id="about" className="py-24 bg-white">
              <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                  <div className="md:w-1/2 relative">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                      <img 
                        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200" 
                        alt="RR Garden Interior" 
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
                      Experience the enchantment of RR Garden Feast Buffet. Our venue is designed as a floral sanctuary, blending the freshness of a garden with the sophistication of a grand banquet hall.
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
              </div>
            </section>

            <div id="menu">
              <MenuSection />
              <div className="bg-stone-50 pb-20 text-center">
                <button 
                  onClick={() => { setView('menu'); window.scrollTo(0, 0); }}
                  className="px-10 py-4 border-2 border-stone-900 text-stone-900 rounded-full font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all transform active:scale-95"
                >
                  View Full Menu & Rates
                </button>
              </div>
            </div>
            
            <ChefAI />
            
            <ReservationForm />
            
            <Location />
          </>
        ) : (
          <MenuPage onBack={() => { setView('home'); window.scrollTo(0, 0); }} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
