import Link from "next/link";
import {
    RiTimeLine,
    RiComputerLine,
    RiMoneyDollarCircleLine,
    Ri24HoursLine,
    RiShieldCheckLine,
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiPhoneFill,
    RiAwardFill,
    RiStarFill,
    RiMapPinFill,
    RiUserStarFill,
    RiDoubleQuotesL,
    RiFingerprintLine,
    RiCheckboxCircleFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { whyChooseUs } from "@/data/businessInfo";

/* ============ Icon Mapping ============ */
const ICONS = [
    RiTimeLine,
    RiComputerLine,
    RiMoneyDollarCircleLine,
    Ri24HoursLine,
    RiShieldCheckLine,
    RiAwardFill,
];

/* ============ Tags per Reason ============ */
const FEATURE_TAGS = [
    ["Highway Patrol", "GPS Dispatch", "Live Tracking"],
    ["Dealer Scanners", "OBD-II", "Multi-Brand"],
    ["No Hidden Fees", "Itemized Quote", "Fair Rates"],
    ["365 Days", "Public Holidays", "All Emirates"],
    ["ASE Certified", "Workmanship Warranty", "Insured"],
    ["100% Genuine Parts", "Fair Pricing", "Insured Work"],
];

/* ============ Editorial labels ============ */
const REASON_LABELS = [
    "Response speed",
    "Onsite capability",
    "Honest pricing",
    "Availability",
    "Craftsmanship",
    "The promise",
];

export function WhyChooseUs() {
    return (
        <section className="relative isolate overflow-hidden bg-background py-10">
            {/* ============================================================
                BACKGROUND — Restrained atmosphere
            ============================================================ */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* Primary wash top-right */}
                <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/[0.06] blur-[140px]" />

                {/* Bottom-left subtle accent */}
                <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[140px]" />

                {/* Fine grid texture */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.045]"
                    style={{
                        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                        backgroundSize: "72px 72px",
                        maskImage:
                            "radial-gradient(ellipse 70% 55% at 50% 30%, black 10%, transparent 75%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 55% at 50% 30%, black 10%, transparent 75%)",
                    }}
                />

                {/* Top rule */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* ============================================================
                    SECTION HEADER — Editorial
                ============================================================ */}
                <div className="mb-12 lg:mb-16">
                    <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
                        {/* LEFT: Chapter + headline */}
                        <div className="lg:col-span-7">
                            {/* Chapter mark */}
                            <div className="mb-6 flex items-center gap-3">
                                <span className="flex size-9 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.06] font-serif text-xs font-bold italic text-primary backdrop-blur-sm">
                                </span>
                                <div className="h-px w-10 bg-border" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                                    Why Drivers Choose Us
                                </span>
                            </div>

                            {/* Headline */}
                            <h2 className="text-[2.4rem] font-bold leading-[0.98] -tracking-[0.03em] text-foreground sm:text-5xl lg:text-[3.75rem]">
                                Built for Dubai{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 italic text-primary">
                                        drivers
                                    </span>
                                    <svg
                                        className="absolute -bottom-2 left-0 h-3 w-full text-primary/40"
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
                                who value time
                            </h2>
                        </div>

                        {/* RIGHT: Intro */}
                        <div className="lg:col-span-5">
                            <div className="relative pl-6">
                                <RiDoubleQuotesL
                                    className="absolute -left-1 -top-3 size-7 text-primary/15"
                                    aria-hidden="true"
                                />
                                <p className="font-serif text-base italic leading-relaxed text-foreground/80 sm:text-lg">
                                    Six reasons thousands of Dubai drivers trust
                                    us with their vehicles — from emergency
                                    breakdowns to routine maintenance.
                                </p>
                                <div className="mt-4 flex items-center gap-2">
                                    <RiFingerprintLine className="size-4 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                                        Verified by 500+ drivers
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    BENTO GRID — 3-column asymmetric
                    Row 1: Hero (2 cols) + 1 standard
                    Row 2: 3 standard
                    Row 3: 1 standard + closing (2 cols)
                ============================================================ */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {/* --- REASON 1: HERO CARD (spans 2 cols on desktop) --- */}
                    <ReasonCard
                        item={whyChooseUs[0]}
                        Icon={ICONS[0]}
                        tags={FEATURE_TAGS[0]}
                        number="01"
                        label={REASON_LABELS[0]}
                        variant="hero"
                        className="sm:col-span-2 lg:col-span-2"
                    />

                    {/* --- REASON 2 --- */}
                    <ReasonCard
                        item={whyChooseUs[1]}
                        Icon={ICONS[1]}
                        tags={FEATURE_TAGS[1]}
                        number="02"
                        label={REASON_LABELS[1]}
                        variant="default"
                    />

                    {/* --- REASON 3 --- */}
                    <ReasonCard
                        item={whyChooseUs[2]}
                        Icon={ICONS[2]}
                        tags={FEATURE_TAGS[2]}
                        number="03"
                        label={REASON_LABELS[2]}
                        variant="default"
                    />

                    {/* --- REASON 4 --- */}
                    <ReasonCard
                        item={whyChooseUs[3]}
                        Icon={ICONS[3]}
                        tags={FEATURE_TAGS[3]}
                        number="04"
                        label={REASON_LABELS[3]}
                        variant="default"
                    />

                    {/* --- REASON 5 --- */}
                    <ReasonCard
                        item={whyChooseUs[4]}
                        Icon={ICONS[4]}
                        tags={FEATURE_TAGS[4]}
                        number="05"
                        label={REASON_LABELS[4]}
                        variant="default"
                    />

                    {/* --- REASON 6: CLOSING CARD (spans 2 cols) --- */}
                    <ReasonCard
                        item={whyChooseUs[5]}
                        Icon={ICONS[5]}
                        tags={FEATURE_TAGS[5]}
                        number="06"
                        label={REASON_LABELS[5]}
                        variant="closing"
                        className="sm:col-span-2 lg:col-span-2"
                    />
                </div>

                {/* ============================================================
                    BOTTOM CTA — Compact strip
                ============================================================ */}
                <div className="mt-12 lg:mt-16">
                    <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-card via-card to-primary/[0.04] p-5 sm:p-6">
                        {/* Corner marks */}
                        <div className="pointer-events-none absolute left-3 top-3 size-5">
                            <div className="absolute left-0 top-0 h-px w-4 bg-primary/40" />
                            <div className="absolute left-0 top-0 h-4 w-px bg-primary/40" />
                        </div>
                        <div className="pointer-events-none absolute bottom-3 right-3 size-5">
                            <div className="absolute bottom-0 right-0 h-px w-4 bg-primary/40" />
                            <div className="absolute bottom-0 right-0 h-4 w-px bg-primary/40" />
                        </div>

                        <div className="relative flex flex-col items-center justify-between gap-5 sm:flex-row">
                            {/* Left: Trust signals */}
                            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                                {[
                                    { icon: RiShieldCheckLine, text: "Workmanship Guaranteed" },
                                    { icon: RiAwardFill, text: "Certified Technicians" },
                                    { icon: RiMapPinFill, text: "Dubai-Wide" },
                                    { icon: RiUserStarFill, text: "500+ Drivers" },
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground sm:text-xs"
                                        >
                                            <Icon className="size-3.5 text-primary" />
                                            <span>{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right: CTA */}
                            <Link
                                href={SiteConfig.numberCallLink}
                                className="group relative inline-flex h-11 items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40"
                            >
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                <RiPhoneFill className="relative size-4" />
                                <span className="relative">Talk to a Mechanic</span>
                                <RiArrowRightLine className="relative size-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================================================
    UNIFIED CARD — 3 variants: hero, default, closing
============================================================ */
function ReasonCard({
    item,
    Icon,
    tags,
    number,
    label,
    variant = "default",
    className = "",
}: {
    item: (typeof whyChooseUs)[number];
    Icon: React.ElementType;
    tags: string[];
    number: string;
    label: string;
    variant?: "hero" | "default" | "closing";
    className?: string;
}) {
    const cleanName = item.name.replace(/:$/, "");
    const isHero = variant === "hero";
    const isClosing = variant === "closing";

    return (
        <article
            className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-card hover:shadow-lg hover:shadow-primary/[0.06] ${
                isClosing
                    ? "border-primary/30 bg-gradient-to-br from-card via-card to-primary/[0.06] hover:border-primary/50"
                    : "border-border/70 hover:border-primary/40"
            } ${className}`}
        >
            {/* Hover accent gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div
                className={`relative flex h-full flex-col ${
                    isHero ? "p-6 sm:p-7" : "p-5 sm:p-6"
                }`}
            >
                {/* Header: icon + step number */}
                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div
                            className={`flex items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary ${
                                isHero ? "size-12" : "size-10"
                            }`}
                        >
                            <Icon
                                className={
                                    isHero ? "size-5" : "size-4"
                                }
                            />
                        </div>
                        <div>
                            <p className="font-serif text-[10px] font-bold uppercase italic tracking-[0.2em] text-primary">
                                Reason {number}
                            </p>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                                {label}
                            </p>
                        </div>
                    </div>

                    {/* Small number tag */}
                    <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[9px] font-bold text-muted-foreground">
                        #{number}
                    </span>
                </div>

                {/* Title */}
                <h3
                    className={`mt-4 font-bold leading-tight tracking-tight text-foreground ${
                        isHero
                            ? "text-xl sm:text-2xl"
                            : "text-base sm:text-lg"
                    }`}
                >
                    {cleanName}
                </h3>

                {/* Description */}
                <p
                    className={`mt-2 flex-1 leading-relaxed text-muted-foreground ${
                        isHero
                            ? "text-sm sm:text-[15px]"
                            : "text-xs sm:text-[13px]"
                    }`}
                >
                    {item.description}
                </p>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {(isHero ? tags : tags.slice(0, 2)).map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background/60 px-2 py-0.5 text-[10px] font-semibold text-foreground/70"
                            >
                                <RiCheckboxCircleFill className="size-2.5 text-primary" />
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer — varies by variant */}
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3">
                    {isHero ? (
                        // Hero: Live + rating
                        <>
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
                                <span className="relative flex size-1.5">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                                </span>
                                Live Now
                            </span>
                            <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <RiStarFill
                                        key={i}
                                        className="size-3 text-primary"
                                    />
                                ))}
                                <span className="ml-1.5 text-[10px] font-bold text-muted-foreground">
                                    5.0
                                </span>
                            </div>
                        </>
                    ) : isClosing ? (
                        // Closing: CTA link
                        <Link
                            href="/about"
                            className="group/btn inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
                        >
                            Learn our story
                            <RiArrowRightUpLine className="size-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>
                    ) : (
                        // Default: subtle arrow
                        <>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                {number} / 06
                            </span>
                            <RiArrowRightLine className="size-3.5 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                        </>
                    )}
                </div>
            </div>
        </article>
    );
}