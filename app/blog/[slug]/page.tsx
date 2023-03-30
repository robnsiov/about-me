import { art } from "@/api/article/article";
import { arts } from "@/api/articles/articles";
import BlogDetailPage from "@/components/user/pages/blog/[slug]/blog-detail";
import { Metadata } from "next";
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

const BlogDetail = ({ params: { slug } }: BlogDetailImpl) => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <BlogDetailPage slug={slug} />
    </>
  );
};
export default BlogDetail;
