"use client";

import React from "react";
import Link from "next/link"; // ✅ ADDED — was missing
import {
    RiArrowRightLine,
    RiTimeFill,
    RiShieldCheckFill,
    RiBatteryChargeFill,
    RiCustomerServiceFill,
    RiArrowRightUpLine,
    RiMapPinFill,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig"; // ✅ ADDED — was missing

export default function ServiceAreas() {
    const { serviceAreas } = SiteConfig; // ✅ ADDED — was undefined

    return (
        <div>
            <div className="w-[90%] mx-auto py-10 ">
                {/* Header */}
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg shadow-primary/25">
                            <RiMapPinFill className="size-5 text-primary-foreground" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold tracking-tight text-foreground">
                                Areas We Serve
                            </h3>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                                {serviceAreas?.length || 40}+ neighborhoods across Dubai
                            </p>
                        </div>
                    </div>

                    <Link
                        href="/area-we-serve"
                        className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
                    >
                        View All Areas
                        <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>

                {/* Grid of area cards */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                    {serviceAreas.map((area) => (
                        <Link
                            key={area.slug}
                            href={`/area-we-serve/${area.slug}`}
                            className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-border/70 bg-card/50 px-3.5 py-3 backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:bg-primary/[0.04]"
                        >
                            <div className="flex items-center gap-2">
                                <span className="size-1.5 rounded-full bg-primary/40 transition-colors group-hover:bg-primary" />
                                <span className="truncate text-[12px] font-semibold text-foreground/90 transition-colors group-hover:text-primary">
                                    {area.name}
                                </span>
                            </div>
                            <RiArrowRightUpLine className="size-3 shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                    ))}
                </div>

                {/* Footer trust strip */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/60 bg-muted/30 px-4 py-3 backdrop-blur-sm">
                    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-foreground/80">
                        <span className="relative flex size-1.5">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                        </span>
                        Live Dispatch Active
                    </span>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            <RiTimeFill className="size-3 text-primary" />
                            5–30 Min Arrival
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            <RiShieldCheckFill className="size-3 text-primary" />
                            Certified Mechanics
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            <RiBatteryChargeFill className="size-3 text-primary" />
                            Genuine Parts
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                            <RiCustomerServiceFill className="size-3 text-primary" />
                            24/7 Support
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}