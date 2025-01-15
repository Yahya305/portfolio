"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@lib/utils";

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
        value?: number;
    }
>(({ className, value, ...props }, ref) => (
    <div className="relative w-full">
        {/* Display the value as a label */}
        {value !== undefined && (
            <span className="absolute right-0 top-[-30px] text-sm font-medium text-secondary-foreground">
                {value}%
            </span>
        )}
        <ProgressPrimitive.Root
            ref={ref}
            className={cn(
                "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
                className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className="h-full flex-1 bg-primary-foreground transition-all"
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    </div>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
