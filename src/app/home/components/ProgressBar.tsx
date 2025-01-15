import { Progress } from "@components/ui/progress";
import React from "react";

export default function ProgressBar({
    title,
    percentage,
}: {
    title: string;
    percentage: number;
}) {
    return (
        <div className="p-10 bg-secondary mb-6">
            <h5 className="text-secondary-foreground mb-5">{title}</h5>
            <Progress value={percentage} />
        </div>
    );
}
