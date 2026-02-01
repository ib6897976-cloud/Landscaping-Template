
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col selection:bg-emerald-600 selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Stats Strip */}
        <div className="bg-white py-12 border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-stone-900 mb-2">500+</p>
                <p className="text-stone-400 text-xs font-black uppercase tracking-widest">Yards Maintained</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-emerald-600 mb-2">5.0</p>
                <p className="text-stone-400 text-xs font-black uppercase tracking-widest">Google Rating</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-stone-900 mb-2">100%</p>
                <p className="text-stone-400 text-xs font-black uppercase tracking-widest">On-Time Arrival</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-black text-emerald-600 mb-2">12k</p>
                <p className="text-stone-400 text-xs font-black uppercase tracking-widest">Trees Planted</p>
              </div>
            </div>
          </div>
        </div>

        <Services />
        <About />
        <Reviews />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      {/* Persistent Floating Call Button for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <a 
          href="tel:5551234567"
          className="flex items-center justify-center gap-3 bg-stone-900 text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl active:scale-95 transition-transform"
        >
          Call For A Quote
        </a>
      </div>
    </div>
  );
};

export default App;
