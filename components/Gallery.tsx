
import React from 'react';
import { PROJECTS } from '../constants';
import { Expand } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-4">Our Work</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-stone-900 mb-6">
            Stunning <span className="text-stone-400">Transformations.</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Explore our curated gallery of beautiful lawns, expertly designed gardens, and structural hardscapes across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-6 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <Expand className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {project.title}
                </h4>
                <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
