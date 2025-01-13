import { cn } from "@lib/utils";
import React from "react";

function Circle({
    className,
    variant,
}: {
    className?: string;
    variant?: "default" | "advanced";
}) {
    return (
        <div
            className={cn(
                `absolute top-[50%] left-[50%] border border-[rgba(255,255,255,.1)] rounded-full transform -translate-x-[50%] -translate-y-[50%]`,
                className,
                variant === "advanced" ? "border-secondary-foreground" : ""
            )}
        >
            {/* {variant === "advanced" && (
                <div className="relative hover:bg-white">

                </div>
            )} */}
        </div>
    );
}

type PropType = { className?: string; variant?: "default" | "advanced" };
function ConcentricCircles({ className, variant = "default" }: PropType) {
    if (variant === "default") {
        return (
            <div className={cn("xs:hidden md:block absolute top-0", className)}>
                {/* Smallest Circle */}
                <Circle className="xs:h-[300px] xs:w-[300px] sm:h-[340px] sm:w-[340px]" />
                {/* Medium Circle */}
                <Circle className="xs:h-[420px] xs:w-[420px] sm:h-[460px] sm:w-[460px]" />
                {/* Largest Circle */}
                <Circle className="xs:h-[560px] xs:w-[560px] sm:h-[600px] sm:w-[600px]" />
            </div>
        );
    } else if (variant === "advanced") {
        return (
            <div className={cn("absolute top-0", className)}>
                {/* Smallest Circle */}
                <Circle className="xs:h-[300px] xs:w-[300px] sm:h-[340px] sm:w-[340px]" />
                {/* Medium Circle */}
                <Circle
                    className="xs:h-[420px] xs:w-[420px] sm:h-[460px] sm:w-[460px]"
                    variant="advanced"
                />
                {/* Largest Circle */}
                <Circle className="xs:h-[560px] xs:w-[560px] sm:h-[600px] sm:w-[600px]" />
            </div>
        );
    }
}

export default ConcentricCircles;
