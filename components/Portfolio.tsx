import React, { useState } from 'react';
import { PORTFOLIO_IMAGES } from '../constants';
import { ProjectImage } from '../types';
import { Filter } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'deck' | 'pergola'>('all');

  const filteredImages = PORTFOLIO_IMAGES.filter(img => 
    filter === 'all' ? true : (img.category === filter || img.category === 'both')
  );

  return (
    <section id="portfolio" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-wood-600 font-bold tracking-wider uppercase mb-3">Nosso Trabalho</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Obras Executadas
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Confira a qualidade e o acabamento dos nossos projetos recentes. Cada detalhe é pensado para valorizar o seu ambiente.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'deck', label: 'Decks' },
            { id: 'pergola', label: 'Pergolados' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-6 py-2 rounded-full border-2 transition-all font-semibold ${
                filter === btn.id
                  ? 'bg-wood-800 border-wood-800 text-white shadow-md'
                  : 'bg-transparent border-wood-200 text-wood-700 hover:border-wood-600'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-80 overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer"
            >
              <img 
                src={project.url} 
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                <h4 className="text-xl font-bold font-serif mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h4>
                <p className="text-wood-200 text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  Pergolife
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;