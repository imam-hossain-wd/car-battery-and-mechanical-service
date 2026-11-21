// app/(marketing)/_components/projects.tsx
"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import {
    RiArrowRightLine,
    RiArrowRightUpLine,
    RiMapPinFill,
    RiArrowLeftSLine,
    RiArrowRightSLine,
    RiArrowRightUpFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteConfig";
import { projectData } from "@/data/ProjectData";
import { Project } from "@/types/projects";
import ProjectModal from "@/components/shared/Modal/ProjectModal";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const { city } = SiteConfig;

    const openProject = (project: Project) => {
        const index = projectData.findIndex((p) => p.title === project.title);
        setCurrentIndex(index >= 0 ? index : 0);
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
    };

    const closeProject = () => {
        setSelectedProject(null);
        document.body.style.overflow = "";
    };

    const navigateProject = (direction: "next" | "prev") => {
        if (direction === "next" && currentIndex < projectData.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedProject(projectData[currentIndex + 1]);
        }
        if (direction === "prev" && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setSelectedProject(projectData[currentIndex - 1]);
        }
    };

    const scrollBy = (dir: 1 | -1) => {
        if (!scrollRef.current) return;
        const card = scrollRef.current.querySelector("[data-card]");
        if (!card) return;
        const w = card.getBoundingClientRect().width + 20;
        scrollRef.current.scrollBy({ left: dir * w, behavior: "smooth" });
    };

    const displayProjects = projectData.slice(0, 5);

    return (
        <section className="relative isolate w-full overflow-hidden bg-background py-10">
            {/* Restrained atmosphere */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/[0.05] blur-[140px]" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* ============================================================
                    COMPACT HEADER — chapter + headline + controls inline
                ============================================================ */}
                <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        {/* Headline */}
                        <h2 className="max-w-xl text-[2rem] font-bold leading-[1] -tracking-[0.03em] text-foreground sm:text-4xl lg:text-[2.75rem]">
                            Real repairs from{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 italic text-primary">
                                    Dubai roads
                                </span>
                                <svg
                                    className="absolute -bottom-1.5 left-0 h-2.5 w-full text-primary/40"
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
                        </h2>
                    </div>

                    {/* Controls: count + nav arrows */}
                    <div className="flex items-center justify-between gap-6 lg:justify-end lg:pb-2">
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            {projectData.length} cases · {city}
                        </span>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => scrollBy(-1)}
                                aria-label="Previous case"
                                className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
                            >
                                <RiArrowLeftSLine className="size-4" />
                            </button>
                            <button
                                onClick={() => scrollBy(1)}
                                aria-label="Next case"
                                className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
                            >
                                <RiArrowRightSLine className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    FILM ROLL — horizontal scroll, 5 cases
                ============================================================ */}
                <div className="relative">
                    {/* Edge fades */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-8 bg-gradient-to-r from-background to-transparent lg:block" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-8 bg-gradient-to-l from-background to-transparent lg:block" />

                    <div
                        ref={scrollRef}
                        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
                    >
                        {displayProjects.map((project, idx) => (
                            <CaseTile
                                key={project.id}
                                project={project}
                                index={idx}
                                onOpen={() => openProject(project)}
                            />
                        ))}

                        {/* End card — "view all" */}
                        <Link
                            href="/projects"
                            data-card
                            className="group flex w-[260px] shrink-0 snap-start flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-muted/30 p-6 text-center transition-colors hover:border-primary hover:bg-primary/[0.04] sm:w-[300px]"
                            style={{ aspectRatio: "3 / 4" }}
                        >
                            <span className="flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary transition-transform group-hover:scale-110">
                                <RiArrowRightUpFill className="size-5" />
                            </span>
                            <div>
                                <p className="text-sm font-bold text-foreground">
                                    View full archive
                                </p>
                                <p className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                                    All {projectData.length} cases
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* ============================================================
                    FOOTER — one quiet CTA line only
                ============================================================ */}
                <div className="mt-10 flex items-center justify-between border-t border-border/60 pt-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Documented work · {city}
                    </p>
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary/80"
                    >
                        View All Projects
                        <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    currentIndex={currentIndex}
                    totalProjects={projectData.length}
                    onClose={closeProject}
                    onNavigate={navigateProject}
                />
            )}
        </section>
    );
}

/* ============================================================
    CASE TILE — portrait card in the film roll
============================================================ */
function CaseTile({
    project,
    index,
    onOpen,
}: {
    project: Project;
    index: number;
    onOpen: () => void;
}) {
    const imageSrc =
        project.image?.src ||
        project?.thumbnail?.src ||
        (project as any).banner?.src;

    const location =
        project?.location ||
        (project as any).area ||
        (project as any).city ||
        "Dubai";

    return (
        <button
            data-card
            onClick={onOpen}
            className="group relative block w-[260px] shrink-0 snap-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-[300px]"
            aria-label={`Open case: ${project.title} — ${location}`}
        >
            {/* IMAGE — portrait 3:4 */}
            <div className="relative w-full overflow-hidden rounded-xl bg-muted" style={{ aspectRatio: "3 / 4" }}>
                {imageSrc && (
                    <img
                        src={imageSrc}
                        alt={`${project.title} — ${location}`}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                )}

                {/* Hover scrim + "view" pill */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    View
                    <RiArrowRightUpLine className="size-3" />
                </span>

                {/* Index number — quiet top-left */}
                <span className="absolute left-3 top-3 rounded-full bg-background/70 px-2 py-0.5 font-serif text-[10px] font-bold italic text-foreground backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                </span>
            </div>

            {/* METADATA — title + location only */}
            <div className="mt-3">
                <h3 className="truncate text-sm font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                </h3>
                <p className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                    <RiMapPinFill className="size-2.5 shrink-0 text-primary" />
                    <span className="truncate">{location}</span>
                </p>
            </div>
        </button>
    );
}