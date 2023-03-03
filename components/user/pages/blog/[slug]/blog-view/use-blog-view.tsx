import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogViewImpl from "./types";

const getViews = async (id: number) => {
  const { data } = await axios({
    method: "GET",
    // method: "POST",
    url: "http://localhost:5000/views",
    // data: posts,
  });
  return data;
};

const useBlogView = ({ id }: BlogViewImpl) => {
  const [view, setView] = useState<null | number>(null);
  const mutation = useMutation({
    mutationFn: getViews,
    onSuccess: (data) => {
      setView(data[0]);
    },
    onError: () => {
      setView(100);
    },
  });

  useEffect(() => {
    mutation.mutate(id as number);
  }, []);
  return { view };
};
export default useBlogView;
