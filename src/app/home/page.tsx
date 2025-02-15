import ConcentricCircles from "@components/ui/ConcentricCircles";
import React from "react";
import Intro from "./components/Intro";
import MyServices from "./components/MyServices";
import MySkills from "./components/MySkills";
import Figures from "../../components/Figures";
import Portfolio from "./components/Portfolio";
import Testimoials from "./components/Testimoials";
import MyBlogs from "./components/Blogs";

function HomePage() {
    return (
        <>
            <ConcentricCircles />
            <Intro />
            <MyServices />
            <MySkills />
            <Figures />
            <Portfolio />
            {/* <Testimoials /> */}
            <MyBlogs />
        </>
    );
}

export default HomePage;
