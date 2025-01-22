import { blogs } from "../../data/Blogs";

/**
 * Returns a subset of blogs for the specified page.
 *
 * @param blogs - Array of blog objects.
 * @param pageNumber - Current page number (1-based).
 * @param blogsPerPage - Number of blogs to display per page.
 * @returns The blogs for the given page.
 */
export function getBlogsForPage(
    inputBlogs: typeof blogs,
    pageNumber: number,
    blogsPerPage: number
) {
    const startIndex = (pageNumber - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;

    return inputBlogs.slice(startIndex, endIndex);
}
