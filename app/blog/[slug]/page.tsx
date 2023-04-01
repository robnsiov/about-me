import { Metadata } from "next";

import { art } from "@/api/article/article";
import { arts } from "@/api/articles/articles";
import BlogDetailPage from "@/components/user/pages/blog/[slug]/blog-detail";
import BlogDetailImpl from "./types";

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { title } = await art(slug);
  return { title };
}
export async function generateStaticParams() {
  const res = await arts();
  return res.map(({ slug }) => ({
    slug,
  }));
}

const BlogDetail = async ({ params: { slug } }: BlogDetailImpl) => {
  const article = await art(slug);
  return (
    <>
      <BlogDetailPage article={article} />
    </>
  );
};
export default BlogDetail;
