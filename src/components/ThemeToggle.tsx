"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const current = (resolvedTheme ?? theme) as "light" | "dark" | undefined;

  const toggle = () => {
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 transition-colors"
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      {current === "dark" ? "Light" : "Dark"}
    </button>
  );
}
