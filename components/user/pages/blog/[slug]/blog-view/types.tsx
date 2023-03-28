export default interface BlogViewImpl {
  slug: string;
}

export  interface ArticleDetail {
  number_likes: number;
  number_dislikes: number;
  number_sparkles: number;
  number_loves: number;
  number_views: number;
  is_liked: boolean;
  is_disliked: boolean;
  is_sparkles: boolean;
  is_loves: boolean;
}
