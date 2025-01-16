"use client";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";

export function AnimatedNumber({number}:{number:number}) {
    return (
        <div>
            <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                })}
                animateToNumber={number}
                fontStyle={{
                    fontSize: 40,
                }}
            />
        </div>
    );
}
