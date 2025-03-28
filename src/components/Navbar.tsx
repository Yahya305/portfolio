import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "./ui/navigation-menu";
import Wrapper from "./Wrapper";
import NavSticker from "./ui/NavSticker";
import { SheetTrigger } from "./ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { routes } from "../data/Routes";
import { FaAnglesRight } from "react-icons/fa6";

function Navbar() {


    return (
        <NavSticker>
            <Wrapper className="md:bg-transparent">
                <NavigationMenu className="w-full py-3 md:py-6 ">
                    <NavigationMenuList className="hidden gap-10 md:flex text-secondary-foreground ">
                        {routes.map(({ title, href }, key) => (
                            <NavigationMenuItem key={key}>
                                <Link
                                    href={href}
                                    className="hover:text-primary-foreground"
                                >
                                    {title}
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                    <NavigationMenuList className="justify-end hidden gap-6 md:flex text-primary-foreground">
                        <NavigationMenuItem>
                            <Link className="border p-3 px-5 rounded-full flex items-center gap-3 hover:bg-border" href="/hire-me">Hire Me <FaAnglesRight /></Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    {/* Sidebar */}
                    <SheetTrigger className="xs:block md:hidden">
                        <GiHamburgerMenu size={30} />
                    </SheetTrigger>
                </NavigationMenu>
            </Wrapper>
        </NavSticker>
    );
}

export default Navbar;
