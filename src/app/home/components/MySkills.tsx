import GetResumeButton from "@components/GetResumeButton";
import Wrapper from "@components/Wrapper";
import React from "react";
import ProgressBar from "./ProgressBar";

export default function MySkills() {
    return (
        <Wrapper className="mt-20 flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <span className="text-secondary-foreground text-lg">
                    || &nbsp;&nbsp;&nbsp; My Skills
                </span>
                <h2>Full Stack Engineering & Technical Consulting</h2>
                <GetResumeButton />
            </div>
            <div className="w-full md:w-1/2">
                <ProgressBar title="Backend Architecture & APIs" percentage={90} />
                <ProgressBar title="Cloud, DevOps & Performance" percentage={80} />
                <ProgressBar title="Applied AI, RAG & Agent Systems" percentage={85} />
                <ProgressBar title="Web & Mobile Product Delivery" percentage={80} />
                <ProgressBar title="Client Discovery & Technical Roadmaps" percentage={85} />
            </div>
        </Wrapper>
    );
}
