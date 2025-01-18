import BlogsViewer from "@components/BlogsViewer";
import Wrapper from "@components/Wrapper";
import React from "react";

export default function MyBlogs() {
    return (
        <Wrapper className="py-20 bg-secondary flex flex-col items-center">
            <span className="text-lg text-secondary-foreground">
                || &nbsp;&nbsp;&nbsp; Latest Blog Posts
            </span>
            <h2>My Thoughts & Ideas</h2>
            <BlogsViewer />
        </Wrapper>
    );
}
