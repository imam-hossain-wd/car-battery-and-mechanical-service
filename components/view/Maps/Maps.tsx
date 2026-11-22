"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  RiTimeFill,
  RiArrowRightLine,
  RiRoadMapFill,
  RiMapPinFill,
  RiPhoneFill,
  RiExternalLinkLine,
  RiWhatsappFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";
import Logo from "@/components/shared/Logo/Logo";

export default function Maps() {
  const {
    GMB,
    serviceAreas,
    brandName,
    responseTime,
    streetAddress,
    location,
    city,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
  } = SiteConfig;

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const etaRange = useMemo(
    () => responseTime.replace(" to ", "–"),
    [responseTime]
  );

  /* Full address string */
  const fullAddress = `${streetAddress}, ${location}, ${city}`;

  return (
    <section className="relative isolate w-full overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
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
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 85%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ============================================================
            HEADER — editorial with integrated stats
        ============================================================ */}
        <div className="mb-12 grid gap-8 lg:mb-14 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/[0.06] px-3 py-1 backdrop-blur-sm">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                  Live Coverage · {city}
                </span>
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            </div>

            <h2 className="text-[2.4rem] font-bold leading-[0.98] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[3.75rem]">
              We come to{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-primary">you</span>
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
              ,
              <br />
              anywhere in Dubai.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our mobile mechanics reach your coordinates in{" "}
              <span className="font-semibold text-foreground">
                {responseTime}
              </span>{" "}
              — day or night, across{" "}
              <span className="font-semibold text-foreground">
                {serviceAreas.length}+ districts
              </span>
              .
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-3 border-t-2 border-primary/15 pt-5 sm:border-t sm:border-border/60">
              <Stat numeral={`${serviceAreas.length}+`} label="Districts" />
              <Stat numeral={etaRange} label="Avg ETA" accent />
              <Stat numeral="24/7" label="Uptime" />
            </div>
          </div>
        </div>

        {/* ============================================================
            MAP + BUSINESS IDENTITY PANEL
        ============================================================ */}
        <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-xl shadow-primary/[0.05]">
          {/* ---- MAP ---- */}
          <div className="relative aspect-4/3 w-full overflow-hidden bg-muted aspect-[16/15] lg:aspect-[16/8]">
            {!isMapLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted">
                <div className="flex flex-col items-center gap-2.5">
                  <RiRoadMapFill className="size-8 animate-pulse text-primary/60" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Loading map
                  </span>
                </div>
              </div>
            )}
            <iframe
              title={`${brandName} Location Map`}
              src={GMB.embedMap}
              width="100%"
              height="100%"
              className={cn(
                "size-full transition-opacity duration-700",
                isMapLoaded ? "opacity-100" : "opacity-0"
              )}
              style={{
                border: 0,
                filter: "saturate(0.9) contrast(1.02)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsMapLoaded(true)}
            />

            {/* Floating "Get Directions" CTA */}
            <div className="pointer-events-none absolute bottom-4 right-4 z-20">
              <Link
                href={GMB.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/95 px-4 py-2 shadow-lg shadow-black/10 backdrop-blur-md transition-all hover:border-primary hover:bg-background hover:shadow-xl"
              >
                <RiExternalLinkLine className="size-3.5 text-primary transition-transform group-hover:scale-110" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                  Get Directions
                </span>
              </Link>
            </div>
          </div>

          {/* ---- BUSINESS IDENTITY PANEL ---- */}
          <div className="relative border-t border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.03]">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
              {/* LEFT: Logo + Name + Tagline */}
              <div className="relative flex items-center gap-4 border-b border-border/60 p-5 sm:p-6 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-7">
                {/* Logo mark */}
                {/* <div className="relative shrink-0">
             <Logo />
                </div> */}

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-primary">
                    Visit Our Base
                  </p>
                  {/* <h3 className="mt-1 text-base font-bold leading-tight tracking-tight text-foreground sm:text-lg">
                    {brandName}
                  </h3> */}
                  <div className="w-54 h-24 -my-2 -ml-2 flex">
                      <Logo />
                  </div>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                    <RiTimeFill className="size-2.5 text-primary" />
                    Open 24/7 · Live dispatch
                  </p>
                </div>
              </div>

              {/* MIDDLE: Address */}
              <div className="relative border-b border-border/60 p-5 sm:p-6 lg:col-span-4 lg:border-b-0 lg:border-r lg:p-7">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  Address
                </p>
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                    <RiMapPinFill className="size-3.5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug text-foreground">
                      {streetAddress}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {location}, {city}
                    </p>
                    <Link
                      href={GMB.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
                    >
                      View on map
                      <RiArrowRightLine className="size-2.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* RIGHT: Phone */}
              <div className="relative p-5 sm:p-6 lg:col-span-3 lg:p-7">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  Call Us
                </p>
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/15">
                    <RiPhoneFill className="size-3.5" />
                  </span>
                  <div className="min-w-0">
                    <Link
                      href={numberCallLink}
                      className="block text-sm font-bold leading-snug text-foreground transition-colors hover:text-primary"
                    >
                      {displayNumber}
                    </Link>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Available 24/7
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <Link
                        href={numberCallLink}
                        className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
                      >
                        Call now
                        <RiArrowRightLine className="size-2.5" />
                      </Link>
                      <span className="h-3 w-px bg-border" />
                      <Link
                        href={whatsappCallLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
                      >
                        <RiWhatsappFill className="size-2.5" />
                        WhatsApp
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
    SUB-COMPONENTS
============================================================ */

function Stat({
  numeral,
  label,
  accent,
}: {
  numeral: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span
        className={cn(
          "text-2xl font-black leading-none tracking-tight sm:text-3xl",
          accent ? "text-primary" : "text-foreground"
        )}
      >
        {numeral}
      </span>
      <span className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}