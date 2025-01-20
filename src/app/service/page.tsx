import { NextPage } from "next";
import ServicesHeader from "./ServicesHeader";
import Services from "./Services";
import ConcentricCircles from "@components/ui/ConcentricCircles";
import Figures from "@components/Figures";

interface Props {}

const Page: NextPage<Props> = ({}) => {
    return (
        <>
            <ConcentricCircles />
            <ServicesHeader />
            <Services />
            <Figures />
        </>
    );
};

export default Page;
