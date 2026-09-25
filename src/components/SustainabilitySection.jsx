import React from 'react';
import useParallax from '../hooks/useParallax';
import bgSustentabilidade from '../assets/mosaico-sustentabilidade/background.jpg';
import thumbRio from '../assets/mosaico-sustentabilidade/thumb-rio.jpg';
import centralRetrato from '../assets/mosaico-sustentabilidade/central-retrato.jpg';
import thumbAraras from '../assets/mosaico-sustentabilidade/thumb-araras.jpg';

// MÓDULO 6: Sustainability Manifesto (Boti Recicla & Mosaico flutuante)
export default function SustainabilitySection() {
  const mosaicRef = useParallax();

  return (
    <section className="w-full max-w-[440px] mx-auto relative flex flex-col font-sans overflow-hidden bg-black">
      
      {/* 6.1 Background (a imagem já vem escurecida no arquivo) */}
      <img src={bgSustentabilidade} alt="" loading="lazy" draggable={false} className="pointer-events-none absolute inset-0 w-full h-full object-cover object-top z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col pt-24 pb-4">
        
        {/* 6.2 Sustainability Header */}
        <div className="px-6 flex flex-col gap-[40px] items-center text-center">
          <div className="flex flex-col gap-3 text-left w-full">
            <h2 className="text-[36px] leading-[44px] font-normal text-white">
              O seu frasco do seu perfume usado ajuda a preservar a Amazônia
            </h2>
            <p className="text-[16px] leading-[24px] font-normal text-white/90">
              Troque seu frasco vazio numa loja Boticário pelo Boti Recicla: ganhe crédito imediato na hora e garanta a reciclagem para proteger a Amazônia.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 w-full">
            <button className="w-[185px] h-[43px] bg-white rounded-full flex items-center justify-center text-black text-[14px] leading-[18px] font-semibold hover:bg-gray-100 transition-colors">
              Resgatar descontos
            </button>
            <a href="#boti-recicla" className="text-[14px] leading-[18px] font-semibold text-white underline">
              Saiba mais sobre Boti Recicla
            </a>
          </div>
        </div>

        {/* 6.3 Images Showcase (Mosaico flutuante: parallax no scroll + flutuação lenta) */}
        <div ref={mosaicRef} className="relative w-full aspect-[440/500] my-16">
          <img src={thumbRio} alt="" loading="lazy" draggable={false} className="pointer-events-none absolute left-6 top-0 w-[33%] aspect-[144/200] object-cover bg-gray-400 rounded-none shadow-none translate-y-[calc(var(--parallax,0px)*0.08)] motion-safe:animate-float" />
          <img src={centralRetrato} alt="" loading="lazy" draggable={false} className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[17.6%] w-[54.5%] aspect-[240/368] object-cover bg-gray-300 rounded-none shadow-2xl z-10 translate-y-[calc(var(--parallax,0px)*-0.04)] motion-safe:animate-float-slow" />
          <img src={thumbAraras} alt="" loading="lazy" draggable={false} className="pointer-events-none absolute right-6 top-[68%] w-[33%] aspect-[144/200] object-cover bg-gray-400 rounded-none shadow-none translate-y-[calc(var(--parallax,0px)*0.12)] motion-safe:animate-float [animation-delay:-3s]" />
        </div>

      </div>
    </section>
  );
}
