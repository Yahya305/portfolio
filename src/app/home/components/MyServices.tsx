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

export default function MyServices() {
    return (
        <Wrapper className="bg-secondary py-20">
            <span className="text-secondary-foreground text-lg">
                || &nbsp;&nbsp;&nbsp; My Services
            </span>
            <h2>Service Provide For My Clients.</h2>
            {/* // Desktop Screen */}
            <Carousel className="mt-10 hidden lg:block">
                <CarouselContent>
                    <CarouselItem className="flex justify-between gap-7">
                        <Card />
                        <Card />
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="flex justify-between gap-7">
                        <Card />
                        <Card />
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="flex justify-between gap-7">
                        <Card />
                        <Card />
                        <Card />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            {/* // Tablet Screen */}
            <Carousel className="mt-10 hidden md:block lg:hidden">
                <CarouselContent>
                    <CarouselItem className="flex justify-between gap-7">
                        <Card />
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="flex justify-between gap-7">
                        <Card />
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="flex justify-between gap-7">
                        <Card />
                        <Card />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            {/* // Mobile Screen */}
            <Carousel className="mt-10 xs:block md:hidden w-3/4 mx-auto">
                <CarouselContent>
                    <CarouselItem className="flex justify-between gap-7">
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="flex justify-between gap-7">
                        <Card />
                    </CarouselItem>
                    <CarouselItem className="flex justify-between gap-7">
                        <Card />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </Wrapper>
    );
}
