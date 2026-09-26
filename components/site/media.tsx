import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Server-only: renders the image if the file exists in /public,
// otherwise a placeholder that names the file to add.
export function Media({
  src,
  alt,
  sizes,
  priority,
  className,
  imgClassName,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const exists = existsSync(path.join(process.cwd(), "public", src));

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {exists ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imgClassName)} />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center text-muted-foreground">
          <div className="flex flex-col items-center gap-2">
            <ImageIcon className="size-6" strokeWidth={1.5} />
            <span className="text-sm">Add image</span>
            <code className="rounded bg-background/70 px-2 py-0.5 font-mono text-[11px]">public{src}</code>
          </div>
        </div>
      )}
    </div>
  );
}
