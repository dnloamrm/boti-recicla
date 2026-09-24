import React, { useEffect, useRef } from 'react';
import ChevronLeftSharp from '@mui/icons-material/ChevronLeftSharp';
import ChevronRightSharp from '@mui/icons-material/ChevronRightSharp';
import useCarousel from '../hooks/useCarousel';
import { getViewport, onViewportChange } from '../hooks/scrollViewport';
import imgOriginal from '../assets/compare/elysee-original.jpg';
import imgBlanc from '../assets/compare/elysee-blanc.jpg';
import imgSucces from '../assets/compare/elysee-succes.jpg';
import imgNuit from '../assets/compare/elysee-nuit.jpg';

// MÓDULO 4: Product Comparison Sidebar
export default function ProductComparison() {
  const comparisonProducts = [
    { id: 1, name: "Elysée Original", image: imgOriginal },
    { id: 2, name: "Elysée Blanc", image: imgBlanc }, // embalagem dourada
    { id: 3, name: "Elysée Succès", image: imgSucces }, // embalagem preta
    { id: 4, name: "Elysée Nuit", image: imgNuit },
  ];

  // Especificações padronizadas (iguais nos 4 cards)
  const specs = [
    { label: "Concentração", values: ["Eau de Parfum (Alta fixação)"] },
    { label: "Família Olfativa", values: ["Chypre Floral"] },
    { label: "Notas", values: ["Amadeirado Floral"] },
    { label: "Propriedades", values: ["Cruelty Free", "Ingredientes Nobres", "Frasco Joia Lapidado"] },
  ];

  const { ref: carouselRef, activeIndex, onScroll, prev, next } = useCarousel();

  // Título com deslize guiado pelo scroll vertical: começa alinhado à esquerda (24px)
  // e termina com "Descubra" alinhado a 24px da borda direita.
  const sectionRef = useRef(null);
  const titleWrapRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const wrap = titleWrapRef.current;
      const title = titleRef.current;
      if (!section || !wrap || !title) return;

      const view = getViewport(section);
      const top = section.getBoundingClientRect().top - view.top;
      // 0 quando o módulo entra pela base da tela, 1 quando o topo dele chega a 20% da tela
      const progress = Math.min(1, Math.max(0, (view.height - top) / (view.height * 0.8)));
      const available = wrap.clientWidth - 48; // largura útil descontando px-6 dos dois lados
      const distance = Math.max(0, title.scrollWidth - available);
      title.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };

    update();
    return onViewportChange(update);
  }, []);

  return (
    <section ref={sectionRef} className="w-full max-w-[440px] mx-auto bg-[#F8F6F1] relative flex flex-col justify-between font-sans overflow-hidden py-8">
      
      {/* 4.1 Comparison Title */}
      <div ref={titleWrapRef} className="px-6 pt-12 mb-[64px] overflow-hidden">
        <h2 ref={titleRef} className="w-max text-[80px] leading-[100%] font-normal text-black whitespace-nowrap tracking-tight will-change-transform">
          Compare &amp; Descubra
        </h2>
      </div>

      {/* 4.2 Product List Horizontal Carousel */}
      <div ref={carouselRef} onScroll={onScroll} className="w-full px-6 my-auto overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth scroll-pl-6">
        <div className="flex gap-3 w-max">
          {comparisonProducts.map((prod) => (
            <div
              key={prod.id}
              className="w-[220px] bg-[#F8F6F1] flex flex-col items-start flex-shrink-0 snap-start"
            >
              {/* Product Image */}
              <img src={prod.image} alt={prod.name} loading="lazy" draggable={false} className="w-[220px] h-[220px] object-cover mix-blend-multiply" />

              {/* Product Info & CTA */}
              <div className="w-[220px] px-6 pt-6 flex flex-col items-center gap-6 text-center">
                <h3 className="text-[18px] leading-[120%] font-medium text-black tracking-[0.3px] truncate w-full">
                  {prod.name}
                </h3>

                <button className="w-[109px] h-[45px] bg-black rounded-full flex items-center justify-center text-white text-[14px] leading-[18px] font-medium hover:bg-neutral-800 transition-colors">
                  Comprar
                </button>

                <a href="#saiba-mais" className="text-[14px] leading-[18px] font-medium text-black underline tracking-[0.3px]">
                  Saiba mais
                </a>
              </div>

              {/* Product Specs (padronizadas) */}
              <dl className="w-[220px] mt-[64px] px-6 pb-6 flex flex-col gap-4 text-left">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-1">
                    <dt className="text-[14px] leading-[18px] font-medium text-black/60">{spec.label}</dt>
                    {spec.values.map((value) => (
                      <dd key={value} className="text-[14px] leading-[18px] text-black">{value}</dd>
                    ))}
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>

      {/* 4.3 Page Controls Pagination */}
      <div className="w-full h-[88px] flex justify-center items-center py-7">
        <div className="w-full h-[32px] px-6 flex items-center justify-between">
          <button onClick={prev} aria-label="Anterior" className="w-12 h-12 rounded-full border-[1.3px] border-black/10 flex items-center justify-center text-black">
            <ChevronLeftSharp sx={{ fontSize: 28 }} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-4">
            {comparisonProducts.map((_, i) => (
              <span
                key={i}
                className={`w-[5px] h-[5px] rounded-full transition-colors ${
                  i === activeIndex ? 'bg-black border border-black' : 'border border-[#333333]'
                }`}
              />
            ))}
          </div>

          <button onClick={next} aria-label="Próximo" className="w-12 h-12 rounded-full border-[1.3px] border-black/10 flex items-center justify-center text-black">
            <ChevronRightSharp sx={{ fontSize: 28 }} />
          </button>
        </div>
      </div>
    </section>
  );
}
