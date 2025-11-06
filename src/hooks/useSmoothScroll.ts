"use client";
import { useCallback } from "react";

// Hook para navegação suave entre âncoras (#id)
// Uso: const handleAnchorClick = useSmoothScroll();
// <a href="#sobre" onClick={handleAnchorClick}>Sobre</a>
export function useSmoothScroll() {
  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute("href") || "";
      if (!href.startsWith("#")) return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      // Scroll suave até a seção
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Atualiza a URL sem recarregar
      history.pushState(null, "", href);
      // Move foco para acessibilidade
      (el as HTMLElement).tabIndex = -1;
      (el as HTMLElement).focus({ preventScroll: true });
      // Remove tabindex após foco
      setTimeout(() => {
        (el as HTMLElement).tabIndex = 0;
      }, 1000);
    },
    []
  );

  return handleAnchorClick;
}
