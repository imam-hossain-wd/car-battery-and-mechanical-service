"use client";

import Link from "next/link";
import {
    RiArrowRightLine,
    RiPhoneFill,
    RiWhatsappFill,
    RiShieldCheckFill,
    RiTimeFill,
    RiToolsFill,
    RiStarFill,
    RiCheckboxCircleFill,
    RiBatteryChargeFill,
    RiVerifiedBadgeFill,
    RiFlashlightFill,
    RiCustomerServiceFill,
    RiArrowRightUpLine,
    RiMapPinFill,
    RiFlashlightLine,
    RiSparklingFill,
    RiSteeringFill,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";

/* ============================================================
   DATA
============================================================ */
const STATS = [
    {
        icon: RiTimeFill,
        value: "5–30",
        unit: "min",
        label: "Response Time",
        sublabel: "Live dispatch",
        accent: "from-primary/20 via-primary/10 to-transparent",
    },
    {
        icon: RiBatteryChargeFill,
        value: "100%",
        unit: "",
        label: "Genuine Parts",
        sublabel: "OEM certified",
        accent: "from-primary/15 via-primary/8 to-transparent",
    },
    {
        icon: RiToolsFill,
        value: "90%",
        unit: "",
        label: "Onsite Fix Rate",
        sublabel: "No towing",
        accent: "from-primary/25 via-primary/12 to-transparent",
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
    { icon: RiVerifiedBadgeFill, text: "Certified mechanics" },
];

export default function Hero() {
    const {
        displayNumber,
        numberCallLink,
        whatsappCallLink,
        city,
        serviceAreas,
    } = SiteConfig;

    return (
        <section className="relative isolate w-full overflow-hidden bg-background">
            {/* ============================================================
                BACKGROUND ATMOSPHERE — Multi-layer, image-free
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Primary radial glow — top right */}
                <div className="absolute -right-[15%] -top-[20%] h-[700px] w-[700px] rounded-full bg-primary/[0.10] blur-[160px]" />

                {/* Secondary glow — bottom left */}
                <div className="absolute -bottom-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[140px]" />

                {/* Center subtle glow */}
                <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[100px]" />

                {/* Fine grid lines with radial mask */}
                <div
                    className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                        backgroundSize: "56px 56px",
                        maskImage:
                            "radial-gradient(ellipse 75% 65% at 50% 35%, black 10%, transparent 85%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 75% 65% at 50% 35%, black 10%, transparent 85%)",
                    }}
                />

                {/* Horizon accent line */}
                <div className="absolute left-1/2 top-[42%] h-px w-[90%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

                {/* Corner brackets — subtle framing */}
                <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-primary/20" />
                <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-primary/20" />
            </div>

            {/* ============================================================
                MAIN CONTENT
            ============================================================ */}
            <div className="relative px-5 pb-16 pt-14 sm:pt-20 lg:pb-24 lg:pt-24">
                {/* ---------------------------------------------------------
                    TOP EYEBROW — Live dispatch pill (centered)
                --------------------------------------------------------- */}
                <div className="flex justify-center">
                    <div className="group inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.06] py-1 pl-1 pr-3.5 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-primary/[0.10]">
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
                </div>

                {/* ---------------------------------------------------------
                    HEADLINE — Massive editorial type (centered)
                --------------------------------------------------------- */}
                <div className="mx-auto mt-8 max-w-5xl text-center">
                    <h1 className="text-[2.6rem] font-bold leading-[1.02] -tracking-[0.04em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
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
                        <span className="mt-1 block text-muted-foreground/70 lg:text-[4.2rem] xl:text-[4.75rem]">
                            Mobile Mechanic in Dubai
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-7 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
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
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
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
                </div>

                {/* ---------------------------------------------------------
                    CTA GROUP — Centered, prominent
                --------------------------------------------------------- */}
                <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
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

                {/* Micro trust — centered */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] font-medium text-muted-foreground">
                    {MICRO_TRUST.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <span key={i} className="inline-flex items-center gap-1.5">
                                <Icon className="size-3.5 text-primary" />
                                {item.text}
                            </span>
                        );
                    })}
                </div>

                {/* ============================================================
                    BENTO STATS GRID — Asymmetric, modern
                ============================================================ */}
                <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-3 lg:mt-20">
                    {STATS.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
                            >
                                {/* Accent gradient */}
                                <div
                                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                                />

                                <div className="relative flex items-start justify-between">
                                    <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/10">
                                        <Icon className="size-5" />
                                    </div>
                                    <RiArrowRightUpLine className="size-4 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </div>

                                <div className="relative mt-5">
                                    <div className="flex items-baseline gap-1">
                                        <p className="text-3xl font-bold leading-none tracking-tight text-foreground">
                                            {stat.value}
                                        </p>
                                        {stat.unit && (
                                            <span className="text-sm font-semibold text-muted-foreground">
                                                {stat.unit}
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-2 text-xs font-bold uppercase tracking-wider text-foreground/80">
                                        {stat.label}
                                    </p>
                                    <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                                        {stat.sublabel}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>  
            </div>
        </section>
    );
}