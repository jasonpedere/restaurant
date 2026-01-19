
import React, { useState } from 'react';
import { MENU_ITEMS, BUFFET_RATES } from '../constants.tsx';

interface MenuPageProps {
  onBack: () => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Appetizers', 'Filipino Favorites', 'Main Course', 'Desserts'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white animate-fade-in pt-24 pb-20">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-stone-400 hover:text-orange-600 transition-colors mb-8 group"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif mb-4 italic">The Grand Feast</h1>
            <p className="text-stone-500 text-lg max-w-xl">Explore our diverse buffet spread, featuring over 50 daily dishes prepared with the finest local ingredients.</p>
          </div>
          
          {/* Buffet Rates Card */}
          <div className="bg-stone-50 border border-stone-100 p-8 rounded-3xl md:w-80">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">Buffet Rates</h4>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-sm">Weekday Lunch</span>
                <span className="font-bold text-stone-900">₱{BUFFET_RATES.weekday.lunch}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-sm">Weekday Dinner</span>
                <span className="font-bold text-stone-900">₱{BUFFET_RATES.weekday.dinner}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-sm">Weekend / Holiday</span>
                <span className="font-bold text-stone-900">₱{BUFFET_RATES.weekend.allDay}</span>
              </div>
              <p className="text-[10px] text-stone-400 mt-2 uppercase tracking-wide leading-relaxed">
                {BUFFET_RATES.kids.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-20 bg-white/90 backdrop-blur-md z-40 border-y border-stone-100 mb-12">
        <div className="container mx-auto px-6 py-4 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                activeCategory === category 
                  ? 'bg-stone-900 text-white shadow-lg' 
                  : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {item.popular && (
                  <div className="absolute top-6 right-6 bg-orange-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    Best Seller
                  </div>
                )}
              </div>
              <div className="text-center">
                <span className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">
                  {item.category}
                </span>
                <h4 className="text-2xl font-serif mb-3 italic">{item.name}</h4>
                <p className="text-stone-500 text-sm leading-relaxed max-w-sm mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-6 mt-24 text-center">
        <div className="bg-stone-900 text-white py-16 px-6 rounded-[3rem] overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-serif italic mb-6">Ready to feast?</h3>
            <p className="text-stone-400 mb-10 max-w-lg mx-auto">Skip the queue and secure your table for an unforgettable dining experience in Cabanatuan City.</p>
            <button 
              onClick={() => { onBack(); setTimeout(() => window.location.hash = 'reservation', 100); }}
              className="px-12 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold uppercase tracking-widest transition-all transform hover:scale-105"
            >
              Book Your Table Now
            </button>
          </div>
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
