import ConcentricCircles from "@components/ui/ConcentricCircles";
import Wrapper from "@components/Wrapper";
import Image from "next/image";
import React, { Fragment } from "react";

function Section1() {
    return (
        <div>
            <h2>
                Hello! I'm <div className="text-[90px]">Yahya Salman</div>
            </h2>
            <div className="text-lg text-secondary-foreground">
                UI/UX Designer specializing in Shopify & Webflow.
            </div>
            <button className="p-8 border rounded-[50px] hover:bg-border my-10">Get Resume</button>
        </div>
    );
}
function Section2() {
    return (
        <div className="relative flex">
            <Image
                src="/Yahya_Salman_Img2.png"
                width={500}
                height={200}
                alt="Yahya Img"
            />
            <div className="absolute bottom-1 -right-36 h-full w-[400px] overflow-hidden">
                <div className="relative w-[400px] ">
                    <ConcentricCircles className="left-[90px] -z-10 top-[350px]" />
                </div>
            </div>
        </div>
    );
}

function Intro() {
    return (
        <div className="overflow-hidden">
            <Wrapper className="flex min-w-max mt-[80px]">
                <Section1 />
                <Section2 />
            </Wrapper>
            <div className="relative">
                <ConcentricCircles />
            </div>
        </div>
    );
}

export default Intro;
