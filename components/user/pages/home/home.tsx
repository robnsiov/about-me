import AboutMe from "./about-me/about-me";
import TopArticles from "./top-articles/top-articles";

const HomePage = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center md:flex-col">
        <AboutMe />
        {/* @ts-expect-error Server Component */}
        <TopArticles />
      </div>
    </>
  );
};
export default HomePage;
