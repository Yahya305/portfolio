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

function Navbar() {
    const routes = [
        {
            title: "Home",
            href: "/home",
        },
        {
            title: "Services",
            href: "/services",
        },
        {
            title: "Blogs",
            href: "/blogs",
        },
        {
            title: "Contact",
            href: "/contact-me",
        },
    ];

    return (
        <NavSticker>
            <Wrapper className="bg-secondary md:bg-transparent">
                <NavigationMenu className="w-full py-6 ">
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
                            <Link href="/hire-me">Hire Me</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <SheetTrigger className="xs:block md:hidden">
                        <GiHamburgerMenu size={35} />
                    </SheetTrigger>
                </NavigationMenu>
            </Wrapper>
        </NavSticker>
    );
}

export default Navbar;
