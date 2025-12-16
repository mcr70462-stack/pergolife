import React from 'react';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Logo color="white" className="h-8 mb-4" />
          <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
            Transformando madeira em arte. Especialistas em criar ambientes externos que inspiram vida.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#hero" className="hover:text-wood-400 transition-colors">Início</a>
          <a href="#portfolio" className="hover:text-wood-400 transition-colors">Projetos</a>
          <a href="#about" className="hover:text-wood-400 transition-colors">Sobre</a>
          <a href="#contact" className="hover:text-wood-400 transition-colors">Contato</a>
        </div>

        <div className="text-gray-500 text-xs text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Pergolife. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;