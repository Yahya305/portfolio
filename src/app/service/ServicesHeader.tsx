import ConcentricCircles from "@components/ui/ConcentricCircles";
import React from "react";
import Wrapper from "@components/Wrapper";

export default function ServicesHeader() {
    return (
        <Wrapper className="relative overflow-hidden">
            <ConcentricCircles className="-z-10 top-[300px] right-[50px] sm:top-[350px] md:right-[10px]" />
            <div className="py-20 flex flex-col items-center">
                <h2 className="text-center">My Services</h2>
                <p className="w-5/6 sm:w-3/4 text-center text-secondary-foreground">
                    Being a Software Engineer, following are my areas of
                    expertise.
                </p>
            </div>
        </Wrapper>
    );
}
