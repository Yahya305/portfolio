import Image from "next/image";
import Link from "next/link";
import { GoPencil } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { PiReadCvLogoLight } from "react-icons/pi";

interface PostListProps {
    posts: any[];
}

export default function BlogList({ posts }: PostListProps) {
    return (
        <div className="flex flex-col gap-10 my-10 w-full">
            {posts.map((blog, key) => {
                return (
                    <div
                        key={key}
                        className="bg-primary flex flex-col md:flex-row gap-10 p-6"
                    >
                        <div className="relative h-[250px] sm:h-[350px] md:w-[200px] md:h-[200px] lg:w-[130px] lg:h-[130px] xl:w-[180px] xl:h-[180px]">
                            <Image
                                src={blog.imgURL}
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
                            <div className="flex flex-wrap justify-between gap-8 items-center text-secondary-foreground text-sm xs:w-full sm:w-[450px]">
                                <div className="flex items-center gap-1">
                                    <PiReadCvLogoLight size={20} />
                                    <div>{blog.readTime}</div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <GoPencil size={20} />
                                    <div>{blog.platform}</div>
                                </div>
                                <Link
                                    href={blog.url}
                                    className="flex items-center gap-2 relative xs:p-2 sm:p-4 border rounded-full bg-background hover:bg-border"
                                >
                                    Read More <IoIosArrowForward size={15} />
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
