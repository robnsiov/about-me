import { arts } from "@/api/articles/articles";
import BlogDetailPage from "@/components/user/pages/blog/[slug]/blog-detail";
import BlogDetailImpl from "./types";

export async function generateStaticParams() {
  const res = await arts();
  return res.map(({ slug }) => ({
    slug,
  }));
}

const BlogDetail = ({ params: { slug } }: BlogDetailImpl) => {
  return (
    <>
      <BlogDetailPage slug={slug} />
    </>
  );
};
export default BlogDetail;
