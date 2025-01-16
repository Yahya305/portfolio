import ConcentricCircles from "@components/ui/ConcentricCircles";
import Wrapper from "@components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { cn } from "@lib/utils";
import GetResumeButton from "@components/GetResumeButton";
import NameTypewriter from "./NameTypewriter";

function Section1({ className }: { className?: string }) {
    return (
        <div className={cn("", className)}>
            <h2 className="lg:text-[50px] xl:text-[70px]">
                Hello! I'm{" "}
                <div className="lg:text-[70px] w-[420px] xl:w-[540px] xl:text-[90px]">
                    <NameTypewriter />
                </div>
            </h2>
            <div className="text-lg text-secondary-foreground lg:w-[270px] xl:w-[439px]">
                UI/UX Designer specializing in Shopify & Webflow.
            </div>
            <GetResumeButton />
        </div>
    );
}
function Section2({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative flex w-[350px] sm:w-[400px] lg:w-[500px] sm:mx-auto xs:ml-[20px]",
                className
            )}
        >
            <Image
                src="/Yahya_Salman_Img2.png"
                width={500}
                height={200}
                alt="Yahya Img"
            />
            <div className="absolute bottom-1 xs:-right-44 sm:-right-36 h-full w-[400px] overflow-hidden">
                <div className="relative w-[400px] ">
                    <Link
                        href="/"
                        className="border border-[rgba(255,255,255,.1)] rounded-full absolute xs:top-[135px] xs:left-[160px] sm:top-[120px] sm:left-[160px] bg-background p-3 hover:bg-white hover:text-black"
                    >
                        <FaLinkedin size={25} />
                    </Link>
                    <Link
                        href="/"
                        className="border border-[rgba(255,255,255,.1)] rounded-full absolute xs:top-[230px] xs:left-[250px] sm:top-[220px] sm:left-[270px] bg-background p-3 hover:bg-white hover:text-black"
                    >
                        <FaGithub size={25} />
                    </Link>
                    <Link
                        href="/"
                        className="border border-[rgba(255,255,255,.1)] rounded-full absolute xs:top-[350px] xs:left-[270px] sm:top-[360px] sm:left-[290px] bg-background p-3 hover:bg-white hover:text-black"
                    >
                        <FaFacebookF size={25} />
                    </Link>
                    <ConcentricCircles
                        className="left-[90px] -z-10 top-[350px]"
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
