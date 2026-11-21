// components/sections/FAQ.tsx
"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import {
  RiSearchLine,
  RiCloseLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiQuestionLine,
  RiMapPinFill,
  RiPriceTag3Fill,
  RiShieldCheckFill,
  RiFlashlightFill,
  RiCustomerServiceFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiBookOpenLine,
  RiLightbulbLine,
  RiSparklingFill,
  RiArrowDownSLine,
} from "@remixicon/react";
import { faqData } from "@/data/faq";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";

/* ============ Category mapping ============ */
const CATEGORIES = [
  { id: "all", label: "All", icon: RiQuestionLine },
  { id: "dispatch", label: "Dispatch", icon: RiMapPinFill, range: [1, 5] },
  { id: "battery", label: "Battery", icon: RiFlashlightFill, range: [6, 10] },
  { id: "mechanical", label: "Mechanical", icon: RiShieldCheckFill, range: [11, 15] },
  { id: "pricing", label: "Pricing", icon: RiPriceTag3Fill, range: [16, 20] },
] as const;

/* ============ JSON-LD Schema ============ */
const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer"},
  })),
});

export default function FAQ() {
  const { city, responseTime, serviceAreas, numberCallLink, whatsappCallLink } =
    SiteConfig;

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>("faq-1");
  const searchInputRef = useRef<HTMLInputElement>(null);

  /* Filter FAQs by category + search */
  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    if (activeCategory !== "all") {
      const category = CATEGORIES.find((c) => c.id === activeCategory);
      if (category && "range" in category) {
        const [min, max] = category.range;
        filtered = filtered.filter((faq) => {
          const num = parseInt(faq.id.replace("faq-", ""), 10);
          return num >= min && num <= max;
        });
      }
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (f) =>
          f.question.toLowerCase().includes(q) ||
          f.answer.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const toggleQuestion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative isolate w-full overflow-hidden bg-background py-10">
      {/* ============================================================
          BACKGROUND — restrained atmosphere
      ============================================================ */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 80% 55% at 50% 25%, black 20%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 55% at 50% 25%, black 20%, transparent 85%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* ============================================================
            HEADER — centered, editorial
        ============================================================ */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-6 text-[2.2rem] font-bold leading-[1.02] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
            Questions,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-primary">answered</span>
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
            .
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Everything about mobile mechanics, dispatch times, and pricing
            across{" "}
            <span className="font-semibold text-foreground">{city}</span>.
          </p>
        </div>

        {/* ============================================================
            SEARCH BAR — primary interaction (hero-scale)
        ============================================================ */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="group relative">
            <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2">
              <RiSearchLine className="size-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 20+ answers…"
              className="h-14 w-full rounded-2xl border border-border bg-card pl-14 pr-14 text-sm font-medium text-foreground shadow-lg shadow-primary/[0.04] outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/50 focus:shadow-xl focus:shadow-primary/[0.08] sm:text-[15px]"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  searchInputRef.current?.focus();
                }}
                className="absolute right-4 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Clear search"
              >
                <RiCloseLine className="size-4" />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-all duration-200",
                    active
                      ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  )}
                >
                  <Icon className="size-3" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            RESULT COUNT
        ============================================================ */}
        <div className="mt-8 flex items-center justify-between border-b border-border/60 pb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {filteredFAQs.length}{" "}
            {filteredFAQs.length === 1 ? "Answer" : "Answers"}
            {activeCategory !== "all" && (
              <>
                {" "}
                ·{" "}
                {CATEGORIES.find((c) => c.id === activeCategory)?.label}
              </>
            )}
          </p>
          {searchQuery && (
            <p className="text-[10px] font-medium text-muted-foreground">
              Searching "<span className="text-foreground">{searchQuery}</span>"
            </p>
          )}
        </div>

        {/* ============================================================
            ACCORDION — inline expand
        ============================================================ */}
        <div className="mt-4 space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, i) => {
              const isOpen = faq.id === expandedId;
              const num = faq.id.replace("faq-", "").padStart(2, "0");

              return (
                <div
                  key={faq.id}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border transition-all duration-300",
                    isOpen
                      ? "border-primary/30 bg-card shadow-lg shadow-primary/[0.05]"
                      : "border-border/70 bg-card/50 hover:border-primary/20 hover:bg-card"
                  )}
                >
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="flex w-full items-start gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    {/* Number badge */}
                    <span
                      className={cn(
                        "flex size-8 shrink-0 items-center justify-center rounded-lg font-serif text-[10px] font-bold italic transition-all",
                        isOpen
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      )}
                    >
                      {num}
                    </span>

                    {/* Question */}
                    <span
                      className={cn(
                        "flex-1 text-sm font-bold leading-snug transition-colors sm:text-base",
                        isOpen ? "text-foreground" : "text-foreground/90 group-hover:text-foreground"
                      )}
                    >
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <span
                      className={cn(
                        "shrink-0 transition-all duration-300",
                        isOpen
                          ? "rotate-180 text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                    >
                      <RiArrowDownSLine className="size-5" />
                    </span>
                  </button>

                  {/* Answer panel */}
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-border/60 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                        {/* Answer label */}
                        <div className="mb-3 flex items-center gap-2">
                          <RiLightbulbLine className="size-3 text-primary" />
                          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                            Answer
                          </span>
                        </div>

                        {/* Answer text */}
                        <p className="max-w-3xl text-sm leading-[1.75] text-foreground/80 sm:text-[15px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/40 px-6 py-16 text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                <RiSearchLine className="size-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                No matches found
              </h3>
              <p className="mt-1.5 max-w-xs text-sm text-muted-foreground">
                Try a different keyword or reset your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-5 inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-4 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:shadow-md hover:shadow-primary/40"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema()),
        }}
      />
    </section>
  );
}