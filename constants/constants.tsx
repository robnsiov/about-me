export const constants = {
  appURL: "https://robnsiov.netlify.app",
  baseURL: "https://papers-api.iran.liara.run",
  defaultViews: 100,
  user: {
    articles: () => "/articles",
    topArticles: () => "/articles_top_list",
    article: (slug: string) => `/articles/${slug}`,
    actions: (slug: string) => `/articles/${slug}/actions`,
    articlesDetail: () => "/articles_detail",
    articleDetail: (slug: string) => `/articles_detail/${slug}/`,
    articleDetailList: () => "/articles_detail_list",
  },
};
