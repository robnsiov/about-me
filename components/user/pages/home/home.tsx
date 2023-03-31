import { Articles } from "@/api/types";
import AboutMe from "./about-me/about-me";
import TopArticles from "./top-articles/top-articles";

const HomePage = ({ articles }: { articles: Articles }) => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center md:flex-col">
        <AboutMe />
        {/* @ts-expect-error Server Component */}
        <TopArticles articles={articles} />
      </div>
    </>
  );
};
export default HomePage;
