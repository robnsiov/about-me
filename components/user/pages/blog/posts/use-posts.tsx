import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogPostImpl from "../blog-post/types";

const getViews = async (posts: Array<string>) => {
  const { data } = await axios({
    method: "GET",
    // method: "POST",
    url: "http://localhost:5000/views",
    // data: posts,
  });
  return data;
};

const usePosts = (blogs: Array<BlogPostImpl>) => {
  const [selected, setSelected] = useState("All");
  const [views, setViews] = useState<Array<number>>([]);

  const mutation = useMutation({
    mutationFn: getViews,
    onSuccess: (data) => {
      setViews(data);
    },
    onError: () => {
      const def = Array.from({ length: blogs.length }).fill(
        100
      ) as Array<number>;
      setViews(def);
    },
  });

  useEffect(() => {
    const ids = blogs.map(({ id }) => id);
    mutation.mutate(ids);
  }, []);

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
    views,
  };
};

export default usePosts;
