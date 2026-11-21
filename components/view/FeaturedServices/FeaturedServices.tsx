// components/sections/FeaturedServices.tsx

"use client";

import Link from "next/link";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiFlashlightFill,
    RiShieldCheckFill,
    RiTimeFill,
    RiGridFill,
    RiPhoneFill,
    RiWhatsappFill,
    RiStarFill,
    RiSparklingFill,
    RiMoneyDollarCircleFill,
} from "@remixicon/react";
import { services } from "@/data/services/services";
import { SiteConfig } from "@/config/siteConfig";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";

const FEATURED_SERVICE_SLUGS = [
    "battery-replacement",
    "jump-start",
    "computer-diagnostic",
    "alternator-repair",
    "fuel-pump-repair",
    "starter-motor-repair",
    "ac-repair",
    "brake-pad-repair",
];

interface FeaturedServicesProps {
    title?: string;
    subtitle?: string;
    limit?: number;
    showAll?: boolean;
}

export function FeaturedServices({
    title = "Featured Services",
    subtitle = "Our most popular mobile repair services with transparent pricing",
    limit = 8,
    showAll = false,
}: FeaturedServicesProps) {
    const { responseTime } = SiteConfig;

    const featuredServices = services.filter((service) =>
        FEATURED_SERVICE_SLUGS.some(
            (slug) =>
                service.slug === slug ||
                service.slug.includes(slug) ||
                slug.includes(service.slug)
        )
    );

    const baseServices =
        featuredServices.length > 0 ? featuredServices : services;

    const displayServices = showAll ? baseServices : baseServices.slice(0, limit);

    return (
        <section className="relative w-full overflow-hidden bg-background py-10 px-5">
            {/* ============================================================
                BACKGROUND — Single-focus atmosphere
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[140px]" />
                <div className="absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.045]"
                    style={{
                        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                        backgroundSize: "72px 72px",
                        maskImage:
                            "radial-gradient(ellipse 65% 45% at 50% 30%, black 10%, transparent 75%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 65% 45% at 50% 30%, black 10%, transparent 75%)",
                    }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* ============================================================
                    SECTION HEADER — Editorial, asymmetric
                ============================================================ */}
                <div className="mb-12 lg:mb-14">
                    <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
                        {/* Left: Title block */}
                        <div className="lg:col-span-8">
                            {/* Eyebrow */}
                            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-primary/[0.06] px-3.5 py-1.5 backdrop-blur-sm">
                                <span className="relative flex size-1.5">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-[11px]">
                                    What We Do
                                </span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-[2.2rem] font-bold leading-[1.02] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]">
                                Mobile Car Repair{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 italic text-primary">
                                        Done Right
                                    </span>
                                    <svg
                                        className="absolute -bottom-1.5 left-0 h-3 w-full text-primary/25"
                                        viewBox="0 0 400 12"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M3 9C80 2 180 1 397 6"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </h2>

                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                {subtitle}
                            </p>
                        </div>

                        {/* Right: Stat chips */}
                        <div className="lg:col-span-4">
                            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap lg:flex-col">
                                <StatChip
                                    icon={<RiTimeFill className="size-3.5" />}
                                    label={`${responseTime} Response`}
                                    value="Live"
                                />
                                <StatChip
                                    icon={<RiShieldCheckFill className="size-3.5" />}
                                    label="Certified Pros"
                                    value="100%"
                                />
                                <StatChip
                                    icon={<RiGridFill className="size-3.5" />}
                                    label={`${displayServices.length} Services`}
                                    value="Ready"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mt-10 flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                            <RiSparklingFill className="size-3 text-primary" />
                            Most Booked
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-border to-transparent" />
                    </div>
                </div>

                {/* ============================================================
                    SPOTLIGHT ROW — 2 large cards
                ============================================================ */}
                {/* <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mb-6 lg:gap-6">
                    {spotlightServices.map((service, index) => (
                        <ServiceCard
                            key={service.slug}
                            name={service.name}
                            slug={service.slug}
                            features={service.features}
                            image={service.service_banner?.src}
                            intro={service.intro}
                            index={index}
                            variant="spotlight"
                        />
                    ))}
                </div> */}

                {/* ============================================================
                    REGULAR GRID — 4-col on desktop
                ============================================================ */}
                {featuredServices.length > 0 && (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                        {featuredServices.map((service, index) => (
                            <ServiceCard
                                key={service.slug}
                                name={service.name}
                                slug={service.slug}
                                features={service.features}
                                image={service.service_banner?.src}
                                intro={service.intro}
                                index={index + 2}
                                variant="default"
                            />
                        ))}
                    </div>
                )}

                {/* ============================================================
                    INLINE "VIEW ALL" ROW — replaces floating button
                ============================================================ */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/70 bg-card/40 px-5 py-4 backdrop-blur-sm sm:flex-row">
                    <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/10">
                            <RiMoneyDollarCircleFill className="size-4" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-foreground">
                                Need a service not listed here?
                            </p>
                            <p className="text-xs text-muted-foreground">
                                We cover 19+ services across Dubai — all with upfront pricing.
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/services"
                        className="group inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/40"
                    >
                        View All Services
                        <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </div>           
            </div>
        </section>
    );
}

/* ============================================================
    SUB-COMPONENT: Stat Chip
============================================================ */
function StatChip({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value?: string;
}) {
    return (
        <div className="group flex items-center gap-3 rounded-xl border border-border bg-card/60 px-3 py-2 backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-card hover:shadow-md">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {icon}
            </span>
            <div className="min-w-0 flex-1">
                {value && (
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        {value}
                    </p>
                )}
                <p className="truncate text-xs font-semibold text-foreground">
                    {label}
                </p>
            </div>
        </div>
    );
}