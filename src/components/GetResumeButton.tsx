import { cn } from "@lib/utils";
import React from "react";
import { FiDownload } from "react-icons/fi";

export default function GetResumeButton({ className }: { className?: string }) {
    return (
        <button
            className={cn(
                "flex items-center gap-2 relative p-5 md:p-8 border rounded-[50px] bg-background hover:bg-border my-10 z-10",
                className
            )}
        >
            Get Resume <FiDownload size={20} />
        </button>
    );
}
