"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = stored ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    root.classList.toggle("dark", initial === "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 transition-colors"
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
