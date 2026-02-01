
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Accounting for sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isScrolled ? 'bg-emerald-600' : 'bg-white'}`}>
              <span className={`font-black text-xl ${isScrolled ? 'text-white' : 'text-emerald-800'}`}>B</span>
            </div>
            <span className={`text-2xl font-black tracking-tighter uppercase ${isScrolled || isMobileMenuOpen ? 'text-stone-900' : 'text-white'}`}>
              Best Grass
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-emerald-600 outline-none ${
                  isScrolled ? 'text-stone-600' : 'text-stone-100'
                }`}
              >
                {link.name}
              </button>
            ))}
            <a 
              href="tel:5551234567"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-transform active:scale-95 shadow-lg shadow-emerald-900/10"
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-emerald-800 outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8 text-stone-900" />
            ) : (
              <Menu className={`w-8 h-8 ${isScrolled ? 'text-stone-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 right-0 h-screen bg-white z-40 p-8 flex flex-col animate-in fade-in slide-in-from-top duration-300">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <span className="font-black text-xl text-white">B</span>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-stone-900">Best Grass</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="w-8 h-8 text-stone-900" />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-black uppercase tracking-tight text-stone-900 border-b border-stone-100 pb-4 text-left outline-none"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="mt-auto">
             <a 
              href="tel:5551234567"
              className="flex items-center justify-center gap-3 bg-emerald-600 text-white py-5 rounded-2xl text-xl font-bold shadow-xl shadow-emerald-100"
            >
              <Phone className="w-6 h-6" />
              Call (555) 123-4567
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
