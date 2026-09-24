import { useEffect, useRef } from 'react';
import { getViewport, onViewportChange } from './scrollViewport';

// Parallax leve dos mosaicos de fotos (Módulos 2 e 6).
// Publica em --parallax a distância (px) entre o centro do bloco e o centro da área visível;
// cada foto multiplica esse valor por um fator diferente em translate-y.
export default function useParallax() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const update = () => {
      const view = getViewport(el);
      const rect = el.getBoundingClientRect();
      const offset = rect.top + rect.height / 2 - (view.top + view.height / 2);
      const clamped = Math.max(-view.height, Math.min(view.height, offset));
      el.style.setProperty('--parallax', `${Math.round(clamped)}px`);
    };

    update();
    return onViewportChange(update);
  }, []);

  return ref;
}
