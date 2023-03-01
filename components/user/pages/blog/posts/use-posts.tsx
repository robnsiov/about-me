import { useState } from "react";
import BlogPostImpl from "../blog-post/types";

const usePosts = (blogs: Array<BlogPostImpl>) => {
  const [selected, setSelected] = useState("All");
  const setSelectedFilter = (filter: string) => {
    setSelected(filter);
  };
  return {
    selected,
    filtered: blogs.filter(({ category }) => {
      if (selected === "All") return true;
      return category === selected;
    }),
    setSelectedFilter,
  };
};

export default usePosts;
