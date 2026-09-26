"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const PALETTES = [
  { id: "paper", label: "Paper", swatch: "oklch(0.2 0 0)" },
  { id: "ocean", label: "Ocean", swatch: "oklch(0.55 0.16 245)" },
  { id: "forest", label: "Forest", swatch: "oklch(0.55 0.12 155)" },
  { id: "sunset", label: "Sunset", swatch: "oklch(0.64 0.17 45)" },
  { id: "grape", label: "Grape", swatch: "oklch(0.55 0.19 295)" },
] as const;

export type Palette = (typeof PALETTES)[number]["id"];

export const PALETTE_STORAGE_KEY = "palette";

// Runs before first paint (see app/layout.tsx) so the saved palette never flashes.
export const paletteScript = `try{var p=localStorage.getItem("${PALETTE_STORAGE_KEY}");if(p)document.documentElement.dataset.palette=p}catch(e){}`;

type PaletteContextValue = { palette: Palette; setPalette: (p: Palette) => void };

const PaletteContext = createContext<PaletteContextValue | null>(null);

function readPalette(): Palette {
  if (typeof document === "undefined") return "paper";
  const current = document.documentElement.dataset.palette;
  return PALETTES.some((p) => p.id === current) ? (current as Palette) : "paper";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPaletteState] = useState<Palette>(readPalette);

  const setPalette = useCallback((next: Palette) => {
    setPaletteState(next);
    document.documentElement.dataset.palette = next;
    try {
      localStorage.setItem(PALETTE_STORAGE_KEY, next);
    } catch {}
  }, []);

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <PaletteContext.Provider value={{ palette, setPalette }}>{children}</PaletteContext.Provider>
    </NextThemesProvider>
  );
}

export function usePalette() {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error("usePalette must be used inside ThemeProvider");
  return ctx;
}
