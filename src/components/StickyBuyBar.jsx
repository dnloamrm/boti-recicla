import React, { useEffect, useState } from 'react';
import ChevronRightSharp from '@mui/icons-material/ChevronRightSharp';

// BARRA DE COMPRA FIXA (Sticky CTA, estilo Uber): a barra inteira é o botão.
// Aparece só depois que o botão de sacola do Hero sai da área visível.
// No celular fica presa à base da tela; no desktop, à base da moldura.
export default function StickyBuyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cta = document.querySelector('[data-hero-cta]');
    if (!cta) return;

    // Observa em relação à moldura quando ela tem scroll interno; senão, à janela.
    const frame = cta.closest('[data-scroll-root]');
    const root = frame && frame.scrollHeight > frame.clientHeight ? frame : null;

    const observer = new IntersectionObserver(([entry]) => {
      const rootTop = entry.rootBounds ? entry.rootBounds.top : 0;
      // Visível apenas quando o botão saiu por cima (o usuário já rolou além dele)
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < rootTop);
    }, { root });

    observer.observe(cta);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      inert={!visible}
      aria-hidden={!visible}
      aria-label="Comprar Elysée Eau de Parfum 50ml por R$ 149,90"
      className={`fixed min-[480px]:absolute bottom-0 left-0 right-0 z-50 w-full max-w-[440px] mx-auto bg-black text-white px-6 pt-4 pb-[calc(16px+env(safe-area-inset-bottom))] flex items-center justify-between text-left font-sans hover:bg-neutral-900 transition-[transform,background-color] duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Esquerda: preço */}
      <span className="flex flex-col">
        <span className="text-xl leading-7 font-normal">R$ 149,90</span>
        <span className="text-[14px] leading-[18px] font-normal text-white/70">2x de R$ 74,95</span>
      </span>

      {/* Direita: Comprar + chevron */}
      <span className="flex items-center gap-1 text-[14px] leading-[18px] font-medium">
        Comprar
        <ChevronRightSharp sx={{ fontSize: 28 }} />
      </span>
    </button>
  );
}
