// "use client";

// import Link from "next/link";
// import {
//     RiCellphoneLine,
//     RiCarWashingLine,
//     RiSettings3Line,
//     RiArrowRightLine,
//     RiTimeFill,
//     RiShieldCheckFill,
//     RiFlashlightFill,
//     RiPhoneFill,
//     RiWhatsappFill,
//     RiCheckDoubleLine,
//     RiArrowRightUpLine,
//     RiCheckLine,
// } from "@remixicon/react";
// import { SiteConfig } from "@/config/siteConfig";
// import { cn } from "@/lib/utils";

// const steps = [
//     {
//         id: 1,
//         stepNumber: "01",
//         icon: RiCellphoneLine,
//         title: "Call or Book Online",
//         shortTitle: "Book",
//         description:
//             "Reach us 24/7 via phone, WhatsApp, or our website. Tell us your issue and location — we confirm instantly.",
//         meta: "24/7 Available",
//         metaIcon: RiTimeFill,
//         tags: ["Phone", "WhatsApp", "Online Form"],
//     },
//     {
//         id: 2,
//         stepNumber: "02",
//         icon: RiCarWashingLine,
//         title: "We Come to You",
//         shortTitle: "Dispatch",
//         description:
//             "Our fully-equipped mobile unit dispatches immediately and arrives at your exact location within 5–15 minutes.",
//         meta: "5–15 Min Arrival",
//         metaIcon: RiFlashlightFill,
//         tags: ["GPS Tracking", "Live Updates", "No Towing"],
//     },
//     {
//         id: 3,
//         stepNumber: "03",
//         icon: RiSettings3Line,
//         title: "Fixed On-Site",
//         shortTitle: "Repair",
//         description:
//             "Certified mechanics diagnose and repair right there. Upfront pricing — no hidden fees, no surprises.",
//         meta: "90% Onsite Fix Rate",
//         metaIcon: RiShieldCheckFill,
//         tags: ["Genuine Parts", "Warranty", "Transparent Pricing"],
//     },
// ];

// const STATS_PILLS = [
//     { value: "5–15", label: "min arrival", icon: RiFlashlightFill },
//     { value: "24/7", label: "dispatch", icon: RiTimeFill },
//     { value: "90%", label: "onsite fix", icon: RiShieldCheckFill },
//     { value: "100%", label: "genuine parts", icon: RiCheckDoubleLine },
// ];

// export default function HowItWorks() {
//     return (
//         <section className="relative isolate overflow-hidden bg-background py-10">
//             {/* ============================================================
//                 BACKGROUND — Restrained, single focus
//             ============================================================ */}
//             <div className="pointer-events-none absolute inset-0 -z-10">
//                 {/* Single top radial glow — anchors the section */}
//                 <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[140px]" />

//                 {/* Bottom subtle glow */}
//                 <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[100px]" />

//                 {/* Fine grid — tightly masked */}
//                 <div
//                     className="absolute inset-0 opacity-[0.03] dark:opacity-[0.045]"
//                     style={{
//                         backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
//                         backgroundSize: "72px 72px",
//                         maskImage:
//                             "radial-gradient(ellipse 55% 45% at 50% 35%, black 10%, transparent 75%)",
//                         WebkitMaskImage:
//                             "radial-gradient(ellipse 55% 45% at 50% 35%, black 10%, transparent 75%)",
//                     }}
//                 />
//             </div>

//             <div className="relative px-5">
//                 {/* ============================================================
//                     SECTION HEADER — Editorial, centered
//                 ============================================================ */}
//                 <div className="mx-auto max-w-3xl text-center">
//                     {/* Eyebrow */}
//                     {/* <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
//                         <span className="relative flex size-1.5">
//                             <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
//                             <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
//                         </span>
//                         <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-[11px]">
//                             The Process
//                         </span>
//                         <span className="hidden h-3 w-px bg-primary/30 sm:block" />
//                         <span className="hidden text-[10px] font-bold uppercase tracking-[0.15em] text-primary/80 sm:block">
//                             3 Steps · 30 Minutes
//                         </span>
//                     </div> */}

//                     {/* Headline */}
//                     <h2 className="mt-6 text-[2.2rem] font-bold leading-[1.05] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
//                         From Breakdown to{" "}
//                         <span className="relative inline-block">
//                             <span className="relative z-10 italic text-primary">
//                                 Back on Road
//                             </span>
//                             <svg
//                                 className="absolute -bottom-2 left-0 h-3 w-full text-primary/25"
//                                 viewBox="0 0 400 12"
//                                 fill="none"
//                                 preserveAspectRatio="none"
//                                 aria-hidden="true"
//                             >
//                                 <path
//                                     d="M3 9C80 2 180 1 397 6"
//                                     stroke="currentColor"
//                                     strokeWidth="4"
//                                     strokeLinecap="round"
//                                 />
//                             </svg>
//                         </span>{" "}
//                         in Three Steps
//                     </h2>

//                     {/* Subtitle */}
//                     <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
//                         Fast, transparent, and without the workshop hassle.
//                         Here's exactly what happens when you call us — no
//                         surprises, no hidden fees.
//                     </p>

//                     {/* Stat pills */}
//                     {/* <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
//                         {STATS_PILLS.map((stat, i) => {
//                             const Icon = stat.icon;
//                             return (
//                                 <div
//                                     key={i}
//                                     className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-1.5 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/[0.04]"
//                                 >
//                                     <Icon className="size-3 text-primary" />
//                                     <span className="text-xs font-bold text-foreground">
//                                         {stat.value}
//                                     </span>
//                                     <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
//                                         {stat.label}
//                                     </span>
//                                 </div>
//                             );
//                         })}
//                     </div> */}
//                 </div>

//                 {/* ============================================================
//                     THE TIMELINE — horizontal rail on desktop, vertical on mobile
//                 ============================================================ */}
//                 <div className="relative mx-auto mt-14 max-w-6xl sm:mt-16 lg:mt-20">
//                     {/* DESKTOP: horizontal connecting rail */}
//                     <div
//                         className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden lg:block"
//                         aria-hidden="true"
//                     >
//                         <div className="relative h-px">
//                             {/* Base line */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
//                             {/* Animated primary line */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
//                             {/* Node dots */}
//                             <div className="absolute inset-0 flex items-center justify-between px-[calc(100%/6)]">
//                                 <span className="relative flex size-2">
//                                     <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/40" />
//                                     <span className="relative inline-flex size-2 rounded-full bg-primary" />
//                                 </span>
//                                 <span className="size-2 rounded-full bg-primary/60" />
//                                 <span className="size-2 rounded-full bg-primary/40" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Steps grid */}
//                     <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 lg:gap-6">
//                         {steps.map((step, idx) => {
//                             const Icon = step.icon;
//                             const MetaIcon = step.metaIcon;
//                             const isLast = idx === steps.length - 1;

//                             return (
//                                 <div
//                                     key={step.id}
//                                     className="group relative flex flex-col"
//                                 >
//                                     {/* -------------------------------------------------
//                                         STEP MARKER — big icon above the line
//                                     ------------------------------------------------- */}
//                                     <div className="relative mb-6 flex items-center lg:mb-8 lg:justify-center">
//                                         {/* Icon */}
//                                         <div className="relative">
//                                             <div className="relative flex size-[4.25rem] items-center justify-center rounded-2xl border border-primary/15 bg-gradient-to-br from-card to-card/60 shadow-lg shadow-primary/[0.08] transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/[0.15] sm:size-20">
//                                                 <Icon className="size-7 text-primary transition-transform duration-300 group-hover:scale-110 sm:size-8" />

//                                                 {/* Outer ring — very subtle */}
//                                                 <div className="absolute -inset-2 rounded-3xl border border-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                                             </div>

//                                             {/* Step number badge — top-right corner */}
//                                             <div className="absolute -right-2 -top-2 flex size-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-md shadow-primary/30 ring-2 ring-background">
//                                                 {step.stepNumber}
//                                             </div>
//                                         </div>

//                                         {/* Desktop connector arrow (right side of icon, between cards) */}
//                                         {!isLast && (
//                                             <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-background p-1.5 shadow-sm lg:flex">
//                                                 <RiArrowRightLine className="size-3.5 text-primary" />
//                                             </div>
//                                         )}
//                                     </div>

//                                     {/* -------------------------------------------------
//                                         CARD CONTENT — headline + desc + tags
//                                     ------------------------------------------------- */}
//                                     <div className="relative flex flex-1 flex-col rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:bg-card group-hover:shadow-lg group-hover:shadow-primary/[0.06] sm:p-6">
//                                         {/* Meta badge */}
//                                         <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
//                                             <MetaIcon className="size-3" />
//                                             {step.meta}
//                                         </div>

//                                         {/* Title */}
//                                         <h3 className="text-lg md:text-2xl font-bold leading-tight tracking-tight text-foreground">
//                                             {step.title}
//                                         </h3>

//                                         {/* Description */}
//                                         {/* <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
//                                             {step.description}
//                                         </p> */}

//                                         {/* Tags */}
//                                         <div className="mt-4 flex flex-wrap gap-1.5">
//                                             {step.tags.map((tag) => (
//                                                 <span
//                                                     key={tag}
//                                                     className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[10px] font-semibold text-foreground/70 transition-colors group-hover:border-primary/20 group-hover:text-foreground/90"
//                                                 >
//                                                     <span className="size-1 rounded-full bg-primary/40" />
//                                                     {tag}
//                                                 </span>
//                                             ))}
//                                         </div>

//                                         {/* Bottom accent line — draws in on hover */}
//                                         <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                                     </div>

//                                     {/* Mobile connector */}
//                                     {!isLast && (
//                                         <div className="mt-4 flex justify-center lg:hidden">
//                                             <div className="flex flex-col items-center gap-1">
//                                                 <div className="h-6 w-px bg-gradient-to-b from-primary/40 to-primary/10" />
//                                                 <RiArrowRightLine className="size-3.5 rotate-90 text-primary/50" />
//                                                 <div className="h-2 w-px bg-primary/10" />
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* ============================================================
//                     BOTTOM CTA BANNER — Refined
//                 ============================================================ */}
//                 <div className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:mt-16 sm:p-10">
//                     {/* Decorative background */}
//                     <div className="pointer-events-none absolute inset-0">
//                         <div className="absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full bg-primary/10 blur-3xl" />
//                         <div className="absolute -bottom-20 -left-20 h-[280px] w-[280px] rounded-full bg-primary/[0.06] blur-3xl" />
//                         <div
//                             className="absolute inset-0 opacity-[0.04]"
//                             style={{
//                                 backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
//                                 backgroundSize: "20px 20px",
//                             }}
//                         />
//                     </div>

//                     <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:gap-8 lg:text-left">
//                         <div className="max-w-2xl">
//                             <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-3 py-1 backdrop-blur-sm">
//                                 <span className="relative flex size-1.5">
//                                     <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
//                                     <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
//                                 </span>
//                                 <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
//                                     Ready when you are
//                                 </span>
//                             </div>
//                             <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
//                                 Your car fixed in{" "}
//                                 <span className="text-primary">
//                                     under 30 minutes
//                                 </span>
//                             </h3>
//                             <p className="mt-2 text-sm text-muted-foreground sm:text-base">
//                                 One call. Certified mechanics at your door. No
//                                 workshop, no towing, no surprises.
//                             </p>
//                         </div>

//                         <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
//                             <Link
//                                 href={SiteConfig.numberCallLink}
//                                 className="group relative inline-flex h-13 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/40"
//                             >
//                                 <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//                                 <RiPhoneFill className="relative size-4" />
//                                 <span className="relative">Call Now</span>
//                                 <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
//                             </Link>
//                             <Link
//                                 href={SiteConfig.whatsappCallLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background/80 px-6 py-3.5 text-sm font-bold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
//                             >
//                                 <RiWhatsappFill className="size-4" />
//                                 WhatsApp
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import Link from "next/link";
import {
    RiCellphoneLine,
    RiCarWashingLine,
    RiSettings3Line,
    RiArrowRightLine,
    RiTimeFill,
    RiShieldCheckFill,
    RiFlashlightFill,
    RiPhoneFill,
    RiWhatsappFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

const steps = [
    {
        id: 1,
        stepNumber: "01",
        icon: RiCellphoneLine,
        title: "Call or Book Online",
        description:
            "Reach us 24/7 via phone, WhatsApp, or our website. Tell us your issue and location — we'll confirm your booking instantly.",
        meta: "24/7 Available",
        metaIcon: RiTimeFill,
        tags: ["Phone", "WhatsApp", "Online Form"],
    },
    {
        id: 2,
        stepNumber: "02",
        icon: RiCarWashingLine,
        title: "We Come to You",
        description:
            "Our fully-equipped mobile unit dispatches immediately and arrives at your exact location within 5–15 minutes.",
        meta: "5–15 Min Arrival",
        metaIcon: RiFlashlightFill,
        tags: ["GPS Tracking", "Live Updates", "No Towing"],
    },
    {
        id: 3,
        stepNumber: "03",
        icon: RiSettings3Line,
        title: "Fixed On-Site",
        description:
            "Certified mechanics diagnose and repair your vehicle right there. Pay upfront pricing — no hidden fees, no surprises.",
        meta: "90% Onsite Fix Rate",
        metaIcon: RiShieldCheckFill,
        tags: ["Genuine Parts", "Warranty", "Transparent Pricing"],
    },
];

export default function HowItWorks() {
    return (
        <section className="relative overflow-hidden bg-background py-10">
            {/* ============================================================
                BACKGROUND DECORATIVE LAYER
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0">
                {/* Large radial glow */}
                <div className="absolute left-1/3 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[130px]" />
                <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[100px]" />

                {/* Fine dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.4] dark:opacity-25"
                    style={{
                        backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                        backgroundSize: "28px 28px",
                        maskImage:
                            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 85%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 85%)",
                    }}
                />

                {/* Top hairline accent */}
                <div className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-primary/40 to-transparent" />
                <div className="absolute right-0 top-0 h-px w-1/3 bg-gradient-to-l from-primary/40 to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ============================================================
                    SECTION LAYOUT — 2 COLUMNS ON DESKTOP
                ============================================================ */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                    
                    {/* ==================================================
                        LEFT: STICKY HEADER (5 cols on desktop)
                    ================================================== */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-24">
                            {/* Eyebrow */}
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-4 py-1.5 backdrop-blur-sm">
                                <span className="relative flex size-1.5">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                                </span>
                                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                                    How It Works
                                </span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[3rem]">
                                Repairs Done in{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-primary">
                                        Three Simple Steps
                                    </span>
                                    <span className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-primary/15" />
                                </span>
                            </h2>

                            {/* Subtitle */}
                            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                                Your car repair journey made effortless — fast,
                                transparent, and without the workshop hassle.
                                Here's exactly what happens when you call us.
                            </p>

                            {/* Quick stats */}
                            <div className="mt-8 grid grid-cols-3 gap-3">
                                {[
                                    { value: "5–15", unit: "min", label: "Response" },
                                    { value: "24/7", unit: "", label: "Available" },
                                    { value: "90%", unit: "", label: "Onsite Fix" },
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="rounded-xl border border-border bg-card/50 p-3 text-center backdrop-blur-sm"
                                    >
                                        <p className="text-lg font-bold leading-none text-primary sm:text-xl">
                                            {stat.value}
                                            {stat.unit && (
                                                <span className="ml-0.5 text-[10px] font-semibold text-muted-foreground">
                                                    {stat.unit}
                                                </span>
                                            )}
                                        </p>
                                        <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA (desktop only) */}
                            <div className="mt-8 hidden flex-col gap-3 sm:flex-row lg:flex">
                                <Link
                                    href={SiteConfig.numberCallLink}
                                    className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                                >
                                    <RiPhoneFill className="size-4" />
                                    Call Now
                                    <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                                </Link>
                                <Link
                                    href={SiteConfig.whatsappCallLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background px-6 text-sm font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                                >
                                    <RiWhatsappFill className="size-4" />
                                    WhatsApp
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* ==================================================
                        RIGHT: VERTICAL TIMELINE (7 cols on desktop)
                    ================================================== */}
                    <div className="lg:col-span-7">
                        <div className="relative">
                            {/* Vertical connector line (runs through all steps) */}
                            <div
                                aria-hidden="true"
                                className="absolute left-[27px] top-3 bottom-3 w-px md:left-[31px]"
                            >
                                <div className="h-full w-full bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />
                            </div>

                            {/* Steps */}
                            <div className="space-y-6">
                                {steps.map((step, idx) => {
                                    const Icon = step.icon;
                                    const MetaIcon = step.metaIcon;
                                    const isLast = idx === steps.length - 1;

                                    return (
                                        <div
                                            key={step.id}
                                            className="group relative flex gap-5 sm:gap-6"
                                        >
                                            {/* =================================
                                                LEFT: Timeline Node
                                            ================================= */}
                                            <div className="relative shrink-0">
                                                <div className="relative flex size-14 items-center justify-center rounded-2xl border-4 border-background bg-primary shadow-lg shadow-primary/30 sm:size-16">
                                                    <Icon className="size-6 text-primary-foreground sm:size-7" />
                                                    
                                                    {/* Step number badge */}
                                                    <span className="absolute -right-1.5 -top-1.5 flex size-6 items-center justify-center rounded-full border-2 border-background bg-foreground text-[10px] font-black text-background">
                                                        {step.stepNumber}
                                                    </span>

                                                    {/* Pulse for first step */}
                                                    {idx === 0 && (
                                                        <span className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-primary/30" />
                                                    )}
                                                </div>
                                            </div>

                                            {/* =================================
                                                RIGHT: Step Card
                                            ================================= */}
                                            <article
                                                className={cn(
                                                    "relative flex-1 overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/[0.08] sm:p-6",
                                                    isLast && "pb-6 sm:pb-7"
                                                )}
                                            >
                                                {/* Subtle top gradient on hover */}
                                                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                                <div className="relative">
                                                    {/* Header row */}
                                                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                                                        {/* Step label */}
                                                        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                                                            <span className="size-1.5 rounded-full bg-primary" />
                                                            Step {step.stepNumber}
                                                        </span>

                                                        {/* Meta badge */}
                                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                                                            <MetaIcon className="size-3" />
                                                            {step.meta}
                                                        </span>
                                                    </div>

                                                    {/* Title */}
                                                    <h3 className="text-lg font-bold leading-tight tracking-tight text-foreground sm:text-xl">
                                                        {step.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                                        {step.description}
                                                    </p>

                                                    {/* Tags */}
                                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                                        {step.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="inline-flex items-center rounded-md border border-border/70 bg-muted/40 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    );
                                })}
                            </div>

         
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}