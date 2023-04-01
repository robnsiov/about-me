import { arts } from "@/api/articles/articles";
import BlogPage from "@/components/user/pages/blog/blog";
import { constants } from "@/constants/constants";
export function generateMetadata() {
  return { title: `Blog - ${constants.fullName}` };
}

const Blog = async () => {
  const blogs = await arts();
  return (
    <>
      <BlogPage blogs={blogs} />
    </>
  );
};
export default Blog;
