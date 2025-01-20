import { cn } from "@lib/utils";
import Image from "next/image";
import React from "react";

export default function CardProjects({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "w-full rounded-md flex flex-col gap-9",
                className
            )}
        >
            <div className="bg-card xs:h-[400px] sm:h-[450px] flex justify-center items-end">
                <div className="relative w-[350px] h-[350px] overflow-hidden">
                    <Image
                        src="/demo_proj_1.webp"
                        alt="Project Image"
                        objectFit="cover"
                        objectPosition="top"
                        fill
                    />
                </div>
            </div>
            <div>
                <h4>Givest - Non Profit</h4>
                <span className="text-secondary-foreground">
                    Chairty / Fund Rising / Non Profit
                </span>
            </div>
        </div>
    );
}
