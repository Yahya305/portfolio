import { cn } from "@lib/utils";
import React from "react";

function Circle({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                `absolute top-[50%] left-[50%] border border-[rgba(255,255,255,.1)] rounded-full transform -translate-x-[50%] -translate-y-[50%]`,
                className
            )}
        ></div>
    );
}

function ConcentricCircles({ className }: { className?: string }) {
    return (
        <div className={cn("absolute top-0", className)}>
            {/* Smallest Circle */}
            <Circle className="h-[340px] w-[340px]" />
            {/* Medium Circle */}
            <Circle className="h-[460px] w-[460px]" />
            {/* Largest Circle */}
            <Circle className="h-[600px] w-[600px]" />
        </div>
    );
}

export default ConcentricCircles;
