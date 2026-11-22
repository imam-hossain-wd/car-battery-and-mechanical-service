// components/projects/ProjectsFilters.tsx
"use client";

import { useMemo } from "react";
import {
  RiSearchLine,
  RiCloseLine,
  RiGridFill,
  RiMapPinFill,
  RiCarLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { projectData } from "@/data/ProjectData";

interface Filters {
  search: string;
  area: string;
  service: string;
}

interface ProjectsFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  resultCount: number;
}

export default function ProjectsFilters({
  filters,
  onChange,
  resultCount,
}: ProjectsFiltersProps) {
  /* ---- Derive available filters from data ---- */
  const { areas, services } = useMemo(() => {
    const areaSet = new Set<string>();
    const serviceSet = new Set<string>();
    projectData.forEach((p: any) => {
      if (p.area) areaSet.add(p.area);
      if (p.location) areaSet.add(p.location);
      if (p.service) serviceSet.add(p.service);
      if (p.category) serviceSet.add(p.category);
    });
    return {
      areas: Array.from(areaSet).sort(),
      services: Array.from(serviceSet).sort(),
    };
  }, []);

  const hasActiveFilters =
    filters.search || filters.area !== "all" || filters.service !== "all";

  return (
    <div className="sticky top-0 z-30 -mx-5 border-y border-border/60 bg-background/95 px-5 py-4 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* Search */}
          <div className="group relative flex-1">
            <RiSearchLine className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <input
              type="text"
              value={filters.search}
              onChange={(e) =>
                onChange({ ...filters, search: e.target.value })
              }
              placeholder="Search by title, vehicle, area…"
              className="h-11 w-full rounded-xl border border-border/70 bg-card pl-11 pr-10 text-sm font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
            />
            {filters.search && (
              <button
                onClick={() => onChange({ ...filters, search: "" })}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <RiCloseLine className="size-3.5" />
              </button>
            )}
          </div>

          {/* Area select */}
          <div className="relative">
            <RiMapPinFill className="pointer-events-none absolute left-3.5 top-1/2 size-3.5 -translate-y-1/2 text-primary" />
            <select
              value={filters.area}
              onChange={(e) =>
                onChange({ ...filters, area: e.target.value })
              }
              className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-border/70 bg-card pl-9 pr-8 text-xs font-bold uppercase tracking-wider text-foreground outline-none transition-colors focus:border-primary/50 sm:w-auto sm:min-w-[160px]"
            >
              <option value="all">All Areas</option>
              {areas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              ▾
            </span>
          </div>

          {/* Service select */}
          <div className="relative">
            <RiGridFill className="pointer-events-none absolute left-3.5 top-1/2 size-3.5 -translate-y-1/2 text-primary" />
            <select
              value={filters.service}
              onChange={(e) =>
                onChange({ ...filters, service: e.target.value })
              }
              className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-border/70 bg-card pl-9 pr-8 text-xs font-bold uppercase tracking-wider text-foreground outline-none transition-colors focus:border-primary/50 sm:w-auto sm:min-w-[160px]"
            >
              <option value="all">All Services</option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              ▾
            </span>
          </div>

          {/* Clear */}
          {hasActiveFilters && (
            <button
              onClick={() =>
                onChange({ search: "", area: "all", service: "all" })
              }
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl border border-border bg-background px-4 text-[11px] font-bold uppercase tracking-wider text-foreground transition-all hover:border-primary hover:text-primary"
            >
              <RiCloseLine className="size-3.5" />
              Clear
            </button>
          )}
        </div>

        {/* Result line */}
        <div className="mt-3 flex items-center justify-between gap-3 border-t border-border/40 pt-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {resultCount} {resultCount === 1 ? "case" : "cases"}
            {filters.search && ` · matching "${filters.search}"`}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
            </span>
            Live archive
          </span>
        </div>
      </div>
    </div>
  );
}