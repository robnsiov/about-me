"use client";
import BlogViewCounter from "../../blog-view-counter/blog-view-counter";
import BlogViewImpl from "./types";
import useBlogView from "./use-blog-view";

const BlogView = ({ id }: BlogViewImpl) => {
  const { view } = useBlogView({ id });
  return (
    <>
      <BlogViewCounter view={view} />
    </>
  );
};
export default BlogView;
