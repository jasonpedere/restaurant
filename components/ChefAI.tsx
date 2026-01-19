
import React, { useState } from 'react';

const getChefRecommendation = async (preference: string) => {
  return "I'm currently busy in the kitchen, but I recommend starting with our signature Crispy Pata and ending with Halo-Halo!";
};

const ChefAI: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    const recommendation = await getChefRecommendation(input);
    setResponse(recommendation);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-orange-400 font-serif italic text-3xl mb-4">"Not sure where to start?"</h2>
            <p className="text-stone-400 mb-8">
              Tell our AI Chef what you're in the mood for (e.g., "something spicy," "local favorites," or "seafood lover"), and get a personalized feast guide.
            </p>
            <form onSubmit={handleAsk} className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: I love spicy Filipino food..."
                className="flex-1 bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-white"
              />
              <button 
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-orange-600 rounded-lg font-bold hover:bg-orange-700 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Thinking...' : 'Ask Chef'}
              </button>
            </form>
          </div>
          
          <div className="w-full md:w-1/2 min-h-[200px] flex items-center justify-center p-8 border border-stone-800 bg-stone-800/50 rounded-2xl relative overflow-hidden">
             {response ? (
               <div className="animate-fade-in text-lg font-serif italic leading-relaxed text-stone-200">
                 "{response}"
               </div>
             ) : (
               <div className="text-stone-500 italic">Chef is waiting for your preferences...</div>
             )}
             
             {/* Decorative element */}
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M11 15h2v2h-2v-2m0-8h2v6h-2V7m1-5C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z" />
               </svg>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefAI;
