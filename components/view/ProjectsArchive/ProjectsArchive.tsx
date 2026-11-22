// components/projects/ProjectsArchive.tsx
"use client";

import { useMemo, useState } from "react";
import {
  RiMapPinFill,
  RiArrowRightUpLine,
  RiFolderOpenLine,
  RiSearchLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { projectData } from "@/data/ProjectData";
import { Project } from "@/types/projects";
import ProjectModal from "@/components/shared/Modal/ProjectModal";
import ProjectsFilters from "../ProjectsFilters/ProjectsFilters";


export default function ProjectsArchive() {
  const [filters, setFilters] = useState({
    search: "",
    area: "all",
    service: "all",
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ---- Filter logic ---- */
  const filteredProjects = useMemo(() => {
    return projectData.filter((project: any) => {
      // Search
      if (filters.search) {
        const q = filters.search.toLowerCase();
        const haystack = [
          project.title,
          project.area,
          project.location,
          project.service,
          project.category,
          project.vehicle,
          project.description,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      // Area
      if (filters.area !== "all") {
        const projectArea = project.area || project.location;
        if (projectArea !== filters.area) return false;
      }

      // Service
      if (filters.service !== "all") {
        const projectService = project.service || project.category;
        if (projectService !== filters.service) return false;
      }

      return true;
    });
  }, [filters]);

  /* ---- Modal handlers ---- */
  const openProject = (project: Project) => {
    const index = filteredProjects.findIndex(
      (p) => p.title === project.title
    );
    setCurrentIndex(index >= 0 ? index : 0);
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const navigateProject = (direction: "next" | "prev") => {
    if (
      direction === "next" &&
      currentIndex < filteredProjects.length - 1
    ) {
      const next = filteredProjects[currentIndex + 1];
      setCurrentIndex(currentIndex + 1);
      setSelectedProject(next);
    }
    if (direction === "prev" && currentIndex > 0) {
      const prev = filteredProjects[currentIndex - 1];
      setCurrentIndex(currentIndex - 1);
      setSelectedProject(prev);
    }
  };

  return (
    <>
      {/* Filters bar */}
      <ProjectsFilters
        filters={filters}
        onChange={setFilters}
        resultCount={filteredProjects.length}
      />

      {/* Archive grid */}
      <section className="relative bg-background pb-16 pt-10 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-10">
              {filteredProjects.map((project, idx) => (
                <ProjectTile
                  key={project.id || project.title}
                  project={project}
                  index={idx}
                  onOpen={() => openProject(project)}
                />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card/40 px-6 py-20 text-center">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                <RiSearchLine className="size-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">
                No cases found
              </h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                No documented cases match your filters. Try a different
                search, area, or service.
              </p>
              <button
                onClick={() =>
                  setFilters({ search: "", area: "all", service: "all" })
                }
                className="mt-6 inline-flex h-10 items-center gap-1.5 rounded-xl bg-primary px-5 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-sm shadow-primary/25 transition-all hover:shadow-md hover:shadow-primary/40"
              >
                <RiFolderOpenLine className="size-3.5" />
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          currentIndex={currentIndex}
          totalProjects={filteredProjects.length}
          onClose={closeProject}
          onNavigate={navigateProject}
        />
      )}
    </>
  );
}

/* ============================================================
    PROJECT TILE — image + title + location + case number
============================================================ */
function ProjectTile({
  project,
  index,
  onOpen,
}: {
  project: any;
  index: number;
  onOpen: () => void;
}) {
  const imageSrc =
    project.image?.src ||
    project.thumbnail?.src ||
    project.banner?.src ||
    project.service_banner?.src;

  const location =
    project.area || project.location || project.city || "Dubai";

  const service = project.service || project.category;

  return (
    <button
      onClick={onOpen}
      className="group relative block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Open case: ${project.title} — ${location}`}
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`${project.title} — ${location}`}
            loading={index < 3 ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <RiFolderOpenLine className="size-10 text-muted-foreground/40" />
          </div>
        )}

        {/* Hover scrim */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Case number badge — top left */}
        <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 font-mono text-[10px] font-bold tabular-nums text-foreground backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")} / {String(projectData.length).padStart(2, "0")}
        </span>

        {/* Service tag — top right (if available) */}
        {service && (
          <span className="absolute right-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
            {service}
          </span>
        )}

        {/* View hint — bottom right on hover */}
        <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          View case
          <RiArrowRightUpLine className="size-3" />
        </span>
      </div>

      {/* Metadata */}
      <div className="mt-3">
        <h3 className="line-clamp-2 text-base font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
          <RiMapPinFill className="size-3 shrink-0 text-primary" />
          <span className="truncate">{location}</span>
          {project.vehicle && (
            <>
              <span className="text-border">·</span>
              <span className="truncate">{project.vehicle}</span>
            </>
          )}
        </p>
      </div>
    </button>
  );
}