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
  me: "https://robnsiov.storage.iran.liara.space/damir-samatkulov-x7JIZ8XEyGM-unsplash%20%283%29.jpg",
  name: "Mohammad",
  position: "front-end developer",
  attitude:
    "I love to share my knowledge through code. Check out a few of my most recent",
  aboutMe:
    "Hello, Im Mohammad, a self-taught front-end developer, currently living in Iran.",
  aboutMePicture:
    "https://robnsiov.storage.iran.liara.space/damir-samatkulov-x7JIZ8XEyGM-unsplash%20%283%29.jpg",
  footerLogo:
    "https://robnsiov.storage.iran.liara.space/damir-samatkulov-x7JIZ8XEyGM-unsplash%20%283%29.jpg",
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
