import { NextPage } from "next";
import Timeline from "./components/Timeline";
import AboutHeader from "./components/AboutHeader";
import ConcentricCircles from "@components/ui/ConcentricCircles";
import MyInfo from "./components/MyInfo";

interface Props {}

const AboutPage: NextPage<Props> = ({}) => {
    return (
        <div>
            <ConcentricCircles />
            <AboutHeader />
            <MyInfo />
            <Timeline />
        </div>
    );
};

export default AboutPage;
