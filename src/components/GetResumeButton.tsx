import { cn } from "@lib/utils";
import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";

export default function GetResumeButton({ className }: { className?: string }) {
    return (
        <Link
            href={"/Yahya_Salman_Resume.pdf"}
            className={cn(
                "flex items-center gap-2 relative p-5 md:p-8 border rounded-[50px] bg-background hover:bg-border my-10 z-10 max-w-max",
                className
            )}
        >
            Get Resume <FiDownload size={20} />
        </Link>
    );
}
