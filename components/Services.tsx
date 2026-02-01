
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-4">Elite Solutions</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-stone-900">
              Complete Care For Your <br />
              <span className="text-emerald-600">Outdoor Sanctuary.</span>
            </h2>
          </div>
          <p className="text-stone-500 max-w-sm mb-2 text-lg">
            From basic maintenance to complex landscape architectural design, we handle it all with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white p-2 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 border border-stone-100 overflow-hidden"
            >
              <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white">
                  {service.icon}
                </div>
              </div>
              <div className="px-8 pb-10">
                <h3 className="text-2xl font-black mb-4 text-stone-900 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-6 font-medium">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-stone-900 font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all"
                >
                  Get Estimate 
                  <span className="w-8 h-px bg-stone-300 group-hover:bg-emerald-500 group-hover:w-12 transition-all"></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
