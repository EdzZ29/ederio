"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { Menu, X } from "lucide";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { cn } from "@/lib/utils";

type NavItem = { href: string; label: string };

export function Header({ nav }: { nav: NavItem[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for whichever section sits under the header.
  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [nav]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled ? "border-b bg-background/75 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10">
        <a href="#top" className="text-xl font-bold tracking-tight" aria-label="Edmundo Ederio, back to top">
          ederio<span className="text-primary">.</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm transition-colors",
                    active === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-muted"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeSwitcher />
          <Button asChild size="lg" className="hidden h-10 rounded-full px-5 sm:inline-flex">
            <a href="#contact">
              Contact me <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-lg" className="rounded-full lg:hidden" aria-label={open ? "Close menu" : "Open menu"}>
                <MorphIcon icon={open ? X : Menu} size={20} strokeWidth={1.75} spring="snappy" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" showCloseButton={false} className="px-6 pt-20 pb-10">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {nav.map((item, i) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline gap-4 border-b py-4 text-3xl font-light tracking-tight"
                      >
                        <span className="label text-muted-foreground">0{i + 1}</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
