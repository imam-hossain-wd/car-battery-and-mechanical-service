"use client";

import Link from "next/link";
import {
    RiArrowRightLine,
    RiPhoneFill,
    RiWhatsappFill,
    RiShieldCheckFill,
    RiTimeFill,
    RiToolsFill,
    RiCheckboxCircleFill,
    RiBatteryChargeFill,
    RiVerifiedBadgeFill,
    RiCustomerServiceFill,
    RiArrowRightUpLine,
    RiFlashlightFill,
    RiSparklingFill,
    RiMoneyDollarCircleFill,
    RiAwardFill,
    RiCalendarCheckFill,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";

/* ============================================================
   TRUST BADGES — right column data
============================================================ */
const TRUST_BADGES = [
    {
        icon: RiFlashlightFill,
        value: "24/7",
        label: "Emergency",
        sublabel: "Always available",
        accent: "from-primary/20 via-primary/10 to-transparent",
    },
    {
        icon: RiTimeFill,
        value: "5–30",
        unit: "min",
        label: "Arrival",
        sublabel: "Rapid response",
        accent: "from-primary/15 via-primary/8 to-transparent",
    },
    {
        icon: RiToolsFill,
        value: "90%",
        label: "Onsite Repairs",
        sublabel: "No towing needed",
        accent: "from-primary/25 via-primary/12 to-transparent",
    },
    {
        icon: RiMoneyDollarCircleFill,
        value: "100%",
        label: "Transparent Pricing",
        sublabel: "No hidden fees",
        accent: "from-primary/18 via-primary/9 to-transparent",
    },
    {
        icon: RiAwardFill,
        value: "2014",
        label: "Certified Since",
        sublabel: "10+ years expertise",
        accent: "from-primary/22 via-primary/11 to-transparent",
    },
    {
        icon: RiVerifiedBadgeFill,
        value: "Certified",
        label: "Mechanics",
        sublabel: "Expert team",
        accent: "from-primary/16 via-primary/8 to-transparent",
    },
];

const TRUST_POINTS = [
    "Available 24/7 across Dubai",
    "No towing required",
    "Transparent upfront pricing",
];

const MICRO_TRUST = [
    { icon: RiShieldCheckFill, text: "No call-out fee" },
    { icon: RiCheckboxCircleFill, text: "Free battery check" },
    { icon: RiCustomerServiceFill, text: "Certified mechanics" },
];

export default function Hero() {
    const {
        displayNumber,
        numberCallLink,
        whatsappCallLink,
        city,
    } = SiteConfig;

    return (
        <section className="relative isolate w-full overflow-hidden bg-background">
            {/* ============================================================
                BACKGROUND ATMOSPHERE — Multi-layer, image-free
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Primary radial glow — top right (behind trust grid) */}
                <div className="absolute -right-[10%] -top-[15%] h-[650px] w-[650px] rounded-full bg-primary/[0.10] blur-[160px]" />

                {/* Secondary glow — bottom left */}
                <div className="absolute -bottom-[25%] -left-[8%] h-[450px] w-[450px] rounded-full bg-primary/[0.06] blur-[140px]" />

                {/* Center subtle glow */}
                <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[120px]" />

                {/* Fine grid lines with radial mask */}
                <div
                    className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                        backgroundSize: "56px 56px",
                        maskImage:
                            "radial-gradient(ellipse 70% 65% at 50% 40%, black 10%, transparent 85%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 65% at 50% 40%, black 10%, transparent 85%)",
                    }}
                />

                {/* Vertical divider — visual split between text & trust */}
                <div className="absolute left-1/2 top-[15%] hidden h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/10 to-transparent lg:block" />

                {/* Corner brackets — subtle framing */}
                <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-primary/20" />
                <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-primary/20" />
            </div>

            {/* ============================================================
                MAIN CONTENT — Split layout
            ============================================================ */}
            <div className="relative px-5 pb-16 pt-14 sm:pt-20 lg:pb-24 lg:pt-24">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-12">

                    {/* =====================================================
                        LEFT COLUMN — Text content (7/12)
                    ===================================================== */}
                    <div className="relative lg:col-span-7">
                        {/* Live badge pill */}
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.06] py-1 pl-1 pr-3.5 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-primary/[0.10]">
                            <span className="flex size-6 items-center justify-center rounded-full bg-primary/15">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                                </span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[11px]">
                                Live Dispatch · {city}
                            </span>
                            <span className="h-3 w-px bg-primary/30" />
                            <span className="text-[10px] font-semibold text-primary/80 sm:text-[11px]">
                                Open Now
                            </span>
                        </div>

                        {/* HEADLINE — massive editorial type */}
                        <h1 className="mt-7 text-[2.6rem] font-bold leading-[1.02] -tracking-[0.04em] text-foreground sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]">
                            <span className="block">24/7 Car Battery</span>
                            <span className="block">
                                &{" "}
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-br from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                                        Auto Repair
                                    </span>
                                    {/* Animated SVG underline */}
                                    <svg
                                        className="absolute -bottom-1 left-0 h-2.5 w-full text-primary/40 sm:-bottom-2 sm:h-3"
                                        viewBox="0 0 300 12"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M2 9C60 3 140 2 298 6"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </span>
                            <span className="mt-1 block text-muted-foreground/70">
                                Mobile Mechanic in Dubai
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                            Certified technicians arrive at your doorstep in{" "}
                            <span className="font-semibold text-foreground">
                                5–30 minutes
                            </span>
                            . Based in{" "}
                            <span className="font-semibold text-foreground">
                                Jebel Ali
                            </span>
                            , serving all of Dubai with genuine parts and upfront
                            pricing.
                        </p>

                        {/* Trust points — inline badges */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {TRUST_POINTS.map((point, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-foreground/90 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-primary/[0.04]"
                                >
                                    <RiCheckboxCircleFill className="size-3 shrink-0 text-primary" />
                                    {point}
                                </span>
                            ))}
                        </div>

                        {/* CTA GROUP — left-aligned on desktop */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            {/* Primary CTA with shine sweep */}
                            <Link
                                href={numberCallLink}
                                className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary px-7 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <RiPhoneFill className="relative size-4" />
                                <span className="relative text-base font-semibold tracking-tight">
                                    {displayNumber}
                                </span>
                                <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            {/* Secondary CTA */}
                            <Link
                                href={whatsappCallLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border-2 border-border bg-background/60 px-7 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary"
                            >
                                <RiWhatsappFill className="size-4 transition-transform group-hover:scale-110" />
                                WhatsApp Us
                            </Link>
                        </div>

                        {/* Micro trust row */}
                        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium text-muted-foreground">
                            {MICRO_TRUST.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-1.5"
                                    >
                                        <Icon className="size-3.5 text-primary" />
                                        {item.text}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    {/* =====================================================
                        RIGHT COLUMN — Trust badge grid (5/12)
                    ===================================================== */}
                    <div className="relative lg:col-span-5">
                        <div className="relative">
                            {/* Decorative dotted ring behind grid */}
                            <div className="pointer-events-none absolute -inset-3 hidden lg:block">
                                <div className="absolute inset-0 rounded-3xl border border-dashed border-primary/15" />
                            </div>

                            {/* Trust badge grid — 2 columns × 3 rows */}
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                                {TRUST_BADGES.map((badge, i) => {
                                    const Icon = badge.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/10"
                                        >
                                            {/* Accent gradient on hover */}
                                            <div
                                                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${badge.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                                            />

                                            {/* Icon top-right */}
                                            <div className="relative mb-3 flex items-start justify-between">
                                                <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-110">
                                                    <Icon className="size-4" />
                                                </div>
                                                <RiArrowRightUpLine className="size-3.5 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                            </div>

                                            {/* Value + unit */}
                                            <div className="relative flex items-baseline gap-1">
                                                <p className="text-2xl font-bold leading-none tracking-tight text-foreground">
                                                    {badge.value}
                                                </p>
                                                {"unit" in badge && badge.unit && (
                                                    <span className="text-xs font-semibold text-muted-foreground">
                                                        {badge.unit}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Label */}
                                            <p className="relative mt-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground/80">
                                                {badge.label}
                                            </p>

                                            {/* Sublabel */}
                                            <p className="relative mt-0.5 text-[10px] font-medium text-muted-foreground">
                                                {badge.sublabel}
                                            </p>

                                            {/* Bottom progress accent line */}
                                            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/40 transition-all duration-500 group-hover:w-full" />
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Floating "trusted by" accent badge */}
                            <div className="absolute -bottom-3 -right-3 hidden items-center gap-2 rounded-full border border-primary/30 bg-card/90 px-3 py-1.5 shadow-lg shadow-primary/15 backdrop-blur-md sm:flex">
                                <RiSparklingFill className="size-3 text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                                    500+ Happy Clients
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}