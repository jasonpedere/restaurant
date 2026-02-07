
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import MenuSection from './components/MenuSection.tsx';
import ChefAI from './components/ChefAI.tsx';
import ReservationForm from './components/ReservationForm.tsx';
import Location from './components/Location.tsx';
import Footer from './components/Footer.tsx';
import MenuPage from './components/MenuPage.tsx';
import About from './components/About.tsx';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'menu' | 'about'>('home');

  return (
    <div className="min-h-screen">
      <Navbar onNavigate={setView} currentView={view} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            
            <MenuSection />
            <div className="bg-stone-50 pb-20 text-center">
                <button 
                  onClick={() => { setView('menu'); window.scrollTo(0, 0); }}
                  className="px-10 py-4 border-2 border-stone-900 text-stone-900 rounded-full font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all transform active:scale-95"
                >
                  View Full Menu & Rates
                </button>
              </div>
            
            <ChefAI />
            
            <ReservationForm />
            
            <Location />
          </>
        ) : view === 'menu' ? (
          <MenuPage onBack={() => { setView('home'); window.scrollTo(0, 0); }} />
        ) : (
          <About onBack={() => { setView('home'); window.scrollTo(0, 0); }} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
