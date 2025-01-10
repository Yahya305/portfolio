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
            <Wrapper className="bg-transparent">
                <NavigationMenu className="w-full py-6 ">
                    <NavigationMenuList className="flex gap-10 text-secondary-foreground">
                        {routes.map(({ title, href }, key) => (
                            <NavigationMenuItem key={key}>
                                <Link href={href} className="hover:text-primary-foreground">{title}</Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                    <NavigationMenuList className="flex justify-end gap-6 text-primary-foreground">
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
