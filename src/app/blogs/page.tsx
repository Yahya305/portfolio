import { NextPage } from "next";
import BlogsHeader from "./components/BlogsHeader";
import ConcentricCircles from "@components/ui/ConcentricCircles";
import Blogs from "./components/Blogs";

interface PageProps {
    searchParams: { [key: string]: string | undefined };
}

const Page: NextPage<PageProps> = ({ searchParams }: PageProps) => {
    return (
        <div>
            <ConcentricCircles />
            <BlogsHeader />
            <Blogs searchParams={searchParams} />
        </div>
    );
};

export default Page;
