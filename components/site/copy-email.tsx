"use client";

import { useEffect, useState } from "react";
import { MorphIcon } from "morphicons/react";
import { Check, Copy } from "lucide";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn’t copy. Please select the address instead.");
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon-lg" onClick={copy} aria-label="Copy email address" className="size-12 rounded-xl">
          <MorphIcon icon={copied ? Check : Copy} size={18} strokeWidth={1.75} spring="snappy" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{copied ? "Copied!" : "Copy email"}</TooltipContent>
    </Tooltip>
  );
}
