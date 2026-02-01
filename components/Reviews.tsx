
import React from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-stone-900 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
        <Quote className="w-96 h-96 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-black uppercase tracking-widest text-sm mb-4">Social Proof</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            Trusted By Our <span className="text-emerald-400">Neighbors.</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0 Google Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[3rem] transition-transform hover:-translate-y-2 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                ))}
              </div>
              <p className="text-stone-300 text-lg italic leading-relaxed mb-8">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center text-emerald-100 font-black text-xl">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-black text-lg">{review.author}</p>
                  <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Verified Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-stone-500 font-medium mb-4">Want to see more results?</p>
          <a href="#gallery" className="text-white font-black uppercase tracking-widest hover:text-emerald-400 transition-colors underline underline-offset-8 decoration-emerald-500 decoration-2">
            View Our Project Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
