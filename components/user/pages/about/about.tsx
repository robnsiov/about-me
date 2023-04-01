import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { GrReactjs } from "react-icons/gr";
import {
  SiMaterialui,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaUikit } from "react-icons/fa";

import PageContainer from "../../page-container/page-container";
import { constants } from "@/constants/constants";
import Image from "@/components/share/image/image";
import Skill from "./skill/skill";
import Social from "./social/social";

const AboutPage = () => {
  return (
    <>
      <PageContainer>
        <div className="min-w-[400px] xl:min-w-[380px] md:min-w-full flex justify-center items-start flex-col">
          <h1 className="text-5xl font-bold tracking-tighter dark:text-white text-zinc-900 md:text-3xl">
            About me
          </h1>
          <span className="my-5 tracking-tighter max-w-sm dark:text-white text-zinc-900">
            {constants.aboutMe}
          </span>
          <h3 className="text-4xl font-bold tracking-tighter dark:text-white text-zinc-900 mt-4 md:text-2xl">
            Mastery
          </h3>
          <div className="w-full grid grid-cols-2 460px:grid-cols-1 460px:gap-2 gap-4 mt-5">
            <Skill className="bg-blue-500" title="React">
              <GrReactjs className="text-4xl dark:text-white text-zinc-900" />
            </Skill>
            <Skill className="bg-orange-500" title="Next.js">
              <SiNextdotjs className="text-4xl dark:text-white text-zinc-900" />
            </Skill>
            <Skill className="bg-red-500" title="TailwindCSS">
              <SiTailwindcss className="text-4xl dark:text-white text-zinc-900" />
            </Skill>
            <Skill className="bg-purple-500" title="Material UI">
              <SiMaterialui className="text-4xl dark:text-white text-zinc-900" />
            </Skill>
            <Skill className="bg-indigo-500" title="Typescript">
              <SiTypescript className="text-3xl dark:text-white text-zinc-900" />
            </Skill>
            <Skill className="bg-pink-500" title="Mantine">
              <FaUikit className="text-4xl dark:text-white text-zinc-900" />
            </Skill>
          </div>
          <h3 className="text-4xl font-bold tracking-tighter dark:text-white text-zinc-900 mt-9 md:text-2xl">
            Follow me
          </h3>
          <div className="flex justify-start items-center mt-6 text-4xl space-x-6">
            <Social
              href={constants.twitter}
              className="border-blue-500 text-blue-500 hover:bg-blue-500"
            >
              <AiOutlineTwitter />
            </Social>
            <Social
              href={constants.github}
              className="border-red-500 text-red-500 hover:bg-red-500"
            >
              <AiOutlineGithub />
            </Social>
            <Social
              href={constants.lnikedIn}
              className="border-amber-500 text-amber-500 hover:bg-amber-500"
            >
              <AiFillLinkedin />
            </Social>
          </div>
          <Link
            aria-label={constants.gamil}
            href={`mailto:${constants.gamil}`}
            className="mt-10 rounded-full bg-red-500 bg-opacity-30 px-4 py-3 text-zinc-900
              transition-all dark:text-white w-full text-center hover:bg-opacity-50"
          >
            Contact me
          </Link>
        </div>
        <div className="ml-52 xl:ml-12 lg:w-full md:ml-0 md:mb-12 flex justify-center items-center">
          <div
            className="w-[370px] h-[680px] overflow-hidden lg:w-full
              md:rounded-full md:aspect-square md:h-[unset] md:w-1/2 rounded-lg"
          >
            <Image
              alt={constants.fullName}
              src={constants.aboutMePicture}
              height={680}
              width={370}
              className="object-cover object-center rounded-2xl w-full h-full"
            />
          </div>
        </div>
      </PageContainer>
    </>
  );
};
export default AboutPage;
