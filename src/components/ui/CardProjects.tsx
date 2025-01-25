import { cn } from "@lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardProjects({
    className,
    title,
    description,
    url,
    imageURL,
}: {
    className?: string;
    title: string;
    description: string;
    url: string;
    imageURL: string;
}) {
    return (
        <div className={cn("w-full rounded-md flex flex-col gap-9", className)}>
            <div className="bg-card xs:h-[400px] sm:h-[450px] flex justify-center items-end">
                <div className="relative w-[350px] h-[350px] overflow-hidden">
                    <Link href={url}>
                        <Image
                            // src="/demo_proj_1.webp"
                            src={imageURL}
                            alt="Project Image"
                            objectFit="cover"
                            objectPosition="top"
                            fill
                        />
                    </Link>
                </div>
            </div>
            <div>
                <h4>{title}</h4>
                <span className="text-secondary-foreground">{description}</span>
            </div>
        </div>
    );
}
