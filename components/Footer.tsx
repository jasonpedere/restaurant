
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter mb-6">MESA FAMILIA</h2>
            <p className="text-stone-400 max-w-sm mb-6">
              Dedicated to bringing you the most exquisite buffet experience in Nueva Ecija. Quality, fresh ingredients, and exceptional service are at our core.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Twitter'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <span className="sr-only">{social}</span>
                  {/* Mock icons */}
                  <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-stone-400 text-sm">
              <li><a href="#menu" className="hover:text-orange-400 transition-colors">Our Menu</a></li>
              <li><a href="#reservation" className="hover:text-orange-400 transition-colors">Book a Table</a></li>
              <li><a href="#location" className="hover:text-orange-400 transition-colors">Find Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-stone-400 text-sm mb-4">Subscribe for seasonal specials and events.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-stone-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-orange-500"
              />
              <button className="bg-orange-600 px-4 py-2 rounded-r-lg hover:bg-orange-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-stone-500 text-xs gap-4">
          <p>© {new Date().getFullYear()} Mesa Familia. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
