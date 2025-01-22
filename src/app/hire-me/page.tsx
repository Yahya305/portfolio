import { NextPage } from "next";
import HireMeHeader from "./components/HireMeHeader";
import ConcentricCircles from "@components/ui/ConcentricCircles";
import ContactMeForm from "./components/ContactMeForm";

interface Props {}

const HireMePage: NextPage<Props> = () => {
    return (
        <div>
            <ConcentricCircles />
            <HireMeHeader />
            <ContactMeForm />
        </div>
    );
};

export default HireMePage;
