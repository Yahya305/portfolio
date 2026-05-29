import GetResumeButton from "@components/GetResumeButton";
import Wrapper from "@components/Wrapper";
import Image from "next/image";
import React from "react";

export default function MyInfo() {
    return (
        <Wrapper className="bg-secondary py-20 flex flex-col md:flex-row gap-10">
            <div className="relative w-[270px] h-[400px] mx-auto md:mx-0 md:w-[270px] md:h-[400px]">
                <Image fill src={"/My_Full_Pic.jpg"} alt="Yahya Salman " />
                <GetResumeButton className="absolute hidden md:flex top-[380px] left-10" />
            </div>
            <div className="flex flex-col gap-5 flex-1">
                <p>
                    I'm Yahya Salman, a Full Stack Engineer focused on building
                    reliable, production-ready software across web, mobile, and
                    backend platforms. I work primarily in the
                    JavaScript/TypeScript ecosystem, using technologies like
                    React, React Native, Node.js, and NestJS to turn business
                    requirements into scalable digital products while working
                    closely with clients to shape practical, outcome-driven
                    solutions.
                </p>
                <p>
                    A strong part of my work centers on application
                    architecture, secure access control, and complex business
                    workflows. I've designed and implemented RBAC and ABAC
                    systems, multi-role platforms, and admin experiences that
                    need to balance security, usability, and long-term
                    maintainability. I also operate as a technical consultant,
                    helping clients clarify requirements, map business needs,
                    and translate ideas into clear technical roadmaps and
                    execution plans.
                </p>
                <p>
                    Beyond feature delivery, I care deeply about system
                    clarity. I lean on clean architecture principles, strong
                    backend design, and visual documentation such as ERDs, DFDs,
                    and technical flows to align teams, reduce ambiguity, and
                    move projects forward with confidence.
                </p>
                <p>
                    My work also extends into AI and automation, where I've
                    delivered LLM-powered tools, agentic workflows, and
                    API-driven systems for real business use cases. Outside of
                    engineering, I enjoy the strategic side of problem-solving
                    through chess, and 1. e4 is still my opening of choice.
                </p>
                <div>
                    <GetResumeButton className="md:hidden mx-auto" />
                </div>
            </div>
        </Wrapper>
    );
}
