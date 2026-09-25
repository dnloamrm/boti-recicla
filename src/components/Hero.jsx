import React from 'react';
import MenuSharp from '@mui/icons-material/MenuSharp';
import SearchSharp from '@mui/icons-material/SearchSharp';
import ShoppingBagSharp from '@mui/icons-material/ShoppingBagSharp';
import StarSharp from '@mui/icons-material/StarSharp';
import ChevronRightSharp from '@mui/icons-material/ChevronRightSharp';
import ChevronLeftSharp from '@mui/icons-material/ChevronLeftSharp';
import useCarousel from '../hooks/useCarousel';
import logoBoticario from '../assets/logo-o-boticario.svg';
import hero1 from '../assets/hero/hero-1-ecommerce.jpg';
import hero2 from '../assets/hero/hero-2-editorial-peonias.jpg';
import hero3 from '../assets/hero/hero-3-editorial-movimento.jpg';
import hero4 from '../assets/hero/hero-4-editorial-petalas.jpg';

// MÓDULO 1: Hero (Header, Product Info & Showcase)
export default function Hero() {
  const showcaseSlides = [hero1, hero2, hero3, hero4];
  const { ref: carouselRef, activeIndex, onScroll, prev, next } = useCarousel();

  return (
    <section className="w-full bg-[#F8F6F1] flex flex-col font-sans text-black">
      {/* 1.1 Header */}
      <header className="w-full flex flex-col">
        {/* System Bar Space */}
        <div className="h-[52px] w-full" />

        {/* Header Navigation */}
        <div className="flex items-center justify-between px-6 py-6 h-[72px]">
          <div className="flex items-center gap-[20px]">
            <button className="p-0 text-black">
              <MenuSharp sx={{ fontSize: 28 }} />
            </button>
            <img src={logoBoticario} alt="O Boticário" className="h-[20px] w-auto" />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4 relative">
            <button className="text-black">
              <SearchSharp sx={{ fontSize: 28 }} />
            </button>
            <div className="relative">
              <button className="text-black">
                <ShoppingBagSharp sx={{ fontSize: 28 }} />
              </button>
              {/* Cart Badge */}
              <span className="absolute -top-1 -right-2 bg-black border-2 border-white text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
                1
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 1.2 Product Detail Section */}
      <div className="flex flex-col px-6 py-3 gap-3">
        <div className="flex justify-between items-start gap-4">
          <h1 className="text-[36px] leading-[44px] font-normal text-black">
            Elysée Eau de Parfum 50ml
          </h1>
          <div className="flex flex-col items-end text-right shrink-0 whitespace-nowrap">
            <span className="text-xl leading-7 font-normal text-black">R$ 149,90</span>
            <span className="text-[14px] leading-[18px] font-normal text-[#727272]">
              2x de R$ 74,95
            </span>
          </div>
        </div>
      </div>

      {/* 1.3 Tags and Reviews */}
      <div className="flex flex-col px-6 gap-6 mt-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Tags */}
          <div className="flex items-center gap-3">
            <span className="py-1 px-2 border-[1.3px] border-black/10 rounded-full text-[14px] leading-[18px] text-black">
              Refil
            </span>
            <span className="py-1 px-2 border-[1.3px] border-black/10 rounded-full text-[14px] leading-[18px] text-black">
              Vegano
            </span>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-3">
            <span className="text-[14px] leading-[18px] text-black">Avaliação</span>
            <div className="bg-black rounded-full px-2 py-[2px] flex items-center gap-1">
              <StarSharp sx={{ fontSize: 17 }} className="text-white" />
              <span className="text-[14px] leading-[18px] text-white">4.8</span>
              <ChevronRightSharp sx={{ fontSize: 28 }} className="text-white" />
            </div>
          </div>
        </div>

        {/* Delivery & Discount Links */}
        <div className="flex items-center gap-2 text-[14px] leading-[18px]">
          <span className="border-b border-black pb-[1px] cursor-pointer">
            Frete Grátis
          </span>
          <span>•</span>
          <span className="border-b border-black pb-[1px] cursor-pointer">
            10% OFF na Reciclagem
          </span>
        </div>
      </div>

      {/* 1.4 Product Showcase Section — imagem 4:5 com sacola, setas e dots sobrepostos */}
      <div className="relative w-full mt-[40px] bg-[#F8F6F1]">
        {/* Showcase Images — carrossel de slides em largura total */}
        <div ref={carouselRef} onScroll={onScroll} className="w-full aspect-[4/5] bg-[#F8F6F1] overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth flex gap-0">
          {showcaseSlides.map((slide, i) => (
            // Foto 1: o branco do arquivo some no areia via multiply. O fundo fica no próprio wrapper
            // (isolate) porque o blend não enxerga o fundo do container de scroll no Safari/Chrome com GPU.
            <div key={slide} className={`w-full h-full flex-shrink-0 snap-start ${i === 0 ? 'bg-[#F8F6F1] isolate' : 'bg-gray-300'}`}>
              <img
                src={slide}
                alt={`Elysée Eau de Parfum 50ml — foto ${i + 1} de ${showcaseSlides.length}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable={false}
                className={`w-full h-full object-cover ${i === 0 ? 'mix-blend-multiply' : ''}`}
              />
            </div>
          ))}
        </div>

        {/* Floating Action CTA Button */}
        <button data-hero-cta aria-label="Adicionar à sacola" className="absolute top-6 right-6 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white shadow-md z-10">
          <ShoppingBagSharp sx={{ fontSize: 28 }} />
        </button>

        {/* Carousel Controls (sobre a imagem; a barra não bloqueia o arraste, só os botões são clicáveis) */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-[88px] py-7 px-6 flex items-center justify-between pointer-events-none">
          <button onClick={prev} aria-label="Anterior" className="pointer-events-auto w-12 h-12 rounded-full border-[1.3px] border-black/10 flex items-center justify-center text-black">
            <ChevronLeftSharp sx={{ fontSize: 28 }} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-4">
            {showcaseSlides.map((_, i) => (
              <span
                key={i}
                className={`w-[5px] h-[5px] rounded-full transition-colors ${
                  i === activeIndex ? 'bg-black border border-black' : 'border border-[#333333]'
                }`}
              />
            ))}
          </div>

          <button onClick={next} aria-label="Próximo" className="pointer-events-auto w-12 h-12 rounded-full border-[1.3px] border-black/10 flex items-center justify-center text-black">
            <ChevronRightSharp sx={{ fontSize: 28 }} />
          </button>
        </div>
      </div>
    </section>
  );
}
