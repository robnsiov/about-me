import PageContainer from "../../page-container/page-container";
import Posts from "./posts/posts";

async function getData() {
  const res = await fetch("http://localhost:5000/blogs", { cache: "no-store" });
  if (!res.ok) {
    return [];
  }

  return res.json();
}

const BlogPage = async () => {
  const blogs = await getData();
  console.log(blogs);

  return (
    <>
      <PageContainer className="items-start flex-col">
        <div className="w-full flex justify-start items-start flex-col">
          <h1 className="text-5xl font-bold tracking-tighter text-black dark:text-white md:text-3xl">
            Blog
          </h1>
        </div>
        <Posts blogs={blogs} />
      </PageContainer>
    </>
  );
};
export default BlogPage;
