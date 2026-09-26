"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { MorphIcon } from "morphicons/react";
import { Monitor, Moon, Sun } from "lucide";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PALETTES, usePalette, type Palette } from "./theme-provider";

const MODES = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "system", label: "System", icon: Monitor },
] as const;

const subscribe = () => () => {};

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { palette, setPalette } = usePalette();
  // The saved theme is only known in the browser; render the neutral icon until then.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const current = MODES.find((m) => m.id === theme) ?? MODES[2];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-lg" aria-label="Change theme" className="rounded-full">
          <MorphIcon icon={mounted ? current.icon : Monitor} size={18} strokeWidth={1.75} spring="snappy" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel className="label text-muted-foreground">Mode</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {MODES.map((m) => (
            <DropdownMenuRadioItem key={m.id} value={m.id}>
              {m.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="label text-muted-foreground">Palette</DropdownMenuLabel>
        <div className="grid grid-cols-5 gap-1.5 px-2 pt-1 pb-2" role="radiogroup" aria-label="Color palette">
          {PALETTES.map((p) => (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={palette === p.id}
              aria-label={p.label}
              title={p.label}
              onClick={() => setPalette(p.id as Palette)}
              className="grid size-7 place-items-center rounded-full ring-offset-2 ring-offset-popover transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring aria-checked:ring-2 aria-checked:ring-foreground/40"
              style={{ background: p.swatch }}
            >
              {palette === p.id && <Check className="size-3.5 text-white" strokeWidth={3} />}
            </button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
