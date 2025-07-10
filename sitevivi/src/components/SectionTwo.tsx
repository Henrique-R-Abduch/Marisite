import React, { useState } from 'react';
import FilmGrain from './FilmGrain';
import { cn } from '@/lib/utils';

interface RomanticRecordItem {
  label: string;
  value: string;
}

const SectionTwo: React.FC = () => {
  const [showRecord, setShowRecord] = useState(false);

  const romanticRecord: RomanticRecordItem[] = [
    { label: "Comida do encontro", value: "Pizza boa (sem disputa pelo último pedaço)" },
    { label: "Trilha sonora", value: "Can't Help Falling in Love — Elvis Presley" },
    { label: "Cenário ideal", value: "Luzes baixas, taça de vinho, conversa infinita" },
    { label: "Intenção", value: "Descobrir seus filmes preferidos (e você também)" },
    { label: "Observações", value: "Altamente interessado. Perigosamente encantado." }
  ];

  return (
    <section className="section relative overflow-hidden">
      {/* Background mantido */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/mafia2.jpg')" }}
      />

      {/* Overlay escura para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-zinc-900/90" />

      {/* Efeito de granulação */}
      <FilmGrain intensity="medium" />

      {/* Conteúdo central */}
      <div className="z-20 text-white text-center max-w-3xl px-4 py-24 relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel tracking-wide text-white/90 mb-6">
          Take 2: Um dossiê confidencial... sobre nós dois.
        </h2>

        {/* Botão de abrir dossiê */}
        <button 
          onClick={() => setShowRecord(!showRecord)}
          className="uppercase border border-white/20 px-6 py-3 text-sm md:text-base tracking-widest font-medium hover:bg-white/10 transition-colors"
        >
          {showRecord ? "Fechar Arquivo" : "Abrir Arquivo do Coração"}
        </button>

        {/* Cartão com os dados românticos */}
        <div 
          className={cn(
            "relative mt-8 transition-all duration-500 ease-in-out",
            showRecord ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
          )}
        >
          <div className="bg-zinc-900/80 border border-zinc-800 p-6 md:p-8 max-w-2xl mx-auto text-left shadow-2xl relative rounded-md backdrop-blur-sm">
            
            {/* Carimbo */}
            <div className="absolute top-4 right-6 text-xs tracking-widest text-rose-300/70 uppercase font-bold">
              Arquivo Nº 0711
            </div>

            <h3 className="font-cinzel text-xl tracking-widest text-white/80 text-center mb-6">
              Dossiê Romântico Pessoal
            </h3>

            {romanticRecord.map((item, index) => (
              <div 
                key={index} 
                className={cn(
                  "mb-5 opacity-0",
                  showRecord && `animate-fade-in [animation-delay:${index * 150}ms]`
                )}
              >
                <span className="text-rose-300 uppercase text-xs tracking-wide">{item.label}:</span>
                <p className="text-lg mt-1 font-cinzel text-white/90">{item.value}</p>
                {index < romanticRecord.length - 1 && <hr className="border-rose-800/40 mt-4" />}
              </div>
            ))}

            {/* Assinatura romântica */}
            <div className="mt-8 border-t border-zinc-700 pt-3 text-xs text-rose-200/70 text-center font-mono tracking-wide relative">
              Assinado por: Henrique Abduch. <br />
              
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-rose-500 text-[10px] tracking-wider uppercase">
                Arquivo confidencial
              </div>
            </div>

            {/* Textura de papel */}
            <div className="absolute inset-0 bg-[url('/texture-paper.png')] opacity-[0.03] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
