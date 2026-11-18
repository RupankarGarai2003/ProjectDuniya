"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import type { IdeaGroup, Level, Scope } from "@/lib/data/project-ideas";

const levelStyle: Record<Level, string> = {
  Beginner: "bg-emerald-50 text-emerald-700",
  Intermediate: "bg-amber-50 text-amber-700",
  Advanced: "bg-rose-50 text-rose-700",
};

type Props = {
  groups: IdeaGroup[];
  /** Pre-built blog category URLs (built on the server so UTM logic stays in one place). */
  blogUrls: Record<string, string>;
};

/**
 * All ideas are rendered in the initial HTML (crawlers see every one). Filters only
 * hide cards on the client after hydration - they never remove content from the page source.
 */
export default function IdeasExplorer({ groups, blogUrls }: Props) {
  const [q, setQ] = useState("");
  const [level, setLevel] = useState<Level | "All">("All");
  const [scope, setScope] = useState<Scope | "All">("All");

  const term = q.trim().toLowerCase();
  const visible = useMemo(
    () =>
      groups.map((g) => ({
        ...g,
        ideas: g.ideas.filter((i) => {
          if (level !== "All" && i.level !== level) return false;
          if (scope !== "All" && i.scope !== scope) return false;
          if (!term) return true;
          return `${i.title} ${i.summary} ${i.stack.join(" ")}`.toLowerCase().includes(term);
        }),
      })),
    [groups, term, level, scope],
  );
  const shown = visible.reduce((n, g) => n + g.ideas.length, 0);

  const chip = (active: boolean) =>
    `rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
      active ? "border-primary bg-primary text-white" : "border-border bg-white text-navy hover:border-primary"
    }`;

  return (
    <div>
      <div className="sticky top-[72px] z-30 -mx-4 mb-10 border-b border-border bg-background/95 px-4 py-4 backdrop-blur">
        <div className="relative mb-3">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search ideas, e.g. Python, Flutter, dashboard…"
            aria-label="Search project ideas"
            className="w-full rounded-xl border border-border bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground">Level:</span>
          {(["All", "Beginner", "Intermediate", "Advanced"] as const).map((l) => (
            <button key={l} type="button" onClick={() => setLevel(l)} aria-pressed={level === l} className={chip(level === l)}>
              {l}
            </button>
          ))}
          <span className="ml-2 text-xs font-semibold text-muted-foreground">Type:</span>
          {(["All", "Mini", "Final Year"] as const).map((s) => (
            <button key={s} type="button" onClick={() => setScope(s)} aria-pressed={scope === s} className={chip(scope === s)}>
              {s === "All" ? "All" : `${s} project`}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground" aria-live="polite">
            Showing {shown} ideas
          </span>
        </div>
      </div>

      {shown === 0 && (
        <p className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          No ideas match those filters. Try clearing the search, or{" "}
          <Link href="/contact" className="font-semibold text-primary underline">tell us what you need</Link>.
        </p>
      )}

      <div className="space-y-14">
        {visible.map((g) =>
          g.ideas.length === 0 ? null : (
            <section key={g.id} id={g.id} className="scroll-mt-44" aria-labelledby={`h-${g.id}`}>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h2 id={`h-${g.id}`} className="text-xl font-bold text-navy">
                    {g.title} <span className="text-sm font-medium text-muted-foreground">({g.ideas.length})</span>
                  </h2>
                  <p className="text-sm text-muted-foreground">{g.intro}</p>
                </div>
                <a
                  href={blogUrls[g.id]}
                  data-track="ideas_blog_click"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:underline"
                >
                  More {g.title} articles on our blog <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {g.ideas.map((i) => (
                  <li key={i.title} className="flex flex-col rounded-xl border border-border bg-card p-5 transition hover:shadow-md">
                    <h3 className="text-sm font-bold leading-snug text-navy">{i.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{i.summary}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${levelStyle[i.level]}`}>{i.level}</span>
                      <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">{i.scope}</span>
                      {i.stack.map((t) => (
                        <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600">{t}</span>
                      ))}
                    </div>
                    <Link
                      href={`/contact?idea=${encodeURIComponent(i.title)}`}
                      data-track="idea_build_click"
                      className="mt-4 text-xs font-semibold text-primary hover:underline"
                    >
                      Get help building this →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ),
        )}
      </div>
    </div>
  );
}
