import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/image%20(6).png"
          alt="Pergolado de madeira luxuoso e área de piscina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-wood-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-wood-300 font-bold tracking-widest uppercase mb-4 animate-fade-in-up">
          Sofisticação & Natureza
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight drop-shadow-lg">
          Transforme seu <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-wood-200 to-wood-400">
            Espaço Exterior
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          Especialistas na construção de decks de madeira nobre e pergolados que unem design, conforto e durabilidade.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#portfolio"
            onClick={(e) => handleScroll(e, 'portfolio')}
            className="px-8 py-4 bg-wood-600 hover:bg-wood-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl"
          >
            Ver Nossos Projetos
            <ArrowRight size={20} />
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-wood-900 rounded-full font-bold text-lg transition-all"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;