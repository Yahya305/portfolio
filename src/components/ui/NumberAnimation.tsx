"use client";
import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
    from: number;
    to: number;
}

export function AnimatedNumber({ from, to }: AnimatedNumberProps) {
    const nodeRef = useRef<HTMLParagraphElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const node = nodeRef.current;

        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect(); // Stop observing once triggered
                }
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const node = nodeRef.current;

        if (isInView && node) {
            const controls = animate(from, to, {
                duration: 1,
                onUpdate(value) {
                    node.textContent = value.toFixed(0);
                },
            });

            return () => controls.stop();
        }
    }, [from, to, isInView]);

    return <p ref={nodeRef} />;
}
