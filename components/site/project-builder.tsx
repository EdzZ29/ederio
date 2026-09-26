"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MorphIcon } from "morphicons/react";
import { Check, Copy } from "lucide";
import { Database, HelpCircle, MonitorSmartphone, Send, Server, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { AnimatedTabs } from "@/components/rareui/AnimatedTab";
import { TechIcon } from "@/components/site/tech-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { BuildOption } from "@/app/data";
import { cn } from "@/lib/utils";

type LayerId = "frontend" | "backend" | "database";
type Layer = { id: LayerId; label: string; question: string; options: BuildOption[] };

const UNSURE = "unsure";

const LAYER_META: Record<LayerId, { icon: typeof Server; node: string; link?: string }> = {
  frontend: { icon: MonitorSmartphone, node: "Client", link: "HTTPS · REST / JSON" },
  backend: { icon: Server, node: "API & logic", link: "SQL · migrations" },
  database: { icon: Database, node: "Data" },
};

export function ProjectBuilder({
  email,
  projectTypes,
  layers,
  features,
  timelines,
}: {
  email: string;
  projectTypes: string[];
  layers: Layer[];
  features: string[];
  timelines: string[];
}) {
  const [type, setType] = useState("Web App");
  const [tab, setTab] = useState<LayerId>("frontend");
  const [picks, setPicks] = useState<Record<LayerId, string>>({
    frontend: "react",
    backend: "nest",
    database: "postgres",
  });
  const [chosen, setChosen] = useState<string[]>(["Login & user roles", "Admin dashboard"]);
  const [timeline, setTimeline] = useState("1–3 months");
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

  const layer = layers.find((l) => l.id === tab)!;

  function pickType(next: string) {
    if (!next) return;
    setType(next);
    // Keep the frontend choice in line with the platform.
    setPicks((p) => {
      if (next === "Mobile App" || next === "Web + Mobile") return { ...p, frontend: "rn" };
      if (p.frontend === "rn") return { ...p, frontend: "react" };
      return p;
    });
  }

  function optionFor(id: LayerId) {
    const l = layers.find((x) => x.id === id)!;
    return l.options.find((o) => o.id === picks[id]);
  }

  function toggleFeature(f: string) {
    setChosen((c) => (c.includes(f) ? c.filter((x) => x !== f) : [...c, f]));
  }

  const line = (id: LayerId) => optionFor(id)?.name ?? "Not sure, please recommend";
  const frontend = type === "API / Backend" ? "None (API only)" : line("frontend");
  const brief = [
    "Hi Edmundo,",
    "",
    "I'd like to talk about a project.",
    "",
    `Project type: ${type}`,
    `Frontend: ${frontend}`,
    `Backend: ${line("backend")}`,
    `Database: ${line("database")}`,
    `Features: ${chosen.length ? chosen.join(", ") : "Not decided yet"}`,
    `Timeline: ${timeline}`,
    "",
    "Details:",
    details.trim() || "(to discuss)",
    "",
    name.trim() ? `— ${name.trim()}${from.trim() ? ` (${from.trim()})` : ""}` : "",
  ].join("\n");

  const mailto = `mailto:${email}?subject=${encodeURIComponent(`Project inquiry: ${type}`)}&body=${encodeURIComponent(brief)}`;

  async function copyBrief() {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("Brief copied. Paste it anywhere you like.");
    } catch {
      toast.error("Couldn’t copy the brief.");
    }
  }

  const notes = (["frontend", "backend", "database"] as LayerId[])
    .filter((id) => !(id === "frontend" && type === "API / Backend"))
    .map((id) => optionFor(id)?.note ?? `${layers.find((l) => l.id === id)!.label}: I’ll recommend the best fit after a quick call.`);

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      {/* ------- Steps ------- */}
      <div className="space-y-10 lg:col-span-7">
        <Step n={1} title="What are you building?">
          <ToggleGroup
            type="single"
            value={type}
            onValueChange={pickType}
            variant="outline"
            spacing={2}
            className="flex flex-wrap justify-start"
          >
            {projectTypes.map((t) => (
              <ToggleGroupItem
                key={t}
                value={t}
                className="h-10 rounded-full px-4 data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
              >
                {t}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </Step>

        <Step n={2} title="Choose your stack" hint="Tap a layer, then pick what fits. Not sure? I’ll recommend one.">
          <AnimatedTabs
            tabs={layers.map((l) => ({ id: l.id, label: l.label }))}
            activeTab={tab}
            onChange={(id) => setTab(id as LayerId)}
            className="w-fit justify-start shadow-sm"
          />
          <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} className="mt-5">
            <p className="mb-3 text-sm text-muted-foreground">{layer.question}</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                role="radiogroup"
                aria-label={`${layer.label} options`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid gap-3 sm:grid-cols-2"
              >
                {layer.options.map((o) => (
                  <OptionCard
                    key={o.id}
                    selected={picks[tab] === o.id}
                    onSelect={() => setPicks((p) => ({ ...p, [tab]: o.id }))}
                    title={o.name}
                    body={o.pitch}
                    icon={o.icon ? <TechIcon icon={o.icon} size={28} /> : null}
                  />
                ))}
                <OptionCard
                  selected={picks[tab] === UNSURE}
                  onSelect={() => setPicks((p) => ({ ...p, [tab]: UNSURE }))}
                  title="Not sure yet"
                  body="Tell me your goals and I’ll recommend the right tool."
                  icon={<HelpCircle className="size-7 text-muted-foreground" strokeWidth={1.5} />}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </Step>

        <Step n={3} title="Features you need" hint="Pick as many as you like.">
          <div className="flex flex-wrap gap-2">
            {features.map((f) => {
              const on = chosen.includes(f);
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleFeature(f)}
                  className={cn(
                    "inline-flex h-9 items-center gap-1.5 rounded-full border px-3.5 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    on ? "border-primary bg-primary/10 text-foreground" : "text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-4 place-items-center rounded-full border transition-colors",
                      on ? "border-primary bg-primary text-primary-foreground" : "border-input",
                    )}
                  >
                    {on && <CheckMark />}
                  </span>
                  {f}
                </button>
              );
            })}
          </div>
        </Step>

        <Step n={4} title="Timeline & details">
          <ToggleGroup
            type="single"
            value={timeline}
            onValueChange={(v) => v && setTimeline(v)}
            variant="outline"
            spacing={2}
            className="mb-5 flex flex-wrap justify-start"
          >
            {timelines.map((t) => (
              <ToggleGroupItem key={t} value={t} className="h-9 rounded-full px-4 data-[state=on]:bg-foreground data-[state=on]:text-background">
                {t}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="b-name">Your name</Label>
              <Input id="b-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Juan Dela Cruz" className="h-10" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="b-company">Company or email</Label>
              <Input id="b-company" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Optional" className="h-10" />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="b-details">What should it do?</Label>
              <Textarea
                id="b-details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="e.g. A booking app where customers reserve slots and staff manage them from a dashboard."
                className="min-h-24"
              />
            </div>
          </div>
        </Step>
      </div>

      {/* ------- Live brief ------- */}
      <div className="lg:col-span-5">
        <Card className="gap-0 py-0 lg:sticky lg:top-24">
          <CardHeader className="flex flex-row items-center justify-between gap-3 border-b py-4">
            <CardTitle className="label text-muted-foreground">Your project brief</CardTitle>
            <Badge className="rounded-full">{type}</Badge>
          </CardHeader>
          <CardContent className="space-y-6 py-6">
            <ol aria-label="Architecture" className="relative">
              {(["frontend", "backend", "database"] as LayerId[]).map((id) => {
                const meta = LAYER_META[id];
                const Icon = meta.icon;
                const o = optionFor(id);
                const apiOnly = id === "frontend" && type === "API / Backend";
                const value = apiOnly ? "Your apps & integrations" : (o?.name ?? "To recommend");
                return (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => setTab(id)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl border bg-background p-3 text-left transition-colors hover:border-primary/60",
                        tab === id && "border-primary/60",
                      )}
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-muted">
                        {o?.icon && !apiOnly ? (
                          <TechIcon icon={o.icon} />
                        ) : (
                          <Icon className="size-5 text-muted-foreground" strokeWidth={1.5} />
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="label block text-muted-foreground">{meta.node}</span>
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={value}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 6 }}
                            transition={{ duration: 0.18 }}
                            className={cn("block truncate font-medium", !o && !apiOnly && "text-muted-foreground italic")}
                          >
                            {value}
                          </motion.span>
                        </AnimatePresence>
                      </span>
                    </button>
                    {meta.link && (
                      <div className="flex items-center gap-3 py-1.5 pl-8" aria-hidden>
                        <span className="relative h-6 w-px overflow-hidden bg-border">
                          <span className="absolute inset-x-0 top-0 h-2 animate-[flow_1.6s_linear_infinite] bg-primary" />
                        </span>
                        <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">{meta.link}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>

            <div>
              <p className="label mb-2 text-muted-foreground">Features</p>
              {chosen.length ? (
                <div className="flex flex-wrap gap-1.5">
                  {chosen.map((f) => (
                    <Badge key={f} variant="secondary" className="rounded-full font-normal">
                      {f}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">None picked yet.</p>
              )}
            </div>

            <div>
              <p className="label mb-2 flex items-center gap-1.5 text-muted-foreground">
                <Sparkles className="size-3.5" /> How I’d build it
              </p>
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                {notes.map((n) => (
                  <li key={n} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden />
                    {n}
                  </li>
                ))}
                <li className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden />
                  Target timeline: {timeline.toLowerCase()}.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button asChild size="lg" className="h-11 flex-1 rounded-full">
                <a href={mailto}>
                  <Send data-icon="inline-start" /> Send brief
                </a>
              </Button>
              <Button variant="outline" size="lg" onClick={copyBrief} className="h-11 rounded-full px-5">
                <MorphIcon icon={copied ? Check : Copy} size={16} strokeWidth={1.75} spring="snappy" />
                {copied ? "Copied" : "Copy brief"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">Opens your email app with everything above filled in. No sign-up, no forms to wait on.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Step({ n, title, hint, children }: { n: number; title: string; hint?: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-4 flex items-baseline gap-3">
        <span className="label text-primary">0{n}</span>
        <span className="text-xl font-light tracking-tight md:text-2xl">{title}</span>
      </legend>
      {hint && <p className="-mt-2 mb-4 text-sm text-muted-foreground">{hint}</p>}
      {children}
    </fieldset>
  );
}

function OptionCard({
  selected,
  onSelect,
  title,
  body,
  icon,
}: {
  selected: boolean;
  onSelect: () => void;
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        "group relative flex items-start gap-3 rounded-xl border bg-card p-4 text-left transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        selected ? "border-primary shadow-sm ring-1 ring-primary" : "hover:-translate-y-0.5 hover:border-foreground/25",
      )}
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-muted">{icon}</span>
      <span className="min-w-0">
        <span className="block font-medium">{title}</span>
        <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">{body}</span>
      </span>
      <span
        className={cn(
          "absolute top-3 right-3 grid size-5 place-items-center rounded-full border transition-colors",
          selected ? "border-primary bg-primary text-primary-foreground" : "border-input",
        )}
        aria-hidden
      >
        {selected && <CheckMark />}
      </span>
    </button>
  );
}

function CheckMark() {
  return (
    <svg viewBox="0 0 12 12" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M2.5 6.2 5 8.5l4.5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
