import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "./ui/sheet";
import { SlClose } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import { routes } from "../data/Routes";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export function SidebarMain() {
    return (
        <>
            <SheetContent defaultCloseBtn={false}>
                <SheetHeader>
                    <SheetClose>
                        <SlClose size={30} />
                    </SheetClose>
                </SheetHeader>
                <div className="flex flex-col gap-8 my-10">
                    {routes.map((item, key) => {
                        return (
                            <Link
                                href={item.href}
                                className="flex  items-center justify-between"
                                key={key}
                            >
                                <div>{item.title}</div>
                                <IoIosArrowForward size={25} />
                            </Link>
                        );
                    })}
                    <div className="flex justify-center mt-10 gap-5">
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
                            href="mailto:saimyahya47@gmail.com"
                            className="p-5 border rounded-full"
                        >
                            <MdOutlineMail />
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </>
    );
}
