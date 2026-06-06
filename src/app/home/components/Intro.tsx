import ConcentricCircles from "@components/ui/ConcentricCircles";
import Wrapper from "@components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { cn } from "@lib/utils";
import GetResumeButton from "@components/GetResumeButton";
import NameTypewriter from "./NameTypewriter";

function Section1({ className }: { className?: string }) {
    return (
        <div className={cn("", className)}>
            <h2 className="lg:text-[50px] xl:text-[70px]">
                Hello! I'm{" "}
                <span className="block lg:text-[70px] w-[420px] xl:w-[540px] xl:text-[90px]">
                    <NameTypewriter />
                </span>
            </h2>
            <p className="text-lg text-secondary-foreground lg:w-[320px] xl:w-[520px]">
                Full Stack Engineer and Technical Consultant helping
                businesses turn requirements into scalable web, mobile, AI,
                and automation solutions.
            </p>
            <GetResumeButton />
        </div>
    );
}
function Section2({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative flex w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[520px] md:h-[520px] lg:h-[680px] lg:w-[680px]  sm:mx-auto xs:mx-auto -translate-x-20  md:-translate-x-40",
                className
            )}
        >
            <Image
                src="/SidePoseNoBackground.png"
                fill
                className="object-cover"
                alt="Yahya Img"
            />
            <div className="absolute bottom-1 xs:-right-60 sm:-right-44 md:-right-36 lg:-right-14 lg:top-10 xl:-right-24 h-full w-[400px] overflow-hidden">
                <div className="relative w-[400px] ">
                    <Link
                        href="https://www.linkedin.com/in/yahya-salman-37aa29263/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit Yahya Salman's LinkedIn profile"
                        className="border border-[rgba(255,255,255,.1)] rounded-full absolute xs:top-[95px] xs:left-[100px] sm:top-[120px] sm:left-[160px] bg-background p-3 hover:bg-white hover:text-black"
                    >
                        <FaLinkedin size={25} />
                    </Link>
                    <Link
                        href="https://github.com/Yahya305"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit Yahya Salman's GitHub profile"
                        className="border border-[rgba(255,255,255,.1)] rounded-full absolute xs:top-[155px] xs:left-[175px] sm:top-[220px] sm:left-[270px] bg-background p-3 hover:bg-white hover:text-black"
                    >
                        <FaGithub size={25} />
                    </Link>
                    <Link
                        href="https://www.facebook.com/yahya.salman.3597"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit Yahya Salman's Facebook profile"
                        className="border border-[rgba(255,255,255,.1)] rounded-full absolute xs:top-[240px] xs:left-[210px] sm:top-[360px] sm:left-[290px] bg-background p-3 hover:bg-white hover:text-black"
                    >
                        <FaFacebookF size={25} />
                    </Link>
                    <ConcentricCircles
                        className="-z-10 top-[300px]  left-[50px] sm:top-[350px] md:left-[90px]"
                        variant="advanced"
                    />
                </div>
            </div>
        </div>
    );
}

function Intro() {
    return (
        <div className="overflow-hidden">
            <Wrapper className="flex xs:flex-col-reverse xs:mt-2 lg:flex-row lg:min-w-max lg:mt-[80px]">
                <Section1 className="" />
                <Section2 className="" />
            </Wrapper>
            <div className="relative">
                <ConcentricCircles />
            </div>
        </div>
    );
}

export default Intro;
