
import React from 'react';
import { APP_INFO } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="aspect-video w-full h-[450px] bg-stone-200 rounded-3xl overflow-hidden relative shadow-inner">
              {/* Simplified static map placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-stone-300">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 text-orange-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h4 className="text-xl font-serif mb-2">Wellspring Complex</h4>
                  <p className="text-stone-600">Cabanatuan City, Philippines</p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(APP_INFO.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-6 inline-block px-6 py-2 border-2 border-orange-600 text-orange-600 font-bold rounded-full hover:bg-orange-600 hover:text-white transition-all"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-orange-600 text-sm font-bold tracking-[0.2em] uppercase mb-2">Visit Us</h2>
            <h3 className="text-4xl font-serif mb-8">Located in the Heart of the City</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Address</h4>
                <p className="text-xl text-stone-800 font-light">{APP_INFO.address}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Lunch Service</h4>
                  <p className="text-stone-800">{APP_INFO.hours.lunch}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Dinner Service</h4>
                  <p className="text-stone-800">{APP_INFO.hours.dinner}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">Contact</h4>
                <p className="text-stone-800 mb-1">{APP_INFO.phone}</p>
                <p className="text-stone-800">{APP_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
