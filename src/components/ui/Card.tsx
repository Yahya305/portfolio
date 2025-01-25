import { cn } from "@lib/utils";
import React from "react";
import { PiCodeBold } from "react-icons/pi";
import { RiArrowRightDoubleLine } from "react-icons/ri";

function Card({
    className,
    title,
    points,
}: {
    className?: string;
    title: string;
    points: string[];
}) {
    return (
        <div
            className={cn(
                "w-full bg-card rounded-md p-8 flex flex-col gap-9",
                className
            )}
        >
            <PiCodeBold size={56} />
            <h4 className=" font-semibold">{title}</h4>
            <ul className="flex flex-col gap-4">
                {points.map((point,key) => {
                    return (
                        <li key={key} className="flex items-center gap-3 text-secondary-foreground">
                            <RiArrowRightDoubleLine /> {point}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Card;
