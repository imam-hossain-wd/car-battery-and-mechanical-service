"use client";

import { useMemo, useCallback, useEffect, useState } from "react";
import {
  RiStarFill,
  RiVerifiedBadgeFill,
  RiMapPinFill,
  RiUserStarFill,
  RiShieldCheckFill,
  RiArrowRightUpLine,
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "@remixicon/react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Review } from "@/types/review";
import { generatePlaceholderReviews } from "@/data/review";

interface ReviewsProps {
  reviews?: Review[];
  title?: string;
  subtitle?: string;
  featuredIndex?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
}

export default function Reviews({
  reviews = generatePlaceholderReviews(),
  title = "What drivers say after the fix",
  subtitle = "Real experiences from real customers across Dubai — verified, documented, and 100% authentic.",
  featuredIndex = 0,
  autoplay = true,
  autoplayInterval = 5000,
}: ReviewsProps) {
  /* ---- Aggregate stats ---- */
  const stats = useMemo(() => {
    const total = reviews.length;
    const avg = reviews.reduce((a, r) => a + r.rating, 0) / total;
    const fiveStar = reviews.filter((r) => r.rating === 5).length;
    const areas = new Set(reviews.map((r) => r.area)).size;
    const ratingCounts = reviews.reduce(
      (acc, r) => {
        acc[r.rating] = (acc[r.rating] || 0) + 1;
        return acc;
      },
      {} as Record<number, number>
    );
    return { total, avg, fiveStar, areas, ratingCounts };
  }, [reviews]);

  const featured = reviews[featuredIndex] ?? reviews[0];
  const rest = reviews.filter((_, i) => i !== featuredIndex);

  /* ---- Carousel setup ---- */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    const id = setInterval(() => emblaApi.scrollNext(), autoplayInterval);
    return () => clearInterval(id);
  }, [emblaApi, autoplay, autoplayInterval]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        "bg-white dark:bg-background", // ← white by default, token in dark
        "py-10"
      )}
    >
      {/* ============================================================
          BACKGROUND — subtle, light-safe atmosphere
      ============================================================ */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 80% 55% at 50% 30%, black 20%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 55% at 50% 30%, black 20%, transparent 85%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ============================================================
            HEADER — editorial with inline stats
        ============================================================ */}
        <div className="mb-12 grid gap-8 lg:mb-14 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-[2.4rem] font-bold leading-[0.98] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[3.75rem]">
              {title.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-primary">
                  {title.split(" ").slice(2, 4).join(" ")}
                </span>
                <svg
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-primary/30"
                  viewBox="0 0 350 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9C80 3 180 2 347 6"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              {title.split(" ").slice(4).join(" ")}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {subtitle}
            </p>
          </div>

          {/* Right: aggregate rating + distribution (from reference carousel) */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                {/* Average */}
                <div className="flex flex-col">
                  <span className="text-3xl font-black leading-none text-primary">
                    {stats.avg.toFixed(1)}
                  </span>
                  <div className="mt-1.5 flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill
                        key={i}
                        className={cn(
                          "size-3",
                          i < Math.round(stats.avg)
                            ? "text-primary"
                            : "text-border"
                        )}
                      />
                    ))}
                  </div>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {stats.total} reviews
                  </span>
                </div>

                <div className="h-12 w-px bg-border" />

                {/* Distribution — top 3 ratings only */}
                <div className="flex-1 space-y-1">
                  {[5, 4, 3].map((r) => {
                    const count = stats.ratingCounts[r] || 0;
                    const pct = (count / stats.total) * 100;
                    return (
                      <div key={r} className="flex items-center gap-2">
                        <span className="w-3 text-[9px] font-bold text-muted-foreground">
                          {r}
                        </span>
                        <RiStarFill className="size-2.5 text-primary/60" />
                        <div className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                          <div
                            className="h-full rounded-full bg-primary/70"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ============================================================
            CAROUSEL — remaining reviews (Embla from reference)
        ============================================================ */}
        <div className="relative mt-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              {rest.length} more verified voices
            </p>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                onClick={scrollPrev}
                aria-label="Previous review"
                className={cn(
                  "flex size-8 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary",
                  !canPrev && "opacity-50 hover:border-border hover:text-foreground"
                )}
              >
                <RiArrowLeftSLine className="size-4" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next review"
                className={cn(
                  "flex size-8 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary",
                  !canNext && "opacity-50 hover:border-border hover:text-foreground"
                )}
              >
                <RiArrowRightSLine className="size-4" />
              </button>
            </div>
          </div>

          {/* Edge fades */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-8 bg-gradient-to-r from-white to-transparent dark:from-background lg:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-8 bg-gradient-to-l from-white to-transparent dark:from-background lg:block" />

            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex touch-pan-y gap-4">
                {rest.map((review, i) => (
                  <div
                    key={`${review.name}-${i}`}
                    className="min-w-0 flex-shrink-0 flex-grow-0 basis-[280px] sm:basis-1/2 sm:px-0 lg:basis-1/3"
                  >
                    <VoiceCard review={review} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-5 flex justify-center gap-1.5 sm:hidden">
            {rest.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to review ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  selectedIndex === i
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-border hover:bg-muted-foreground/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
    VOICE CARD — compact review card for carousel
============================================================ */
function VoiceCard({ review }: { review: Review }) {
  return (
    <article className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/[0.05]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary ring-1 ring-primary/15">
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <h4 className="truncate text-sm font-bold text-foreground">
                {review.name}
              </h4>
              <RiVerifiedBadgeFill className="size-3 shrink-0 text-primary" />
            </div>
            <p className="mt-0.5 inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
              <RiMapPinFill className="size-2.5 shrink-0 text-primary" />
              <span className="truncate">{review.area}</span>
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <RiStarFill
              key={i}
              className={cn(
                "size-3",
                i < review.rating ? "text-primary" : "text-border"
              )}
            />
          ))}
        </div>

        <blockquote className="mt-3 flex-1">
          <p className="line-clamp-4 text-[13px] leading-relaxed text-foreground/80">
            "{review.text}"
          </p>
        </blockquote>

        {review.service && (
          <div className="mt-3 inline-flex w-fit items-center gap-1 rounded-full border border-primary/20 bg-primary/[0.06] px-2 py-0.5">
            <span className="text-[9px] font-bold uppercase tracking-wider text-primary">
              {review.service}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}