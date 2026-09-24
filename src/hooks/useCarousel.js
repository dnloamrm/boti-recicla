import { useRef, useState } from 'react';

// Lógica compartilhada dos carrosséis (Módulos 1, 3, 4, 5 e 7)
export default function useCarousel(step = 300) {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => ref.current?.scrollBy({ left: -step, behavior: 'smooth' });
  const next = () => ref.current?.scrollBy({ left: step, behavior: 'smooth' });

  // Descobre o item visível: o card (snap-start) mais próximo da posição atual do scroll
  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.snap-start');
    if (!items.length) return;

    // No fim do scroll, ativa o último dot (os últimos cards não chegam a alinhar à esquerda)
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
      setActiveIndex(items.length - 1);
      return;
    }

    const origin = items[0].offsetLeft;
    let closest = 0;
    items.forEach((item, i) => {
      const distance = Math.abs(item.offsetLeft - origin - el.scrollLeft);
      const best = Math.abs(items[closest].offsetLeft - origin - el.scrollLeft);
      if (distance < best) closest = i;
    });
    setActiveIndex(closest);
  };

  return { ref, activeIndex, onScroll, prev, next };
}
