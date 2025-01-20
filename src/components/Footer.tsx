import React from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";
import ConcentricCircles from "./ui/ConcentricCircles";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Separator } from "./ui/separator";
import { PiCopyright } from "react-icons/pi";

export default function Footer() {
    return (
        <>
            <Wrapper className="relative p-16 overflow-hidden">
                <ConcentricCircles className="hidden md:block -top-5 -left-14" />
                <ConcentricCircles className="hidden md:block -top-5 -right-14" />
                <div className="gap-10">
                    <div className="flex flex-col items-center">
                        <h2 className="">My Socials</h2>
                        <div>
                            <Link
                                href="tel:+923313420422"
                                className="flex gap-5 items-center my-8"
                            >
                                <div className="border rounded-full p-4 sm:p-7">
                                    <FaWhatsapp size={25} />
                                </div>
                                <div className="text-lg sm:text-xl">
                                    +923313420422
                                </div>
                            </Link>
                            <Link
                                href="mailto:saimyahya47@gmail.com"
                                className="flex gap-5 items-center my-8"
                            >
                                <div className="border rounded-full p-4 sm:p-7">
                                    <MdOutlineMail size={25} />
                                </div>
                                <div className="text-lg sm:text-xl">
                                    saimyahya47@gmail.com
                                </div>
                            </Link>
                            <div className="flex justify-between gap-5">
                                <Link
                                    href="https://www.linkedin.com/in/yahya-salman-37aa29263/"
                                    className="p-5 border rounded-full"
                                >
                                    <FaLinkedin />
                                </Link>
                                <Link
                                    href="https://github.com/Yahya305"
                                    className="p-5 border rounded-full"
                                >
                                    <FaGithub />
                                </Link>
                                <Link
                                    href="https://www.facebook.com/yahya.salman.3597"
                                    className="p-5 border rounded-full"
                                >
                                    <FaFacebookF />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <Separator />
            <p className="text-center text-sm flex justify-center items-center gap-2 text-secondary-foreground py-5">
                <PiCopyright size={20} />
                {new Date().getFullYear()} Syed Yahya Salman. All rights reserved.
            </p>
        </>
    );
}
