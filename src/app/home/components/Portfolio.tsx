import React from "react";
import Wrapper from "@components/Wrapper";
import {
    Carousel,
    CarouselNext,
    CarouselPrevious,
} from "@components/ui/carousel";
import CardProjects from "@components/ui/CardProjects";
import ResponsiveCarousel from "./ResponsiveCarousel";
import { projects } from "../../../data/Projects";

export default function Portfolio() {
    return (
        <Wrapper className="py-20 bg-secondary">
            <Carousel className="mt-10">
                <div className="relative mb-10 pr-24 sm:pr-48">
                    <span className="text-lg text-secondary-foreground">
                        || &nbsp;&nbsp;&nbsp; Portfolio
                    </span>
                    <h2>My Complete Projects</h2>
                    <CarouselPrevious className="absolute right-14 top-1/2 h-12 w-12 -translate-y-1/2 bg-secondary sm:right-24 sm:h-16 sm:w-16" />
                    <CarouselNext className="absolute right-0 top-1/2 h-12 w-12 -translate-y-1/2 bg-secondary sm:h-16 sm:w-16" />
                </div>
                <ResponsiveCarousel
                    allProjects={projects.map((project) => (
                        <CardProjects key={project.id} project={project} />
                    ))}
                />
            </Carousel>
        </Wrapper>
    );
}
