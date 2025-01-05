"use client";

import { useEffect, useState } from "react";
function NavSticker({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isSticky, setIsSticky] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // If scrolled down more than 72px, hide the navbar
            if (scrollTop > 72) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            // If scrolled down more than 150px, make it sticky
            setIsSticky(scrollTop > 150);

            // Update lastScrollTop for further calculations
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`top-0 left-0 w-full z-50 transition-transform duration-300 ${
                isSticky
                    ? "fixed translate-y-0"
                    : isVisible
                    ? "relative"
                    : "-translate-y-full"
            }`}
        >
            {children}
        </div>
    );
}

export default NavSticker;
