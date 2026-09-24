import React from 'react';
import ChevronRightSharp from '@mui/icons-material/ChevronRightSharp';
import useParallax from '../hooks/useParallax';
import mosaicoPrincipal from '../assets/modulo-3/mosaico-principal-mao-elysee.jpg';
import mosaicoSecundaria from '../assets/modulo-3/mosaico-secundaria-still-elysee.jpg';

// MÓDULO 2: Product Details (Description, Images & Info Rows)
export default function ProductDetails() {
  const details = [
    "Descrição",
    "Uso",
    "Ingredientes",
    "Sustentabilidade"
  ];

  const mosaicRef = useParallax();

  return (
    <section className="w-full max-w-[440px] mx-auto bg-[#EEDCD0] relative flex flex-col justify-between p-6 font-sans overflow-hidden">
      {/* 2.1 Top Product Description */}
      <div className="pt-16">
        <p className="text-[36px] leading-[44px] font-normal text-black">
          A expressão máxima da sofisticação feminina. Reconhecido pela intensidade do Chypre, alta fixação e um rastro inesquecível.
        </p>
      </div>

      {/* 2.2 Images Section (Mosaico flutuante: parallax no scroll + flutuação lenta) */}
      <div ref={mosaicRef} className="relative w-full aspect-[392/368] mt-[64px] mb-[64px]">
        {/* Secondary Image */}
        <img src={mosaicoSecundaria} alt="" draggable={false} className="absolute left-0 top-[48.913%] w-[61.22%] aspect-[240/188] object-cover bg-gray-300 rounded-none shadow-none translate-y-[calc(var(--parallax,0px)*0.08)] motion-safe:animate-float" />

        {/* Primary Image */}
        <img src={mosaicoPrincipal} alt="Mão segurando o Elysée Eau de Parfum" draggable={false} className="absolute right-0 top-0 w-[51.02%] aspect-[200/308] object-cover bg-gray-300 rounded-none shadow-[0_32px_80px_-8px_rgba(120,80,70,0.18)] z-10 translate-y-[calc(var(--parallax,0px)*-0.04)] motion-safe:animate-float-slow" />
      </div>

      {/* 2.3 Product Details Rows Container */}
      <div className="flex flex-col w-full pb-8">
        {details.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 border-b border-black cursor-pointer hover:opacity-70 transition-opacity h-[56px]"
          >
            <span className="text-[32px] leading-[40px] font-normal text-black pr-2">
              {item}
            </span>
            <ChevronRightSharp sx={{ fontSize: 28 }} className="text-black flex-shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
