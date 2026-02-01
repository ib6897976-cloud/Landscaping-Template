import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    "Over 10 years of professional experience",
    "Family-owned and operated locally",
    "Full attention to detail on every project",
    "100% Reliability - we show up on time",
    "Eco-friendly planting and maintenance",
    "Fully licensed and insured professionals"
  ];

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
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-stone-50">
              <img 
                src="https://lmchouston.com/wp-content/uploads/2023/11/homepage-hero.jpg" 
                alt="Our professional landscaping team at work"
                className="w-full h-[650px] object-cover"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-stone-100 rounded-3xl -rotate-6 -z-10" />
            <div className="absolute bottom-10 -left-6 bg-emerald-800 p-8 rounded-3xl shadow-2xl z-20 hidden md:block">
              <p className="text-5xl font-black text-white mb-1">10+</p>
              <p className="text-emerald-100 text-xs font-bold uppercase tracking-[0.2em] leading-tight">Years Of<br />Professional<br />Excellence</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-4">Our Professional Story</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-stone-900 leading-tight">
              Passionate About <br />
              <span className="text-stone-400">Outdoor Perfection.</span>
            </h2>
            
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              Glass Grass was built on a simple promise: to treat every yard like it's our own. Our company was founded with a deep commitment to quality and service. We've seen too many companies rush through jobs; we believe in the power of precision and the "above and beyond" approach.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-stone-700 font-bold text-sm uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-stone-600 italic border-l-4 border-emerald-500 pl-6 mb-10 py-4 bg-stone-50 rounded-r-2xl">
              "We don't just mow lawns. We create environments where families make memories. Professionalism isn't just a word to our team—it's how we show up every single day with top-notch gear and a dedication to detail." 
              <span className="block mt-2 font-black text-stone-900 not-italic">— The Glass Grass Team</span>
            </p>

            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-4 bg-stone-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-900/20"
            >
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;