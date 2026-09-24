// Utilitários para efeitos guiados pelo scroll vertical (título do Módulo 4 e mosaicos).
// Funcionam tanto com o scroll da página (celular) quanto com o scroll interno
// da moldura 440x956 (desktop), marcada com data-scroll-root no App.jsx.

// Área visível atual: a moldura, se ela estiver rolando internamente; senão, a janela.
export function getViewport(el) {
  const root = el.closest('[data-scroll-root]');
  if (root && root.scrollHeight > root.clientHeight) {
    const rect = root.getBoundingClientRect();
    return { top: rect.top, height: root.clientHeight };
  }
  return { top: 0, height: window.innerHeight };
}

// Escuta scroll de qualquer elemento (fase de captura) e resize, agrupando em 1 frame.
export function onViewportChange(update) {
  let frame = 0;
  const onChange = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; update(); }); };
  document.addEventListener('scroll', onChange, { capture: true, passive: true });
  window.addEventListener('resize', onChange);
  return () => {
    document.removeEventListener('scroll', onChange, { capture: true });
    window.removeEventListener('resize', onChange);
    cancelAnimationFrame(frame);
  };
}
