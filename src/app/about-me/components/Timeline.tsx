import React from "react";
import { educationList, experienceList } from "../../../data/About";
import Wrapper from "@components/Wrapper";

const Timeline: React.FC = () => {
    // Data arrays for education and experience

    const renderTimelineItems = (items: typeof educationList) =>
        items.map((item, index) => (
            <div
                key={index}
                className="relative p-5 border bg-card cursor-pointer hover:shadow-lg transition-all"
            >
                <span className="absolute w-4 h-4 rounded-full bg-primary border-2 border-primary-foreground -left-[37px] -top-2"></span>
                <div className="text-secondary-foreground ">
                    {item.duration}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground py-2">
                    {item.title}
                </h3>
                <p className="text-secondary-foreground text-sm">
                    {item.description}
                </p>
            </div>
        ));

    return (
        <Wrapper className="w-full min-h-screen bg-secondary flex justify-center items-center py-10">
            <main className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Education Section */}
                <section className="col">
                    <div className="text-left mb-5 md:mb-7">
                        <h4 className="text-primary-foreground">EDUCATION</h4>
                    </div>
                    <div className="border-l-[1px] border-secondary-foreground pl-7 pt-7 space-y-5">
                        {renderTimelineItems(educationList)}
                    </div>
                </section>

                {/* Experience Section */}
                <section className="col">
                    <div className="text-left mb-5 md:mb-7">
                        <h4 className="text-primary-foreground">EXPERIENCE</h4>
                    </div>
                    <div className="border-l-[1px] border-secondary-foreground pl-7 pt-7 space-y-5">
                        {renderTimelineItems(experienceList)}
                    </div>
                </section>
            </main>
        </Wrapper>
    );
};

export default Timeline;
