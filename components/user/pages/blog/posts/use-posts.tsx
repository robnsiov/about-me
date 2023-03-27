import { Articles } from "@/api/types";
import { constants } from "@/constants/constants";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { type } from "os";
import { useEffect, useState } from "react";

type Views = Array<number>;

const getViews = async () => {
  const { data } = await axios<Array<{ view: number }>>({
    baseURL: constants.baseURL,
    url: constants.user.articlesDetail(),
  });
  return data;
};

const usePosts = (blogs: Articles) => {
  const [selected, setSelected] = useState("All");
  const [views, setViews] = useState<Views>([]);

  const mutation = useMutation({
    mutationFn: getViews,
    onSuccess: (data) => {
      const arrayOfViews: Views = [];
      data.map(({ view }) => arrayOfViews.push(view ?? 100));
      setViews(arrayOfViews);
    },
    onError: () => {
      const arrayOfViews = Array.from({ length: blogs.length }).fill(100);
      setViews(arrayOfViews as Views);
    },
  });

  useEffect(() => {
    mutation.mutate();
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
