import GetResumeButton from "@components/GetResumeButton";
import Wrapper from "@components/Wrapper";
import Image from "next/image";
import React from "react";

export default function MyInfo() {
    return (
        <Wrapper className="bg-secondary py-20 flex flex-col md:flex-row gap-10">
            <div className="relative w-[270px] h-[400px] mx-auto md:mx-0 md:w-[270px] md:h-[400px]">
                <Image fill src={"/My_Full_Pic.jpg"} alt="Yahya Salman Pic" />
                <GetResumeButton className="absolute hidden md:flex top-[380px] left-10" />
            </div>
            <div className="flex flex-col gap-5 flex-1">
                <p>
                    I'm Yahya Salman, a passionate Full Stack Developer
                    specializing in the MERN Stack and proficient in frameworks
                    like NestJS. My expertise lies in building applications with
                    robust role-based and attribute-based access control
                    systems, often crafting separate consoles tailored to
                    diverse user roles.
                </p>
                <p>
                    I thrive on clarity and efficiency, adhering to MVC or Clean
                    Architecture principles for clean, maintainable codebases.
                    My knack for visual communication sets me apart—I use
                    diagrams like DFDs, ERDs, and use case diagrams to simplify
                    complex ideas for both technical and non-technical
                    audiences.
                </p>
                <p>
                    My journey also extends into the world of AI, where I've
                    built GPT wrappers leveraging various LLMs and developed an
                    AI Agent using Dialogflow. Currently, I'm diving into the
                    exciting realm of DevOps, further expanding my skill set.
                </p>
                <p>
                    Outside of work, you'll find me sharpening my strategy as a
                    chess enthusiast—my favorite opening is the classic 1. e4.
                    Let's connect and create something remarkable together!
                </p>
                <div>

                <GetResumeButton className="md:hidden mx-auto" />
                </div>
            </div>
        </Wrapper>
    );
}
