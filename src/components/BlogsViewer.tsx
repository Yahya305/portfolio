import React from "react";
import { blogs } from "../data/Blogs";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { PiReadCvLogoLight } from "react-icons/pi";
import { GoPencil } from "react-icons/go";

export default function BlogsViewer() {
    return (
        <div className="flex flex-col gap-10 my-10">
            {blogs.slice(0,3).map((blog, key) => {
                return (
                    <div
                        key={key}
                        className="bg-primary flex flex-col md:flex-row gap-10 p-6"
                    >
                        <div className="relative h-[350px] md:w-[200px] md:h-[200px] lg:w-[130px] lg:h-[130px] xl:w-[180px] xl:h-[180px]">
                            <Image
                                src="https://htmldemo.net/lendex/lendex/assets/images/blog/blog-feed-img-1.jpg"
                                fill
                                alt="My Img"
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex flex-col gap-4 md:gap-0 justify-between ">
                            <div>
                                <span>
                                    {blog.category} &nbsp;&nbsp;- &nbsp;&nbsp;
                                </span>
                                <span className="text-secondary-foreground">
                                    {blog.date}
                                </span>
                            </div>
                            <h4>{blog.title}</h4>
                            <div className="flex justify-between items-center text-secondary-foreground text-sm xs:w-[400px] sm:w-[450px]">
                                <div className="flex items-center gap-1">
                                    <PiReadCvLogoLight />
                                    <div>{blog.readTime}</div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <GoPencil />
                                    <div>{blog.platform}</div>
                                </div>
                                <button className="flex items-center gap-2 relative p-4 border rounded-[50px] bg-background hover:bg-border">
                                    Read More <IoIosArrowForward size={15} />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
