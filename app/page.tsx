import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, GraduationCap, Mail } from "lucide-react";
import { MagneticScatterText } from "@/components/rareui/MagneticScatterText";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, TikTokIcon } from "@/components/site/brand-icons";
import { CopyEmail } from "@/components/site/copy-email";
import { Header } from "@/components/site/header";
import { Media } from "@/components/site/media";
import { ProjectBuilder } from "@/components/site/project-builder";
import { Reveal } from "@/components/site/reveal";
import { ScrollTop } from "@/components/site/scroll-top";
import { TechIcon } from "@/components/site/tech-icon";
import {
  about,
  buildFeatures,
  buildLayers,
  capabilities,
  education,
  experience,
  faqs,
  heroStats,
  marquee,
  nav,
  profile,
  projects,
  projectTypes,
  socials,
  stack,
  timelines,
} from "./data";

const socialLinks = [
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  { href: socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: socials.github, label: "GitHub", Icon: GitHubIcon },
  { href: socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: socials.tiktok, label: "TikTok", Icon: TikTokIcon },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header nav={nav} />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Build />
        <Skills />
        <Projects />
      </main>
      <Contact />
      <ScrollTop />
    </>
  );
}

/* ------------------------------------------------------------------ */

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 md:px-10 ${className}`}>{children}</div>;
}

function SectionHeading({ n, label, title, aside }: { n: string; label: string; title: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="label flex items-center gap-4 text-muted-foreground">
          <span>{n}</span>
          <span className="h-px w-10 bg-border" aria-hidden />
          <span>{label}</span>
        </div>
        <h2 className="display mt-6 text-[clamp(2.75rem,7vw,5.25rem)]">{title}</h2>
      </div>
      {aside && <div className="max-w-sm text-muted-foreground md:pb-2 md:text-right">{aside}</div>}
    </Reveal>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[min(100svh,1080px)] flex-col pt-24 pb-8">
      {/* Vertical rail, as on the original site */}
      <div className="label pointer-events-none absolute top-28 bottom-8 left-6 hidden flex-col items-center gap-6 text-muted-foreground xl:flex" aria-hidden>
        <span className="[writing-mode:vertical-rl] rotate-180">{profile.role}</span>
        <span className="w-px flex-1 bg-border" />
        <span className="[writing-mode:vertical-rl] rotate-180">2026</span>
      </div>

      <Container className="flex flex-1 flex-col">
        <div className="label flex items-center justify-between border-b pb-5 text-muted-foreground">
          <span>{profile.name}</span>
          {profile.available && (
            <span className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for work
            </span>
          )}
        </div>

        <div className="grid flex-1 items-center gap-10 py-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h1 className="sr-only">
              Hello, I’m {profile.name}, a {profile.role}
            </h1>
            <MagneticScatterText text="Hello" className="display text-[clamp(6rem,22vw,17rem)] leading-[0.85]" />
          </div>
          <div className="flex flex-col gap-6 md:items-end md:text-right">
            <p className="max-w-md text-xl leading-snug font-light text-muted-foreground md:text-2xl">
              It’s {profile.name}, a{" "}
              <em className="font-serif text-[1.15em] text-foreground">full-stack & mobile app developer</em> building
              web apps, APIs and mobile apps end to end.
            </p>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <Button asChild size="lg" className="h-11 rounded-full px-6">
                <a href="#projects">
                  See selected work <ArrowUpRight data-icon="inline-end" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-11 rounded-full px-6">
                <a href={profile.resume} download>
                  <Download data-icon="inline-start" /> Résumé
                </a>
              </Button>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t pt-8 md:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-2">
              <dt className="label text-muted-foreground">{s.label}</dt>
              <dd className="text-3xl font-light tracking-tight md:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        <a href="#about" className="mt-6 hidden items-center gap-1.5 self-end text-sm text-muted-foreground hover:text-foreground md:inline-flex">
          Scroll down <ArrowDown className="size-3.5 animate-bounce" />
        </a>
      </Container>
    </section>
  );
}

function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden bg-(--band) py-5 text-(--band-foreground)" aria-label={marquee.join(". ")}>
      <div className="flex w-max animate-marquee items-center gap-12 pr-12 hover:[animation-play-state:paused]" aria-hidden>
        {[...items, ...items].map((m, i) => (
          <span key={i} className="flex items-center gap-12 text-lg font-semibold tracking-tight whitespace-nowrap md:text-2xl">
            {m}
            <span className="size-1.5 bg-current opacity-50" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------- About --------------------------------- */

function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="label flex items-center gap-4 text-muted-foreground">
                <span>01</span>
                <span className="h-px w-10 bg-border" aria-hidden />
                <span>About me</span>
              </div>
              <h2 className="display mt-6 flex items-end text-[clamp(2.75rem,7vw,5.25rem)]">
                Nice to meet you.
                <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-caret bg-foreground" aria-hidden />
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5 leading-relaxed text-muted-foreground">
              {about.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-10 grid max-w-xl gap-6 border-y py-6 sm:grid-cols-3">
                <div>
                  <dt className="label text-muted-foreground">Phone</dt>
                  <dd className="mt-2">
                    <a href={`tel:${profile.phone}`} className="hover:text-primary">
                      {profile.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label text-muted-foreground">Email</dt>
                  <dd className="mt-2 break-all">
                    <a href={`mailto:${profile.email}`} className="hover:text-primary">
                      {profile.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label text-muted-foreground">Based in</dt>
                  <dd className="mt-2">{profile.location}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href="#contact" className="rule-link text-xl font-light hover:text-primary">
                  Get in touch
                </a>
                <ul className="flex items-center gap-1">
                  {socialLinks.map(({ href, label, Icon }) => (
                    <li key={label}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer"
                            aria-label={label}
                            className="grid size-10 place-items-center rounded-full text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                          >
                            <Icon className="size-[18px]" />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>{label}</TooltipContent>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild size="lg" className="mt-8 h-12 rounded-xl px-6">
                <a href={profile.resume} download>
                  <Download data-icon="inline-start" /> Download Resume
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <Media
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] rounded-2xl"
              imgClassName="object-top"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- Experience ------------------------------- */

function Experience() {
  return (
    <section id="experience" className="border-y bg-card py-20 md:py-28">
      <Container>
        <SectionHeading n="02" label="Experience & Education" title="Where I’ve been" />
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <h3 className="label mb-2 text-muted-foreground">Experience</h3>
            <ol>
              {experience.map((e, i) => (
                <Reveal key={e.role} delay={i * 0.05}>
                  <li className="group grid gap-3 border-t py-7 md:grid-cols-[170px_1fr] md:gap-8">
                    <div className="flex flex-wrap items-start gap-2 md:flex-col">
                      <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                      {e.badge && (
                        <Badge variant="secondary" className="rounded-full">
                          {e.badge}
                        </Badge>
                      )}
                    </div>
                    <div>
                      <h4 className="text-xl font-normal tracking-tight">{e.role}</h4>
                      <p className="mt-1 font-medium">
                        {e.companyUrl ? (
                          <a href={e.companyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                            {e.company === "BizFrend" ? (
                              <span className="text-lg">
                                <span className="font-extrabold tracking-tighter">Biz</span>
                                <span className="font-extralight">FREND</span>
                              </span>
                            ) : (
                              e.company
                            )}
                            <ArrowUpRight className="size-3.5 text-muted-foreground" />
                          </a>
                        ) : (
                          e.company
                        )}
                      </p>
                      {e.note && <p className="text-sm text-muted-foreground">{e.note}</p>}
                      {e.summary && <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{e.summary}</p>}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-4">
            <h3 className="label mb-2 text-muted-foreground">Education</h3>
            <ol className="space-y-4 border-t pt-7">
              {education.map((ed, i) => (
                <Reveal key={ed.title} delay={i * 0.05}>
                  <li className="flex gap-4 rounded-xl border bg-background p-5">
                    {ed.logo ? (
                      <span className="flex w-16 shrink-0 justify-center">
                        <Image
                          src={ed.logo}
                          alt={`${ed.school.split(" – ")[0]} seal`}
                          width={64}
                          height={90}
                          className="h-[72px] w-auto object-contain"
                        />
                      </span>
                    ) : (
                      <span className="grid size-16 shrink-0 place-items-center rounded-xl border bg-card">
                        <GraduationCap className="size-6 text-muted-foreground" strokeWidth={1.5} aria-hidden />
                      </span>
                    )}
                    <div className="min-w-0">
                      <span className="font-mono text-xs text-muted-foreground">{ed.period}</span>
                      <h4 className="mt-1.5 text-lg leading-snug tracking-tight">{ed.title}</h4>
                      <p className="mt-1 text-sm font-medium">{ed.school}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{ed.note}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Projects -------------------------------- */

function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          n="05"
          label="Portfolio"
          title="Selected work"
          aside={
            <>
              Recent full-stack and mobile work. More code lives on my{" "}
              <a href={socials.github} target="_blank" rel="noreferrer" className="rule-link text-foreground hover:text-primary">
                GitHub
              </a>
              .
            </>
          }
        />
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <article className="group">
                <Media
                  src={p.image}
                  alt={`${p.title} preview`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="aspect-[16/10] rounded-2xl"
                  imgClassName="object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="mt-5 flex items-baseline justify-between gap-3">
                  <h3 className="text-xl tracking-tight">{p.title}</h3>
                  {p.year && <span className="shrink-0 font-mono text-xs text-muted-foreground">{p.year}</span>}
                </div>
                <p className="label mt-1 text-primary">{p.type}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li key={t}>
                      <Badge variant="outline" className="rounded-full font-normal">
                        {t}
                      </Badge>
                    </li>
                  ))}
                </ul>
                {p.link && (
                  <a href={p.link.href} target="_blank" rel="noreferrer" className="rule-link mt-4 inline-flex items-center gap-1 text-sm">
                    {p.link.label} <ArrowUpRight className="size-3.5" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        <Button asChild variant="outline" size="lg" className="mt-14 h-12 rounded-xl px-6">
          <a href={socials.github} target="_blank" rel="noreferrer">
            <GitHubIcon className="size-4" /> More on GitHub <ArrowUpRight data-icon="inline-end" />
          </a>
        </Button>
      </Container>
    </section>
  );
}

/* --------------------------------- Skills --------------------------------- */

function Skills() {
  return (
    <section id="skills" className="border-y bg-card py-20 md:py-28">
      <Container>
        <SectionHeading
          n="04"
          label="Skills & Toolkit"
          title="What I do & use"
          aside="The stack I use to ship web apps, mobile apps and the APIs and databases behind them."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className="h-full bg-background">
              <div className="h-full p-7">
                <span className="label text-primary">0{i + 1}</span>
                <h3 className="mt-4 text-2xl font-light tracking-tight">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 divide-y border-y">
          {stack.map((g) => (
            <div key={g.group} className="grid gap-5 py-7 md:grid-cols-[200px_1fr] md:items-center">
              <h3 className="label text-muted-foreground">{g.group}</h3>
              <ul className="flex flex-wrap gap-3">
                {g.items.map((t) => (
                  <li
                    key={t.name}
                    className="flex items-center gap-2.5 rounded-xl border bg-background py-2 pr-4 pl-2 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid size-9 place-items-center rounded-lg bg-card">
                      <TechIcon icon={t.icon} />
                    </span>
                    <span className="text-sm">{t.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------- Build ---------------------------------- */

function Build() {
  return (
    <section id="build" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          n="03"
          label="Start a project"
          title={
            <>
              Let’s plan <em className="font-serif font-normal">your</em> build.
            </>
          }
          aside="Pick a frontend, backend and database, and see how it fits together. Send me the brief in one click and I’ll reply with a plan."
        />
        <ProjectBuilder
          email={profile.email}
          projectTypes={projectTypes}
          layers={buildLayers}
          features={buildFeatures}
          timelines={timelines}
        />

        <div className="mt-20 grid gap-8 border-t pt-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <h3 className="text-3xl font-light tracking-tight">Questions clients ask</h3>
            <p className="mt-3 text-sm text-muted-foreground">Frontend, backend and databases in plain language.</p>
          </div>
          <Accordion type="single" collapsible defaultValue="faq-0">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger className="py-5 text-base font-normal md:text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="max-w-2xl leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Contact --------------------------------- */

function Contact() {
  return (
    <footer id="contact" className="border-t bg-card pt-20 pb-10 md:pt-28">
      <Container>
        <div className="label flex items-center gap-4 text-muted-foreground">
          <span>06</span>
          <span className="h-px w-10 bg-border" aria-hidden />
          <span>Contact</span>
        </div>
        <h2 className="display mt-6 max-w-4xl text-[clamp(3rem,8vw,6.5rem)]">
          Let’s build something <em className="font-serif font-normal">together.</em>
        </h2>
        <p className="mt-8 max-w-lg text-lg text-muted-foreground">
          Feel free to reach out if you’re looking for a full-stack or mobile developer, have a question, or just want to connect.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rule-link text-[clamp(1.75rem,5vw,3.75rem)] font-extralight tracking-tight break-all hover:text-primary"
          >
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.slice(1).map(({ href, label }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="hover:text-foreground">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
