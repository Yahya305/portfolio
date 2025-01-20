import { cn } from "@lib/utils";
import React from "react";
import { PiCodeBold } from "react-icons/pi";
import { RiArrowRightDoubleLine } from "react-icons/ri";

function Card({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "w-full bg-card rounded-md p-8 flex flex-col gap-9",
                className
            )}
        >
            <PiCodeBold size={56} />
            <h4 className=" font-semibold">UI/UX Design</h4>
            <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-secondary-foreground">
                    <RiArrowRightDoubleLine /> Landing Pages
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground">
                    <RiArrowRightDoubleLine /> User Flow
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground">
                    <RiArrowRightDoubleLine /> Wireframing
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground">
                    <RiArrowRightDoubleLine /> Prototyping
                </li>
                <li className="flex items-center gap-3 text-secondary-foreground">
                    <RiArrowRightDoubleLine /> Mobile App Design
                </li>
            </ul>
        </div>
    );
}

export default Card;
