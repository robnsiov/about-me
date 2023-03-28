"use client";
import { useEffect } from "react";
import BlogViewCounter from "../../blog-view-counter/blog-view-counter";
import BlogViewImpl from "./types";
import useBlogView from "./use-blog-view";
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/atom-one-dark.css";

const BlogView = ({ slug }: BlogViewImpl) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  const { view } = useBlogView({ slug });
  return (
    <>
      <BlogViewCounter view={view} />
    </>
  );
};
export default BlogView;
