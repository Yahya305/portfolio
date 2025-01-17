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
                <h2>My Special Skill Field Here.</h2>
                <GetResumeButton />
            </div>
            <div className="w-full md:w-1/2">
                <ProgressBar title="Communication" percentage={75} />
                <ProgressBar title="Communication" percentage={70} />
                <ProgressBar title="Communication" percentage={80} />
                <ProgressBar title="Communication" percentage={95} />
            </div>
        </Wrapper>
    );
}
