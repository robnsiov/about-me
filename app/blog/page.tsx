import BlogPage from "@/components/user/pages/blog/blog";
import { constants } from "@/constants/constants";
export function generateMetadata() {
  return { title: `Blog - ${constants.fullName}` };
}

const Blog = () => {
  return (
    <>
      <BlogPage />
    </>
  );
};
export default Blog;
