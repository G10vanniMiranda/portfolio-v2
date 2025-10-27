"use client";
// Componente de Botão reutilizável
// - Variantes: primary, secondary, ghost
// - Tamanhos: sm, md, lg

import { forwardRef } from "react";
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  "aria-label"?: string;
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps & { href: string };
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonProps & { href?: undefined };

export type UIButtonProps = AnchorProps | ButtonProps;

// Classes base e variações de estilo
const base = "inline-flex items-center rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6]";

const variants = {
  primary: "bg-[#3B82F6] text-white hover:bg-[#2563EB]",
  secondary: "bg-white text-[#111827] hover:bg-neutral-100",
  ghost: "bg-transparent text-white hover:bg-white/10",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2",
  lg: "px-6 py-3",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, UIButtonProps>(
  function Button(props, ref) {
    const { children, className, variant = "primary", size = "md", ...rest } = props as UIButtonProps;
  const cls = cn(base, variants[variant], sizes[size], className);

    // Renderiza <a> quando houver href, caso contrário <button>
    if ("href" in props && props.href) {
      const { href, ...anchorRest } = rest as AnchorProps;
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={cls} {...anchorRest}>
          {children}
        </a>
      );
    }
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={cls} {...(rest as ButtonProps)}>
        {children}
      </button>
    );
  }
);

export default Button;
