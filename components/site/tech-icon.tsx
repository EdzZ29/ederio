import Image from "next/image";
import { cn } from "@/lib/utils";

// Logos drawn in plain black; flip them so they stay visible in dark mode.
const MONO = new Set(["expo.svg", "prisma.svg", "vercel.svg", "render.svg", "github.svg"]);

export function TechIcon({ icon, size = 22, className }: { icon: string; size?: number; className?: string }) {
  return (
    <Image
      src={`/icons/${icon}`}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className={cn(MONO.has(icon) && "dark:invert", className)}
    />
  );
}
