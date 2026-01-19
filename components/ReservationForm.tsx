
import React, { useState } from 'react';
import { ReservationData } from '../types';

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '18:00',
    guests: 2,
    occasion: 'Normal Dining'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="reservation" className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-xl">
          <div className="bg-orange-50 p-12 rounded-2xl border border-orange-100">
            <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-serif mb-4">Reservation Received!</h3>
            <p className="text-stone-600 mb-8">
              Thank you, {formData.name}. We've sent a confirmation to {formData.email}. We look forward to hosting you on {formData.date} at {formData.time}.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
            >
              Make Another Booking
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-orange-600 text-sm font-bold tracking-[0.2em] uppercase mb-2">Book a Table</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">Plan Your Celebration</h3>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Whether it's an intimate dinner or a grand family gathering, we ensure every guest feels at home. For groups larger than 20, please contact us directly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Dining Hours</h4>
                  <p className="text-stone-500 text-sm">Lunch: 11:00 AM - 2:30 PM | Dinner: 6:00 PM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Hotline</h4>
                  <p className="text-stone-500 text-sm">+63 912 345 6789</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Date</label>
                  <input 
                    required
                    type="date" 
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Time</label>
                  <select 
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  >
                    <optgroup label="Lunch">
                      <option value="11:00">11:00 AM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="14:00">02:00 PM</option>
                    </optgroup>
                    <optgroup label="Dinner">
                      <option value="18:00">06:00 PM</option>
                      <option value="19:30">07:30 PM</option>
                      <option value="21:00">09:00 PM</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Guests</label>
                  <input 
                    type="number" 
                    min="1"
                    max="20"
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Occasion</label>
                <select 
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  value={formData.occasion}
                  onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                >
                  <option>Normal Dining</option>
                  <option>Birthday Celebration</option>
                  <option>Anniversary</option>
                  <option>Corporate Event</option>
                  <option>Other Special Occasion</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-stone-900 text-white font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-stone-800 transition-all transform active:scale-[0.98]"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
