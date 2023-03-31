import { topArts } from "@/api/top-articles/top-articles";
import HomePage from "@/components/user/pages/home/home";
import { constants } from "../constants/constants";

export function generateMetadata() {
  const position =
    constants.position[0].toUpperCase() + constants.position.slice(1);
  return { title: `${constants.fullName} - ${position}` };
}

const Home = async () => {
  const articles = await topArts();
  return (
    <>
      <HomePage articles={articles} />
    </>
  );
};
export default Home;
