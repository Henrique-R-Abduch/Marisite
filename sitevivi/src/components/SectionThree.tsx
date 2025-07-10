import React from 'react';
import { Wine, MapPin, Heart } from 'lucide-react';

const CandleFlicker = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-72 h-72 rounded-full bg-[#ffefd5]/10 blur-3xl animate-flicker${i + 1}`}
        style={{
          top: `${20 + i * 30}%`,
          left: `${15 + i * 25}%`,
        }}
      />
    ))}
  </div>
);

const SectionThree: React.FC = () => {
  return (
    <section className="section relative min-h-screen bg-gradient-to-br from-[#2c0d0d] via-[#1f1b2e] to-black text-white font-serif overflow-hidden">
      <CandleFlicker />

      {/* Luzes ao fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05)_0%,transparent_40%)] z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-24 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-widest mb-6 font-futura uppercase text-[#f4e6e6] leading-tight">
          Um convite. Um destino. Uma noite só nossa.
        </h2>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light text-[#e0d1d1] mb-12 sm:mb-16 leading-relaxed">
          Imagine-se em Paris, Veneza ou Lisboa. Velas acesas, vinho encorpado, uma conversa que flui como um rio europeu ao entardecer.
          <br className="hidden sm:block" />
          Agora pare de imaginar: o jantar é real. E o convite é para você.
        </p>

        {/* Cartão adaptado para responsividade */}
        <div className="relative bg-[#fef9f4] text-black w-full max-w-[340px] sm:max-w-[360px] h-[200px] mx-auto rounded-md shadow-2xl border border-[#e2d6cd] p-6">
          {/* Nome */}
          <div className="absolute top-6 left-6 text-[11px] sm:text-[12px] tracking-widest uppercase text-[#333]">
            Mariana Schunck Palanca
          </div>

          {/* Frase */}
          <div className="absolute top-[4.5rem] left-6 text-[10px] italic text-[#555] max-w-[220px] sm:max-w-[240px] leading-snug">
            “Destino é o que acontece quando aceitamos um bom convite.”
          </div>

          {/* Email */}
          <div className="absolute bottom-6 left-6 text-[9px] text-[#666] tracking-wide break-all">
            marivamossair@gmail.com
          </div>

          {/* Telefone */}
          <div className="absolute bottom-6 right-6 text-[9px] text-[#666] tracking-wide">
            11 99999-9999
          </div>

          {/* Ícones decorativos */}
          <div className="absolute top-4 right-4 flex gap-2 text-rose-800">
            <Wine size={14} />
            <MapPin size={14} />
            <Heart size={14} />
          </div>

          {/* Textura de papel */}
          <div className="absolute inset-0 bg-[url('/texture-paper.png')] opacity-[0.05] pointer-events-none mix-blend-multiply rounded-md" />
        </div>

        {/* Frase final */}
        <p className="mt-12 sm:mt-16 text-sm sm:text-md text-[#e7dddd] tracking-wider italic leading-relaxed px-2">
          Se você disser “sim”, o próximo destino é nosso.
        </p>
      </div>
    </section>
  );
};

export default SectionThree;
