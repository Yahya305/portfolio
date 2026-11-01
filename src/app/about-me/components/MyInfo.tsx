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
                    I'm Yahya Salman, a Full Stack Software Engineer and
                    Technical Consultant with 4+ years of experience building
                    enterprise and consumer web, mobile, and AI products. I
                    take products from early ideas to reliable launches,
                    including work for FinTech and maritime operations teams.
                </p>
                <p>
                    My strongest work sits at the backend and architecture
                    layer: designing scalable APIs, cloud-native systems, data
                    flows, and real-time experiences with Node.js, NestJS,
                    FastAPI, PostgreSQL, Redis, and AWS. I care about the
                    details that make systems dependable in production,
                    including performance engineering, load testing, secure
                    access control, and maintainable modular design.
                </p>
                <p>
                    I also work directly with clients and stakeholders as a
                    technical consultant and business analyst. That means
                    clarifying requirements, mapping workflows, evaluating
                    trade-offs, and turning business goals into practical
                    technical roadmaps that teams can execute with confidence.
                </p>
                <p>
                    My recent work includes retrieval-augmented generation,
                    LLM agents, multi-agent systems, and automation workflows
                    designed for real business use cases. I enjoy the same
                    structured problem-solving outside engineering as a
                    competitive chess player.
                </p>
                <div>
                    <GetResumeButton className="md:hidden mx-auto" />
                </div>
            </div>
        </Wrapper>
    );
}
