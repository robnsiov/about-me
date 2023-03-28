import { create } from "zustand";

export interface ArticleDetail {
  number_likes: number | null;
  number_dislikes: number | null;
  number_sparkles: number | null;
  number_loves: number | null;
  number_views: number | null;
  is_liked: boolean | null;
  is_disliked: boolean | null;
  is_sparkles: boolean | null;
  is_loves: boolean | null;
  slug: string | null;
}

interface ArticleDetailApi {
  detail: ArticleDetail;
  set(artDetail: ArticleDetail): void;
}

const useArticleDetailStore = create<ArticleDetailApi>((set) => ({
  detail: {
    is_disliked: null,
    is_liked: null,
    is_loves: null,
    is_sparkles: null,
    number_dislikes: null,
    number_likes: null,
    number_loves: null,
    number_sparkles: null,
    number_views: null,
    slug: null,
  },
  set: (artDetail) => set({ detail: artDetail }),
}));

export default useArticleDetailStore;
