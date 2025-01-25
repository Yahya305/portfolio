import Card from "@components/ui/Card";
import Wrapper from "@components/Wrapper";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@components/ui/carousel";
import { services } from "../../../data/Services";

function chunkArray<T>(array: T[], size: number): T[][] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

export default function MyServices() {
    return (
        <Wrapper className="bg-secondary py-20">
            <span className="text-secondary-foreground text-lg">
                || &nbsp;&nbsp;&nbsp; My Repertoire
            </span>
            <h2>What I Work With.</h2>
            {/* // Desktop Screen */}
            <Carousel className="mt-10 hidden lg:block">
                <CarouselContent>
                    {chunkArray(services, 3).map((group, index) => (
                        <CarouselItem
                            key={index}
                            className="flex justify-between gap-7"
                        >
                            {group[0]}
                            {group[1]}
                            {group[2]}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            {/* // Tablet Screen */}
            <Carousel className="mt-10 hidden md:block lg:hidden">
                <CarouselContent>
                    {chunkArray(services, 2).map((group, index) => (
                        <CarouselItem
                            key={index}
                            className="flex justify-between gap-7"
                        >
                            {group[0]}
                            {group[1]}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            {/* // Mobile Screen */}
            <Carousel className="mt-10 xs:block md:hidden w-3/4 mx-auto">
                <CarouselContent>
                    {services.map((service, index) => (
                        <CarouselItem
                            key={index}
                            className="flex justify-between gap-7"
                        >
                            {service}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </Wrapper>
    );
}
