import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Renders the image, or a placeholder when no src is set in app/data.ts.
// No filesystem checks: Cloudflare renders without access to /public on disk.
export function Media({
  src,
  alt,
  sizes,
  priority,
  className,
  imgClassName,
}: {
  src?: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imgClassName)} />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center text-muted-foreground">
          <div className="flex flex-col items-center gap-2">
            <ImageIcon className="size-6" strokeWidth={1.5} />
            <span className="text-sm">Screenshot coming soon</span>
          </div>
        </div>
      )}
    </div>
  );
}
