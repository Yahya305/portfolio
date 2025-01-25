import { AnimatedNumber } from "@components/ui/NumberAnimation";
import Wrapper from "@components/Wrapper";
import { FaRegCalendarDays, FaRegUser } from "react-icons/fa6";
import React from "react";
import { PiGear } from "react-icons/pi";

function Stats({
    number,
    title,
    suffix,
    logo,
}: {
    number: number;
    title: string;
    suffix: string;
    logo: React.ReactNode;
}) {
    return (
        <div className="flex items-center gap-10 w-min">
            <div className="p-5 border rounded-md hover:bg-primary">{logo}</div>
            <div className="min-w-max">
                <div className="flex items-center gap-1 text-4xl">
                    <AnimatedNumber from={0} to={number} />
                    {suffix}
                </div>
                <div className="text-secondary-foreground mt-4">{title}</div>
            </div>
        </div>
    );
}

export default function Figures() {
    return (
        <Wrapper className="py-32 bg-secondary/30">
            <div className="flex flex-col gap-28 justify-between items-center md:gap-0 md:flex-row">
                <Stats
                    number={15}
                    suffix="+"
                    title="Happy Clients"
                    logo={<FaRegUser size={25} />}
                />
                <Stats
                    number={30}
                    suffix="+"
                    title="Project Complete"
                    logo={<PiGear size={25} />}
                />
                <Stats
                    number={2}
                    suffix="+"
                    title="Year Of Experience"
                    logo={<FaRegCalendarDays size={25} />}
                />
            </div>
        </Wrapper>
    );
}
