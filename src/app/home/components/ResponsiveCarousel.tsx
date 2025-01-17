"use client";
import { CarouselContent, CarouselItem } from "@components/ui/carousel";
import useMediaQuery from "@lib/hooks/useMediaQuery";
import React from "react";

function chunkArray<T>(array: T[], size: number): T[][] {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

function ResponsiveCarousel({
    // children,
    allProjects,
}: {
    // children: React.ReactNode;
    allProjects: React.ReactNode[];
}) {
    const { isMobile, isTablet } = useMediaQuery();

    return (
        <>
            {isMobile || isTablet ? (
                <CarouselContent>
                    {chunkArray(allProjects, 1).map((group, index) => (
                        <CarouselItem
                            key={index}
                            className="flex justify-between gap-7"
                        >
                            {group}
                        </CarouselItem>
                    ))}
                </CarouselContent>
            ) : (
                <CarouselContent>
                    {chunkArray(allProjects, 2).map((group, index) => (
                        <CarouselItem
                            key={index}
                            className="flex justify-between gap-7"
                        >
                            {group}
                        </CarouselItem>
                    ))}
                </CarouselContent>
            )}
        </>
    );
}

export default ResponsiveCarousel;
