import Navbar from "@components/Navbar";
import ConcentricCircles from "@components/ui/ConcentricCircles";
import React from "react";
import Intro from "./components/Intro";
import MyServices from "./components/MyServices";
import MySkills from "./components/MySkills";
import Figures from "./components/Figures";
import Portfolio from "./components/Portfolio";

function HomePage() {
    return (
        <>
            <Navbar />
            <ConcentricCircles />
            <Intro />
            <MyServices />
            <MySkills />
            <Figures />
            <Portfolio />
        </>
    );
}

export default HomePage;
