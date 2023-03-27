export const constants = {
  appURL: "https://robnsiov.netlify.app",
  baseURL: "https://papers-api.iran.liara.run",
  user: {
    articles: () => "/articles",
    article: (slug: string) => `/articles/${slug}`,
    actions: (slug: string) => `/articles/${slug}/actions`,
    articlesDetail: () => "/articles_detail",
    articleDetail: (slug: string) => `/articles_detail/${slug}/`,
    articleDetailList: () => "/articles_detail_list",
  },
};
