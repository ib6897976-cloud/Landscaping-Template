
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with a stunning, high-end manicured lawn image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium Estate Landscaping"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 px-5 py-2.5 rounded-full mb-8 shadow-xl">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="text-white text-xs font-black uppercase tracking-[0.2em]">
            The Area's Most Trusted Landscaping Team
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-[1.05] tracking-tighter mb-8 max-w-6xl mx-auto drop-shadow-2xl text-balance">
          Transform Your Yard Into A <span className="text-emerald-400">Masterpiece.</span>
        </h1>

        <p className="text-lg md:text-2xl text-stone-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
          Reliable, professional landscaping solutions designed to make your home or business stand out with unparalleled precision and care.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all transform hover:-translate-y-1 shadow-2xl shadow-emerald-950/40 uppercase tracking-widest outline-none"
          >
            Request Free Estimate
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white px-12 py-6 rounded-2xl font-black text-xl border border-white/40 transition-all uppercase tracking-widest outline-none"
          >
            Our Services
          </button>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <div className="w-7 h-12 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
