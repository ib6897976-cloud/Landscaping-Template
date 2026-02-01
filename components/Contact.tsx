import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Lawn Care',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! One of our project managers will reach out within 24 hours.");
    setFormData({ name: '', email: '', phone: '', service: 'Lawn Care', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <p className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-stone-900 mb-8">
              Start Your <br />
              <span className="text-emerald-600">Transformation.</span>
            </h2>
            <p className="text-stone-600 text-lg mb-12 max-w-lg leading-relaxed">
              Ready for a yard that neighbors envy? Fill out the form or give us a call. We offer free, transparent, no-obligation estimates.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-emerald-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-stone-400 text-xs font-black uppercase tracking-widest mb-1">Direct Line</p>
                  <p className="text-xl font-black text-stone-900">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-emerald-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-stone-400 text-xs font-black uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-black text-stone-900">hello@bestgrass.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-emerald-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-stone-400 text-xs font-black uppercase tracking-widest mb-1">Service Area</p>
                  <p className="text-xl font-black text-stone-900">Metro City & Surrounding Areas</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-emerald-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-stone-400 text-xs font-black uppercase tracking-widest mb-1">Business Hours</p>
                  <p className="text-xl font-black text-stone-900">Mon - Sat: 7am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-emerald-900/10 border border-emerald-100">
            <h3 className="text-2xl font-black text-stone-900 mb-8">Request A Free Estimate</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-3">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Jane Doe"
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-stone-900 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-stone-300"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-3">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="(555) 000-0000"
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-stone-900 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-stone-300"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-3">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="jane@example.com"
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-stone-900 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-stone-300"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-3">Service Needed</label>
                <select 
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-stone-900 focus:outline-none focus:border-emerald-500 transition-colors appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option>Lawn Care & Maintenance</option>
                  <option>Landscape Design</option>
                  <option>Garden Restoration</option>
                  <option>Hardscaping</option>
                  <option>Snow Removal</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-stone-400 mb-3">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your dream yard..."
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-stone-900 focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-stone-300"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/10"
              >
                Send Request
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;