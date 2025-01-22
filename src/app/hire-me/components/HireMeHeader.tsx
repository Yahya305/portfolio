import ConcentricCircles from "@components/ui/ConcentricCircles";
import Wrapper from "@components/Wrapper";
import React from "react";

export default function HireMeHeader() {
    return (
        <Wrapper className="relative overflow-hidden">
            <ConcentricCircles className="-z-10 top-[300px] right-[50px] sm:top-[350px] md:right-[10px]" />
            <div className="py-20 flex flex-col items-center">
                <h2>Hire Me</h2>
                <p className="w-5/6 sm:w-3/4 text-center text-secondary-foreground">
                    Let's Build Something Extraordinary Together!
                </p>
            </div>
        </Wrapper>
    );
}
