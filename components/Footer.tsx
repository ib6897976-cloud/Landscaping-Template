import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <span className="font-black text-xl text-white">G</span>
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-stone-900">Glass Grass</span>
            </div>
            <p className="text-stone-500 text-lg leading-relaxed mb-8">
              The premier choice for professional, reliable landscaping in Metro City. We turn outdoor dreams into reality.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 hover:bg-emerald-600 hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm text-stone-900 mb-8">Quick Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Reviews', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-stone-500 font-medium hover:text-emerald-600 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm text-stone-900 mb-8">Service Offerings</h4>
            <ul className="space-y-4">
              {['Lawn Maintenance', 'Floral Design', 'Tree Surgery', 'Patio Building', 'Winter Services', 'Irrigation'].map((link) => (
                <li key={link}>
                  <span className="text-stone-500 font-medium">{link}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm text-stone-900 mb-8">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Office Address</span>
                <span className="text-stone-600 font-medium">123 Landscape Way, Metro City</span>
              </li>
              <li className="flex flex-col">
                <span className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Call Us</span>
                <span className="text-stone-600 font-black">(555) 123-4567</span>
              </li>
              <li className="flex flex-col">
                <span className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Write Us</span>
                <span className="text-stone-600 font-medium">hello@glassgrass.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-400 text-sm font-medium uppercase tracking-widest">
            © 2024 Glass Grass Landscaping. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-stone-400 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;