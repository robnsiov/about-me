import { arts } from "@/api/articles/articles";
import PageContainer from "../../page-container/page-container";
import Posts from "./posts/posts";

const BlogPage = async () => {
  const blogs = await arts();

  return (
    <>
      <PageContainer className="items-start flex-col">
        <div className="w-full flex justify-start items-start flex-col">
          <h1 className="text-5xl font-bold tracking-tighter text-black dark:text-white md:text-3xl relative z-10">
            Blog
          </h1>
        </div>
        <Posts blogs={blogs} />
      </PageContainer>
    </>
  );
};
export default BlogPage;
