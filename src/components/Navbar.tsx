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
            <Wrapper className="bg-primary">
                <NavigationMenu className="w-full py-6 bg-primary text-primary-foreground">
                    <NavigationMenuList className="flex gap-10">
                        {routes.map(({ title, href }, key) => (
                            <NavigationMenuItem key={key}>
                                <Link href={href}>{title}</Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                    <NavigationMenuList className="flex justify-end gap-6 ">
                        <NavigationMenuItem>
                            <Link href="/hire-me">Hire Me</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </Wrapper>
        </NavSticker>
    );
}

export default Navbar;
