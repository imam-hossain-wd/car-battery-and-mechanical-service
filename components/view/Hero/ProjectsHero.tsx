// components/projects/ProjectsHero.tsx
"use client";

import Link from "next/link";
import {
  RiArrowRightLine,
  RiFolderLine,
  RiMapPinFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiArrowLeftLine,
  RiSparklingFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { projectData } from "@/data/ProjectData";

export default function ProjectsHero() {
  const { city, responseTime, serviceAreas } = SiteConfig;

  const stats = [
    {
      icon: RiFolderLine,
      value: `${projectData.length}`,
      label: "Documented Cases",
    },
    {
      icon: RiMapPinFill,
      value: `${serviceAreas.length}+`,
      label: "Service Areas",
    },
    {
      icon: RiTimeFill,
      value: responseTime.replace(" to ", "–"),
      label: "Avg Response",
    },
    {
      icon: RiShieldCheckFill,
      value: "100%",
      label: "Verified Work",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-background pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24">
      {/* ============================================================
          BACKGROUND
      ============================================================ */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/[0.08] blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
        >
          <RiArrowLeftLine className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          Back to Home
        </Link>

        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/[0.06] px-3 py-1 backdrop-blur-sm">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
              Case Archive · {city}
            </span>
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-[2.4rem] font-bold leading-[0.98] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[4rem]">
          Every repair,{" "}
          <span className="relative inline-block">
            <span className="relative z-10 italic text-primary">
              documented.
            </span>
            <svg
              className="absolute -bottom-1.5 left-0 h-3 w-full text-primary/30"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M3 9C60 3 140 2 297 6"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <br />
          Every driver, remembered.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          A living archive of every mobile repair completed across Dubai roads.
          Filter by service, area, or vehicle — and see the exact work our
          mechanics delivered, on-site, in real time.
        </p>

        {/* Live CTA row */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={SiteConfig.numberCallLink}
            className="group relative inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/40"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <RiSparklingFill className="relative size-4" />
            <span className="relative">Add your case</span>
            <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <span className="text-[11px] font-medium text-muted-foreground sm:ml-2">
            One call · 5–30 min response
          </span>
        </div>

        {/* Stats grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 border-t border-border/60 pt-8 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-card/40 p-4 backdrop-blur-sm sm:p-5"
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                  <Icon className="size-4" />
                </span>
                <span className="text-2xl font-black leading-none tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}