import React from 'react';
import FavoriteBorderSharp from '@mui/icons-material/FavoriteBorderSharp';
import ShoppingBagSharp from '@mui/icons-material/ShoppingBagSharp';
import ChevronLeftSharp from '@mui/icons-material/ChevronLeftSharp';
import ChevronRightSharp from '@mui/icons-material/ChevronRightSharp';
import useCarousel from '../hooks/useCarousel';
import eco1 from '../assets/produtos-ecologicos/produto-1-creme-acetinado.png';
import eco2 from '../assets/produtos-ecologicos/produto-2-nativa-spa-ameixa-negra.png';
import eco3 from '../assets/produtos-ecologicos/produto-3-nativa-spa-orquidea-noire.png';

// MÓDULO 7: Ecológicos & Conscientes (Carrossel de produtos)
export default function EcoLineProducts() {
  const ecoProducts = [
    {
      id: 1,
      name: "Creme Acetinado Hidratante Elysée",
      subtitle: "Refil 250 g",
      price: "R$ 89,90",
      image: eco1,
    },
    {
      id: 2,
      name: "Locao Hidratante Nativa SPA Ameixa Negra",
      subtitle: "Refil 400 ml",
      price: "R$ 54,90",
      image: eco2,
    },
    {
      id: 3,
      name: "Sabonete Liquido Corporal Nativa SPA Karité",
      subtitle: "Refil 250 g",
      price: "R$ 49,90",
      image: eco3,
    }
  ];

  const { ref: carouselRef, activeIndex, onScroll, prev, next } = useCarousel();

  return (
    <section className="w-full max-w-[440px] mx-auto bg-[#F8F6F1] relative flex flex-col font-sans overflow-hidden pt-20 pb-8">

      {/* 7.1 Title & Description */}
      <div className="px-6 flex flex-col gap-3">
        <h2 className="text-[36px] leading-[44px] font-normal text-black">
          Ecológicos &amp; conscientes
        </h2>
        <p className="text-[16px] leading-[24px] font-normal text-black">
          Conheça mais produtos com compromisso socioambiental.
        </p>
      </div>

      {/* 7.2 Products Horizontal Carousel */}
      <div ref={carouselRef} onScroll={onScroll} className="w-full px-6 mt-10 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth scroll-pl-6 overflow-y-hidden touch-pan-x touch-pan-y select-none">
        <div className="flex gap-3 w-max">
          {ecoProducts.map((item) => (
            <div
              key={item.id}
              className="w-[240px] h-[440px] flex flex-col flex-shrink-0 snap-start relative rounded-[12px] overflow-hidden"
            >
                            <div className="w-[240px] h-[212px] bg-white relative flex items-center justify-center">
                <img src={item.image} alt={item.name} loading="lazy" draggable={false} className="pointer-events-none w-[152px] h-[152px] object-contain" />
                <button className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center border-[1.3px] border-black/10 shadow-md">
                  <FavoriteBorderSharp sx={{ fontSize: 28 }} className="text-black" />
                </button>
              </div>

              {/* Product Details */}
              <div className="w-[240px] h-[228px] bg-white p-6 relative flex flex-col justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[18px] leading-[120%] font-medium text-[#333333] max-w-[192px] line-clamp-3">
                    {item.name}
                  </h3>
                  <span className="text-[14px] leading-[18px] text-[#727272]">{item.subtitle}</span>
                </div>

                <div className="flex items-center justify-between w-full pt-4">
                  <span className="text-[16px] leading-[120%] font-medium text-[#333333] uppercase">
                    {item.price}
                  </span>

                  <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-neutral-800 transition-colors">
                    <ShoppingBagSharp sx={{ fontSize: 28 }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7.3 Page Controls Pagination */}
      <div className="w-full h-[88px] flex justify-center items-center py-7">
        <div className="w-full h-[32px] px-6 flex items-center justify-between mix-blend-difference">
          <button onClick={prev} aria-label="Anterior" className="w-12 h-12 rounded-full border-[1.3px] border-white/10 flex items-center justify-center text-white">
            <ChevronLeftSharp sx={{ fontSize: 28 }} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-4">
            {ecoProducts.map((_, i) => (
              <span
                key={i}
                className={`w-[5px] h-[5px] rounded-full transition-colors ${
                  i === activeIndex ? 'bg-white border border-white' : 'border border-white'
                }`}
              />
            ))}
          </div>

          <button onClick={next} aria-label="Próximo" className="w-12 h-12 rounded-full border-[1.3px] border-white/10 flex items-center justify-center text-white">
            <ChevronRightSharp sx={{ fontSize: 28 }} />
          </button>
        </div>
      </div>
    </section>
  );
}
