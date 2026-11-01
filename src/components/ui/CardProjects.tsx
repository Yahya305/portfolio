import { cn } from "@lib/utils";
import type { PortfolioProject } from "../../data/Projects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProjectPreview({ project }: { project: PortfolioProject }) {
    if (!project.imageURL) {
        return (
            <div className="relative flex min-h-[260px] items-end overflow-hidden rounded-md border border-border bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_38%),linear-gradient(135deg,_#242634,_#151720)] p-7">
                <div className="relative z-10 max-w-[260px]">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-secondary-foreground">
                        Featured Project
                    </span>
                    <p className="text-2xl font-semibold text-foreground">
                        {project.title}
                    </p>
                    <p className="mt-2 text-sm text-secondary-foreground">
                        {project.category}
                    </p>
                </div>
            </div>
        );
    }

    const image = (
        <Image
            src={project.imageURL}
            alt={`${project.title} project preview`}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
        />
    );

    return (
        <div className="relative aspect-square min-h-[260px] overflow-hidden rounded-md border border-border bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent_38%),linear-gradient(135deg,_#242634,_#151720)]">
            {project.url ? (
                <Link
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="absolute inset-0"
                >
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    );
}

export default function CardProjects({
    className,
    project,
}: {
    className?: string;
    project: PortfolioProject;
}) {
    return (
        <article
            className={cn(
                "flex h-full w-full flex-col gap-6 rounded-md bg-card p-5 sm:p-6",
                className
            )}
        >
            <ProjectPreview project={project} />
            <div className="flex flex-1 flex-col">
                <p className="text-sm uppercase tracking-[0.16em] text-secondary-foreground">
                    {project.category}
                </p>
                <h4 className="mt-2">{project.title}</h4>
                <p className="mt-3 text-secondary-foreground">
                    {project.description}
                </p>
                {project.technologies?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-border px-3 py-1 text-xs text-secondary-foreground"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                ) : null}
                {project.highlights?.length ? (
                    <ul className="mt-5 space-y-2 text-sm text-secondary-foreground">
                        {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                ) : null}
                {project.url ? (
                    <Link
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
                    >
                        View project <ExternalLink size={16} />
                    </Link>
                ) : (
                    <span className="mt-6 text-sm text-secondary-foreground">
                        Project overview
                    </span>
                )}
            </div>
        </article>
    );
}
