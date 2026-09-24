import React from 'react';
import StarSharp from '@mui/icons-material/StarSharp';
import StarHalfSharp from '@mui/icons-material/StarHalfSharp';
import ChevronLeftSharp from '@mui/icons-material/ChevronLeftSharp';
import ChevronRightSharp from '@mui/icons-material/ChevronRightSharp';
import useCarousel from '../hooks/useCarousel';
import avatar1 from '../assets/avatar/avatar-1.png';
import avatar2 from '../assets/avatar/avatar-2.png';
import avatar3 from '../assets/avatar/avatar-3.png';

// MÓDULO 3: Review Summary & User Opinions Sidebar
export default function ReviewsSummary() {
  const reviews = [
    {
      id: 1,
      name: "Amanda S.",
      avatar: avatar1,
      date: "14/05/2026",
      title: "Perfeito para o dia a dia",
      text: "Textura leve, cheiro agradável e a proposta sustentável é incrível.",
    },
    {
      id: 2,
      name: "Carlos M.",
      avatar: avatar2,
      date: "10/05/2026",
      title: "Excelente qualidade",
      text: "Surpreendeu positivamente. A entrega foi rápida e o produto é ótimo.",
    },
    {
      id: 3,
      name: "Beatriz L.",
      avatar: avatar3,
      date: "02/05/2026",
      title: "Amei o refil!",
      text: "Prático de usar e ainda ganho desconto na próxima compra ao reciclar.",
    }
  ];

  const { ref: carouselRef, activeIndex, onScroll, prev, next } = useCarousel();

  // Destaques mais citados nas avaliações (contagem de menções)
  const opinionHighlights = [
    { label: "Alta fixação", count: 88 },
    { label: "Aroma marcante", count: 77 },
    { label: "Sofisticado", count: 75 },
    { label: "Frasco joia", count: 63 },
    { label: "Rastro duradouro", count: 53 },
  ];

  return (
    <section className="w-full max-w-[440px] mx-auto bg-[#EEDCD0] relative flex flex-col justify-between font-sans overflow-hidden">
      
      {/* 3.1 AI Review Summary */}
      <div className="px-6 pt-[80px] flex flex-col gap-6">
        <span className="text-[14px] leading-[18px] text-black">
          Resumo das Avaliações por IA
        </span>
        <h2 className="text-[36px] leading-[44px] font-normal text-black">
          Elogiado pela altíssima fixação e aroma marcante, o Elysée conquista por sua fragrância elegante e embalagem joia, sendo altamente recomendado por 98% dos consumidores.
        </h2>
      </div>

      {/* 3.2 Customer Opinions & Rating */}
      <div className="px-6 mt-[80px] flex flex-col gap-[40px]">
        <div className="flex flex-col gap-6">
          <span className="text-[14px] leading-[18px] text-black">
            Opinião dos Consumidores
          </span>

          {/* Rating Number, Stars & "Ver tudo" */}
          <div className="flex flex-col gap-4">
            <span className="text-[64px] leading-[72px] font-normal text-black">
              4.8
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <StarSharp key={i} sx={{ fontSize: 28 }} className="text-black" />
                ))}
                {/* Half Star representation */}
                <StarHalfSharp sx={{ fontSize: 28 }} className="text-black" />
              </div>
              <a href="#todas-avaliacoes" className="text-[14px] leading-[18px] text-black underline">
                Ver tudo
              </a>
            </div>
          </div>

          {/* Opinion Highlights (Tags) */}
          <ul className="flex flex-wrap gap-[6px]">
            {opinionHighlights.map((tag) => (
              <li
                key={tag.label}
                className="py-1 px-2 border-[1.3px] border-black/10 rounded-full text-[14px] leading-[18px] text-black"
              >
                {tag.label} ({tag.count})
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3.3 User Reviews Carousel */}
      <div ref={carouselRef} onScroll={onScroll} className="w-full px-6 mt-10 mb-8 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth scroll-pl-6">
        <div className="flex gap-3 w-max">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="w-[240px] h-[240px] bg-white rounded-[12px] p-6 flex flex-col justify-between relative flex-shrink-0 snap-start"
            >
              {/* User Header */}
              <div className="flex items-center justify-between">
                {/* Avatar */}
                <img src={rev.avatar} alt="" loading="lazy" draggable={false} className="w-10 h-10 rounded-full object-cover bg-gray-300 flex-shrink-0" />
                <span className="text-[14px] leading-[18px] font-normal text-[#333333] text-right">
                  {rev.name}
                </span>
              </div>

              {/* Review Content */}
              <div className="flex flex-col gap-1 my-auto">
                <h4 className="text-[18px] leading-[120%] font-medium text-[#333333]">
                  {rev.title}
                </h4>
                <p className="text-[14px] leading-[120%] text-[#333333] line-clamp-3">
                  {rev.text}
                </p>
              </div>

              {/* Review Date */}
              <span className="text-[14px] leading-[18px] font-normal text-[#A6A6A6]">
                {rev.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 3.4 Bottom Controls (sobre o fundo rosê) */}
      <div className="w-full flex justify-center items-center pt-4 pb-16">
        <div className="w-full h-[32px] px-6 flex items-center justify-between">
          <button onClick={prev} aria-label="Anterior" className="w-12 h-12 rounded-full border-[1.3px] border-black/10 flex items-center justify-center text-black">
            <ChevronLeftSharp sx={{ fontSize: 28 }} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-4">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`w-[5px] h-[5px] rounded-full transition-colors ${
                  i === activeIndex ? 'bg-black border border-black' : 'border border-black'
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
