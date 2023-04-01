import { Articles } from "@/api/types";
import Article from "./article/article";

const TopArticles = ({ articles }: { articles: Articles }) => {
  return (
    <>
      <div className="grid h-screen w-full grid-cols-2 grid-rows-2 md:ml-0 md:h-[auto] md:max-h-[600px] relative">
        {articles.map(
          ({ slug, title, img, from_value, to_value, created_at }, idx) => (
            <Article
              key={slug}
              title={title}
              date={created_at}
              from={from_value}
              to={to_value}
              src={img}
              href={`/blog/${slug}`}
              lastChild={articles.length === idx + 1}
            />
          )
        )}
      </div>
    </>
  );
};
export default TopArticles;
