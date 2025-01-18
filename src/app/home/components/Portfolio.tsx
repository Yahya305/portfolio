import React from "react";
import Wrapper from "@components/Wrapper";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@components/ui/carousel";
import CardProjects from "@components/ui/CardProjects";
import ResponsiveCarousel from "./ResponsiveCarousel";

export default function Portfolio() {
    const allProjects = [
        <CardProjects key={1} />,
        <CardProjects key={2} />,
        <CardProjects key={3} />,
        <CardProjects key={4} />,
        <CardProjects key={5} />,
        <CardProjects key={6} />,
    ];
    return (
        <Wrapper className="py-20 bg-secondary">
            <div>
                <Carousel className="mt-10">
                    <div className="relative mb-10">
                        <span className="text-lg text-secondary-foreground">
                            || &nbsp;&nbsp;&nbsp; Awesome Porfolio
                        </span>
                        <h2>My Complete Projects</h2>
                        <CarouselPrevious className="absolute z-50 w-12 h-12 sm:top-10 left-full xs:-translate-x-28 sm:-translate-x-44 sm:h-20 sm:w-20 bg-secondary" />
                        <CarouselNext className="absolute right-0 z-50 w-12 h-12 sm:top-10 sm:h-20 sm:w-20 bg-secondary" />
                    </div>
                    <ResponsiveCarousel allProjects={allProjects} />
                </Carousel>
            </div>
        </Wrapper>
    );
}
