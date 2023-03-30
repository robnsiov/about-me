export const constants = {
  appURL: "https://robnsiov.netlify.app",
  baseURL: "https://papers-api.iran.liara.run",
  defaultViews: 100,
  // Do not touch the above items
  lnikedIn: "https://test_linkedin",
  github: "https://test_github",
  twitter: "https://test_twitter",
  gamil: "gamil@test",
  fullName: "MohammadReza Zolfaghari",
  footer: "© MohammadReza Zolfaghari - 2023",
  me: "https://storage.iran.liara.space/papers-media/media/article/article_img/notion-tailwind_-2tyAG4u00c_1_oGHLyyF.png?AWSAccessKeyId=bm7vasqel20us429&Signature=bQExhI%2BEsJaKoaysNpXR%2B5HppNU%3D&Expires=1680189365",
  name: "Mohammad",
  position: "front-end developer",
  attitude:
    "I love to share my knowledge through code. Check out a few of my most recent",
  aboutMe:
    "Hello, Im Mohammad, a self-taught front-end developer, currently living in Iran.",
  aboutMePicture:
    "https://storage.iran.liara.space/papers-media/media/article/article_img/notion-tailwind_-2tyAG4u00c_1_oGHLyyF.png?AWSAccessKeyId=bm7vasqel20us429&Signature=bQExhI%2BEsJaKoaysNpXR%2B5HppNU%3D&Expires=1680189365",
  footerLogo:
    "https://storage.iran.liara.space/papers-media/media/article/article_img/notion-tailwind_-2tyAG4u00c_1_oGHLyyF.png?AWSAccessKeyId=bm7vasqel20us429&Signature=bQExhI%2BEsJaKoaysNpXR%2B5HppNU%3D&Expires=1680189365",
  user: {
    // Do not touch the items below
    articles: () => "/articles",
    topArticles: () => "/articles_top_list",
    article: (slug: string) => `/articles/${slug}`,
    actions: (slug: string) => `/articles/${slug}/actions`,
    articlesDetail: () => "/articles_detail",
    articleDetail: (slug: string) => `/articles_detail/${slug}/`,
    articleDetailList: () => "/articles_detail_list",
  },
};
