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
                <div className="relative mb-10">
                    <span className="text-lg text-secondary-foreground">
                        || &nbsp;&nbsp;&nbsp; Portfolio
                    </span>
                    <h2>My Complete Projects</h2>
                    <CarouselPrevious className="absolute left-full top-0 h-12 w-12 -translate-x-28 bg-secondary sm:top-10 sm:h-20 sm:w-20 sm:-translate-x-44" />
                    <CarouselNext className="absolute right-0 top-0 h-12 w-12 bg-secondary sm:top-10 sm:h-20 sm:w-20" />
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
