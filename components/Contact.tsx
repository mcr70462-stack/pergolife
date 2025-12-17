import React from 'react';
import { Mail, Instagram, MapPin, Phone } from 'lucide-react';
import { INSTAGRAM_URL, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-wood-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-wood-400 font-bold tracking-wider uppercase mb-3">Fale Conosco</h2>
            <h3 className="text-4xl font-serif font-bold mb-8">
              Vamos realizar seu projeto?
            </h3>
            <p className="text-gray-300 text-lg mb-10 max-w-md">
              Entre em contato para solicitar um orçamento ou tirar dúvidas sobre nossos serviços. Estamos prontos para atender você.
            </p>

            <div className="space-y-6">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                <div className="bg-wood-600 p-3 rounded-full group-hover:bg-wood-500 transition-colors">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Siga-nos no Instagram</p>
                  <p className="font-semibold text-lg">@willianrogerde</p>
                </div>
              </a>

              <a href={`mailto:${COMPANY_EMAIL}`} 
                 className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                <div className="bg-wood-600 p-3 rounded-full group-hover:bg-wood-500 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Envie um E-mail</p>
                  <p className="font-semibold text-lg">{COMPANY_EMAIL}</p>
                </div>
              </a>

               <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group">
                <div className="bg-wood-600 p-3 rounded-full group-hover:bg-wood-500 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Telefone / WhatsApp</p>
                  <p className="font-semibold text-lg">{COMPANY_PHONE}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form (Visual Only) */}
          <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">Envie uma mensagem</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition-all" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition-all">
                  <option>Orçamento para Deck</option>
                  <option>Orçamento para Pergolado</option>
                  <option>Manutenção</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-wood-500 focus:ring-2 focus:ring-wood-200 outline-none transition-all" placeholder="Descreva seu projeto..."></textarea>
              </div>
              <button className="w-full bg-wood-700 text-white font-bold py-4 rounded-lg hover:bg-wood-800 transition-colors shadow-lg mt-2">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;