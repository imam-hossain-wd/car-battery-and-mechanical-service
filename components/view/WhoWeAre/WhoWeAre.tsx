// app/(marketing)/_components/who-we-are.tsx

import Link from "next/link";
import Image from "next/image";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiShieldCheckFill,
    RiTimeFill,
    RiUserStarFill,
    RiMapPinFill,
    RiCheckLine,
    RiBatteryChargeFill,
    RiVerifiedBadgeFill,
    RiFlashlightFill,
    RiPhoneFill,
    RiStarFill,
    RiToolsFill,
    RiCustomerServiceFill,
    RiDoubleQuotesL,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { aboutUs } from "@/data/businessInfo";
import { heroBanner } from "@/config/imageConfig";

const HIGHLIGHTS = [
    { icon: RiTimeFill, value: "5–30", unit: "min", label: "Response Time" },
    { icon: RiUserStarFill, value: "500+", unit: "", label: "Happy Drivers" },
    { icon: RiMapPinFill, value: "16+", unit: "", label: "Service Areas" },
    { icon: RiShieldCheckFill, value: "100%", unit: "", label: "Guaranteed Work" },
];

const CORE_VALUES = [
    {
        icon: RiToolsFill,
        title: "Certified Technicians",
        description:
            "Multi-brand ASE-trained mechanics with years of hands-on expertise.",
        stat: "15+ yrs",
        statLabel: "avg experience",
    },
    {
        icon: RiFlashlightFill,
        title: "Dealer-Grade Equipment",
        description:
            "State-of-the-art diagnostic scanners and specialized tools on every van.",
        stat: "90%",
        statLabel: "onsite fix rate",
    },
    {
        icon: RiBatteryChargeFill,
        title: "Genuine OEM Parts",
        description:
            "Only authentic Varta, Amaron & ACDelco batteries and components.",
        stat: "100%",
        statLabel: "genuine parts",
    },
    {
        icon: RiCustomerServiceFill,
        title: "24/7 Emergency Coverage",
        description:
            "Dedicated rescue teams operating round-the-clock, all year long.",
        stat: "365",
        statLabel: "days open",
    },
];

export function WhoWeAre() {
    const { foundedYear, city } = SiteConfig;

    return (
        <section className="relative isolate overflow-hidden bg-background py-10">
            {/* ============================================================
                BACKGROUND — One restrained atmosphere
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/[0.05] blur-[140px]" />
                <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />

                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.045]"
                    style={{
                        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                        backgroundSize: "72px 72px",
                        maskImage:
                            "radial-gradient(ellipse 65% 55% at 50% 40%, black 10%, transparent 75%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 65% 55% at 50% 40%, black 10%, transparent 75%)",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* ============================================================
                    MAIN SPREAD — Image + Manifesto
                ============================================================ */}
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* LEFT: Clean image with overlay content (5 cols) */}
                    <div className="relative order-2 lg:order-1 lg:col-span-5">
                        <div className="relative mx-auto max-w-md lg:max-w-none">
                            {/* Main image — simpler, no offset frames */}
                            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-xl shadow-primary/[0.06]">
                                <Image
                                    src={heroBanner?.hero}
                                    alt={`Certified mobile car mechanic team in ${city}`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                                {/* Top-right rating badge */}
                                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 backdrop-blur-md">
                                    <div className="flex items-center gap-1.5">
                                        <RiStarFill className="size-3 text-primary" />
                                        <span className="text-[10px] font-bold text-white">
                                            5.0
                                        </span>
                                        <span className="text-[9px] text-white/60">
                                            rating
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom overlay content */}
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-md">
                                        <RiVerifiedBadgeFill className="size-3.5 text-primary" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                                            Certified Team
                                        </span>
                                    </div>
                                    <p className="text-base font-bold leading-tight text-white sm:text-lg">
                                        Mobile Repair
                                        <br />
                                        Unit · On the Road
                                    </p>
                                </div>
                            </div>

                            {/* Single floating stat — "since" */}
                            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-card p-3.5 shadow-xl shadow-black/[0.08] dark:shadow-black/40 sm:-left-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary">
                                        <RiShieldCheckFill className="size-5 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                            Trusted Since
                                        </p>
                                        <p className="text-lg font-black leading-none text-foreground">
                                            {foundedYear}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Manifesto (7 cols) */}
                    <div className="order-1 flex flex-col justify-center lg:order-2 lg:col-span-7">
                        <h2 className="text-[2.2rem] font-bold leading-[1.02] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
                            Dubai's Most{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 italic text-primary">
                                    Trusted
                                </span>
                                <svg
                                    className="absolute -bottom-1.5 left-0 h-3 w-full text-primary/25"
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
                            </span>{" "}
                            Mobile Car Repair Team
                        </h2>

                        {/* Pull-quote */}
                        <div className="relative mt-7 max-w-2xl">
                            <RiDoubleQuotesL
                                className="absolute -left-2 -top-3 size-7 text-primary/15"
                                aria-hidden="true"
                            />
                            <p className="pl-6 font-serif text-base italic leading-relaxed text-foreground/90 sm:text-lg">
                                A fully equipped garage on wheels — dispatched
                                directly to your exact GPS location, wherever
                                you are in Dubai.
                            </p>
                        </div>

                        {/* Body paragraphs */}
                        <div className="mt-6 space-y-4">
                            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                                {aboutUs.para1}
                            </p>
                            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                                {aboutUs.para2}
                            </p>
                        </div>

                        {/* Inline mini stats — cleaner as pills */}
                        <div className="mt-7 flex flex-wrap gap-2">
                            {[
                                { value: foundedYear, label: "Founded" },
                                { value: "500+", label: "Drivers" },
                                { value: "16+", label: "Areas" },
                                { value: "24/7", label: "Dispatch" },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="inline-flex items-baseline gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 backdrop-blur-sm"
                                >
                                    <span className="text-sm font-black leading-none text-foreground">
                                        {stat.value}
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA row */}
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <Link
                                href="/about-us"
                                className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <span className="relative">More About Us</span>
                                <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>

                            <Link
                                href="/contact-us"
                                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-border bg-background px-6 text-sm font-bold text-foreground transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary"
                            >
                                <span> 
                                    Contact Us 
                                    </span>
                                     <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    UNIFIED BENTO — Values + Stats (one system)
                ============================================================ */}
                <div className="relative mt-20 lg:mt-24">
                    {/* Sub-header */}
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                <span className="size-1.5 rounded-full bg-primary" />
                                Why Drivers Trust Us
                            </span>
                            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.5rem]">
                                Built different,{" "}
                                <span className="italic text-primary">
                                    on purpose
                                </span>
                            </h3>
                        </div>
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
                        >
                            Learn more
                            <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>

                    {/* Bento grid: 4 values + 4 stats = 8 cells in 4 columns */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                        {/* --- Core Values (first 4 cells) --- */}
                        {CORE_VALUES.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={`value-${index}`}
                                    className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/[0.06] sm:p-6"
                                >
                                    {/* Hover gradient wash */}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    <div className="relative flex h-full flex-col">
                                        {/* Icon + stat */}
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-110">
                                                <Icon className="size-4" />
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-black leading-none text-primary">
                                                    {value.stat}
                                                </p>
                                                <p className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                                                    {value.statLabel}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h4 className="mt-5 text-base font-bold leading-tight tracking-tight text-foreground">
                                            {value.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                                            {value.description}
                                        </p>

                                        {/* Footer accent */}
                                        <div className="mt-4 flex items-center gap-2">
                                            <span className="h-px flex-1 bg-border transition-colors duration-300 group-hover:bg-primary/40" />
                                            <RiArrowRightLine className="size-3 text-primary/0 transition-all duration-300 group-hover:text-primary" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* --- Stats strip (4 more cells, unified look) --- */}
                        {HIGHLIGHTS.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={`stat-${index}`}
                                    className="group relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-card via-card to-primary/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/[0.06] sm:p-6"
                                >
                                    <div className="relative flex h-full flex-col">
                                        {/* Icon + metric label */}
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-110">
                                                <Icon className="size-4" />
                                            </div>
                                            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                                                Metric 0{index + 1}
                                            </span>
                                        </div>

                                        {/* Big value */}
                                        <div className="mt-5 flex items-baseline gap-1">
                                            <p className="text-3xl font-black leading-none tracking-tight text-foreground">
                                                {item.value}
                                            </p>
                                            {item.unit && (
                                                <span className="text-sm font-semibold text-muted-foreground">
                                                    {item.unit}
                                                </span>
                                            )}
                                        </div>

                                        {/* Label */}
                                        <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                                            {item.label}
                                        </p>

                                        {/* Decorative bar */}
                                        <div className="mt-auto pt-4">
                                            <div className="h-0.5 w-full overflow-hidden rounded-full bg-border">
                                                <div className="h-full w-2/3 rounded-full bg-primary/60 transition-all duration-500 group-hover:w-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Footer strip — replaces the giant "annual report" panel */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 bg-muted/30 px-5 py-3 backdrop-blur-sm">
                        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-foreground/80">
                            <span className="relative flex size-1.5">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                            </span>
                            Live · {foundedYear}–{new Date().getFullYear()}
                        </span>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                <RiCheckLine className="size-3 text-primary" />
                                Verified performance metrics
                            </span>
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
                            >
                                Full story
                                <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}