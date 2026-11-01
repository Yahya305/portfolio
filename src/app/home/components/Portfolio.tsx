import React from "react";
import Wrapper from "@components/Wrapper";
import {
    Carousel,
    CarouselNext,
    CarouselPrevious,
} from "@components/ui/carousel";
import CardProjects from "@components/ui/CardProjects";
import ResponsiveCarousel from "./ResponsiveCarousel";
import {
    caseStudies,
    publicProjects,
    type PortfolioProject,
} from "../../../data/Projects";

function ProjectCarousel({
    eyebrow,
    title,
    projects,
}: {
    eyebrow: string;
    title: string;
    projects: PortfolioProject[];
}) {
    return (
        <Carousel className="mt-10">
            <div className="relative mb-10 pr-24 sm:pr-48">
                <span className="text-lg text-secondary-foreground">
                    || &nbsp;&nbsp;&nbsp; {eyebrow}
                </span>
                <h2>{title}</h2>
                <CarouselPrevious className="absolute right-14 top-1/2 h-12 w-12 -translate-y-1/2 bg-secondary sm:right-24 sm:h-16 sm:w-16" />
                <CarouselNext className="absolute right-0 top-1/2 h-12 w-12 -translate-y-1/2 bg-secondary sm:h-16 sm:w-16" />
            </div>
            <ResponsiveCarousel
                allProjects={projects.map((project) => (
                    <CardProjects key={project.id} project={project} />
                ))}
            />
        </Carousel>
    );
}

export default function Portfolio() {
    return (
        <Wrapper className="py-20 bg-secondary">
            <ProjectCarousel
                eyebrow="Selected Work"
                title="Selected Case Studies"
                projects={caseStudies}
            />
            <div className="mt-24">
                <ProjectCarousel
                    eyebrow="Personal Projects"
                    title="Labs & Open Source"
                    projects={publicProjects}
                />
            </div>
        </Wrapper>
    );
}
