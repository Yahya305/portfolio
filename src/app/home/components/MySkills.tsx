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
                <h2>MERN Stack Developer</h2>
                <GetResumeButton />
            </div>
            <div className="w-full md:w-1/2">
                <ProgressBar title="React / Next JS" percentage={80} />
                <ProgressBar title="Node JS, Nest JS" percentage={75} />
                <ProgressBar title="Postgre SQL" percentage={70} />
                <ProgressBar title="Git / GitHub" percentage={95} />
                <ProgressBar title="Communication" percentage={75} />
            </div>
        </Wrapper>
    );
}
