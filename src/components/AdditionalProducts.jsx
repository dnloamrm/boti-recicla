import React from 'react';
import FavoriteBorderSharp from '@mui/icons-material/FavoriteBorderSharp';
import ShoppingBagSharp from '@mui/icons-material/ShoppingBagSharp';
import ChevronLeftSharp from '@mui/icons-material/ChevronLeftSharp';
import ChevronRightSharp from '@mui/icons-material/ChevronRightSharp';
import useCarousel from '../hooks/useCarousel';
import ritual1 from '../assets/complete-seu-ritual/produto-1-creme-acetinado.png';
import ritual2 from '../assets/complete-seu-ritual/produto-2-antitranspirante-aerosol.png';
import ritual3 from '../assets/complete-seu-ritual/produto-3-elysee-succes.png';

// MÓDULO 5: Additional Information / Products Sidebar
export default function AdditionalProducts() {
  const products = [
    {
      id: 1,
      name: "Creme Acetinado Hidratante Elysée",
      subtitle: "Refil 250 g",
      price: "R$ 124,90",
      image: ritual1,
    },
    {
      id: 2,
      name: "Óleo Perfumado Desodorante Corporal Elysée",
      subtitle: "150 ml",
      price: "R$ 79,90",
      image: ritual2,
    },
    {
      id: 3,
      name: "Sabonete Líquido Iluminador Elysée",
      subtitle: "50 ml",
      price: "R$ 279,90",
      image: ritual3,
    }
  ];

  const { ref: carouselRef, activeIndex, onScroll, prev, next } = useCarousel();

  return (
    <section className="w-full max-w-[440px] mx-auto bg-[#EEDCD0] relative flex flex-col justify-between font-sans overflow-hidden py-8">
      
      {/* 5.1 Title & Description Container */}
      <div className="px-6 pt-12 flex flex-col gap-3">
        <h2 className="text-[36px] leading-[44px] font-normal text-black">
          Complete o seu ritual
        </h2>
        <p className="text-[16px] leading-[24px] font-normal text-black">
          Potencie a fixação da sua fragrância com estes cuidados.
        </p>
      </div>

      {/* 5.2 Products Horizontal Scroll */}
      <div ref={carouselRef} onScroll={onScroll} className="w-full px-6 mt-10 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth scroll-pl-6 overflow-y-hidden touch-pan-x touch-pan-y select-none">
        <div className="flex gap-3 w-max">
          {products.map((item) => (
            <div
              key={item.id}
              className="w-[240px] h-[428px] flex flex-col flex-shrink-0 snap-start relative rounded-[12px] overflow-hidden"
            >
              {/* Product Image Container */}
              <div className="w-[240px] h-[200px] bg-white relative flex items-center justify-center">
                                <img src={item.image} alt={item.name} loading="lazy" draggable={false} className="pointer-events-none w-[152px] h-[152px] object-contain" />
                
                {/* Favorite Action Button */}
                <button className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center border-[1.3px] border-black/10 shadow-md">
                  <FavoriteBorderSharp sx={{ fontSize: 28 }} className="text-black" />
                </button>
              </div>

              {/* Product Details Container */}
              <div className="w-[240px] h-[228px] bg-white p-6 relative flex flex-col justify-between">
                {/* Product Name */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-[18px] leading-[120%] font-medium text-[#333333] max-w-[192px] line-clamp-3">
                    {item.name}
                  </h3>
                  <span className="text-[14px] leading-[18px] text-[#727272]">{item.subtitle}</span>
                </div>

                {/* Price and Cart Action */}
                <div className="flex items-center justify-between w-full pt-4">
                  <span className="text-[16px] leading-[120%] font-medium text-[#333333] uppercase">
                    {item.price}
                  </span>

                  {/* Add to Cart Button */}
                  <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-neutral-800 transition-colors">
                    <ShoppingBagSharp sx={{ fontSize: 28 }} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5.3 Page Controls Pagination */}
      <div className="w-full h-[88px] flex justify-center items-center py-7">
        <div className="w-full h-[32px] px-6 flex items-center justify-between mix-blend-difference">
          <button onClick={prev} aria-label="Anterior" className="w-12 h-12 rounded-full border-[1.3px] border-white/10 flex items-center justify-center text-white">
            <ChevronLeftSharp sx={{ fontSize: 28 }} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-4">
            {products.map((_, i) => (
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
