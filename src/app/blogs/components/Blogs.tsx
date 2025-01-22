// import { fetchPosts } from '@/lib/api';
import { PaginationWithLinks } from "@components/PaginationWithLinks";
import BlogList from "./BlogList";
import { blogs } from "../../../data/Blogs";
import { getBlogsForPage } from "@lib/utils/fetchBlogs";
import Wrapper from "@components/Wrapper";

interface BlogsProps {
    searchParams: { [key: string]: string | undefined };
}

export default async function Blogs({ searchParams }: BlogsProps) {
    const currentPage = parseInt((searchParams.page as string) || "1");
    const postsPerPage = parseInt((searchParams.pageSize as string) || "5");

    //   const { posts, totalPosts } = await fetchPosts(currentPage, postsPerPage);
    const pageBlogs = getBlogsForPage(blogs, currentPage, postsPerPage);

    return (
        <Wrapper className="py-20 bg-secondary flex flex-col items-center">
            <BlogList posts={pageBlogs} />
            <div className="mt-8">
                <PaginationWithLinks
                    page={currentPage}
                    pageSize={postsPerPage}
                    totalCount={blogs.length}
                    pageSizeSelectOptions={{
                        pageSizeOptions: [5, 10, 25, 50],
                    }}
                />
            </div>
        </Wrapper>
    );
}
