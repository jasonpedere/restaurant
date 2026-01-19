
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'menu') => void;
  currentView: 'home' | 'menu';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 || currentView === 'menu');
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const navLinks = [
    { name: 'About', href: '#about', action: () => onNavigate('home') },
    { 
      name: 'Menu', 
      href: '#menu', 
      action: () => onNavigate('menu'),
      dropdown: ['Appetizers', 'Filipino Favorites', 'Main Course', 'Desserts'] 
    },
    { name: 'Reservation', href: '#reservation', action: () => onNavigate('home') },
    { name: 'Location', href: '#location', action: () => onNavigate('home') },
  ];

  const handleLinkClick = (link: any) => {
    setIsMobileMenuOpen(false);
    link.action();
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled || currentView === 'menu' ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className={`text-2xl font-bold tracking-tighter transition-colors duration-300 ${
              isScrolled || currentView === 'menu' ? 'text-stone-900' : 'text-white'
            }`}
          >
            RR GARDEN FEAST
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setIsDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setIsDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link); window.location.hash = link.href; }}
                  className={`text-[13px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-1 ${
                    isScrolled || currentView === 'menu' ? 'text-stone-700 hover:text-orange-600' : 'text-white hover:text-orange-300'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <svg className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className={`absolute left-0 mt-4 w-56 bg-white shadow-2xl rounded-xl py-4 transition-all duration-300 transform origin-top-left ${
                    isDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}>
                    {link.dropdown.map((subItem) => (
                      <button
                        key={subItem}
                        onClick={() => { onNavigate('menu'); setIsDropdownOpen(false); }}
                        className="w-full text-left px-6 py-2 text-sm text-stone-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => { onNavigate('home'); setTimeout(() => window.location.hash = 'reservation', 100); }}
              className={`hidden md:block px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all transform active:scale-95 ${
                isScrolled || currentView === 'menu'
                  ? 'bg-orange-600 text-white hover:bg-orange-700 hover:shadow-lg' 
                  : 'bg-white text-stone-900 hover:bg-stone-100'
              }`}
            >
              Book Table
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${isScrolled || currentView === 'menu' ? 'text-stone-900' : 'text-white'}`}
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[70] transition-all duration-500 md:hidden ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white p-12 flex flex-col transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex justify-between items-center mb-16">
            <span className="text-xl font-serif font-bold italic text-orange-600">RR Garden</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-stone-400 hover:text-stone-900">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-8 text-stone-900">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link)}
                className="text-3xl font-serif text-left hover:text-orange-600 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="mt-auto">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onNavigate('home'); setTimeout(() => window.location.hash = 'reservation', 100); }}
              className="block w-full text-center py-4 bg-orange-600 text-white rounded-xl font-bold uppercase tracking-widest shadow-lg"
            >
              Reserve Now
            </button>
            <div className="mt-8 text-stone-400 text-sm">
              <p>Wellspring Complex</p>
              <p>Cabanatuan City, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
