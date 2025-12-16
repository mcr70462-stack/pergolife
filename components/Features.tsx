import React from 'react';
import { Hammer, ShieldCheck, Clock, TreePine } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <TreePine size={32} />,
      title: "Madeira Nobre",
      desc: "Utilizamos apenas madeiras selecionadas e tratadas para garantir longevidade e resistência ao tempo."
    },
    {
      icon: <Hammer size={32} />,
      title: "Mão de Obra Especializada",
      desc: "Equipe técnica com anos de experiência em carpintaria fina e estruturas complexas."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Garantia de Qualidade",
      desc: "Acabamento impecável e estrutura robusta. Seu projeto executado com perfeição."
    },
    {
      icon: <Clock size={32} />,
      title: "Pontualidade",
      desc: "Respeitamos rigorosamente os prazos estabelecidos para que você aproveite sua obra o quanto antes."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-wood-600 font-bold tracking-wider uppercase mb-3">Por que a Pergolife?</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              Excelência em Cada Detalhe
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              A <strong>Pergolife</strong> nasceu da paixão por transformar ambientes externos em espaços de convivência únicos. Entendemos que um deck ou pergolado não é apenas uma estrutura de madeira, mas sim o cenário para momentos inesquecíveis com família e amigos.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Combinamos técnicas tradicionais de marcenaria com designs contemporâneos, garantindo que sua casa ganhe valor estético e funcional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((item, idx) => (
              <div key={idx} className="p-6 bg-wood-50 rounded-xl hover:shadow-lg transition-shadow border border-wood-100">
                <div className="text-wood-600 mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;