import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { constants } from "@/constants/constants";
import useArticleDetailStore, {
  ArticleDetail,
} from "@/stores/article-detail-store";
import BlogViewImpl from "./types";

const articleDetail = async (slug: string) => {
  const { data } = await axios<ArticleDetail>({
    method: "GET",
    baseURL: constants.baseURL,
    url: constants.user.articleDetail(slug),
  });
  return data;
};

const useBlogView = ({ slug }: BlogViewImpl) => {
  const [setArticleDetail] = useArticleDetailStore((state) => [state.set]);
  const [view, setView] = useState<null | number>(null);
  const mutation = useMutation({
    mutationFn: (slug: string) => articleDetail(slug),
    onSuccess: (data) => {
      setArticleDetail(data);
      setView(data.number_views ?? constants.defaultViews);
    },
    onError: () => {
      setView(100);
    },
  });

  useEffect(() => {
    mutation.mutate(slug);
  }, []);
  return { view };
};
export default useBlogView;
