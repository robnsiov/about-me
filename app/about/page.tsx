import AboutPage from "@/components/user/pages/about/about";
import { constants } from "@/constants/constants";

export function generateMetadata() {
  return { title: `About - ${constants.fullName}` };
}

const About = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};
export default About;
