"use client";
import GrowingLink from "@/components/share/links/growing-link/growing-link";
import { usePathname } from "next/navigation";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import SocialApp from "./social-app/social-app";

const Footer = () => {
  const pathname = usePathname();
  if (pathname !== "/")
    return (
      <>
        <div
          className="w-full bg-white/20 px-6 
      dark:bg-black/20 p-8"
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center md:flex-col">
            <div className="flex items-center justify-center sm:flex-col">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-zinc-800 mr-8 sm:mr-0 sm:mb-4"></div>
              <div className="flex justify-center items-start flex-col sm:text-center sm:items-center">
                <div className="flex justify-center space-x-3 items-center">
                  <GrowingLink href="/" title="Home" />
                  <GrowingLink href="/" title="Projects" />
                  <GrowingLink href="/" title="About" />
                </div>
                <span className="text-gray-500 mt-3">
                  © MohammadReza Zolfaghari - 2023
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center text-3xl space-x-4 md:mt-4">
              <SocialApp href="/">
                <AiFillLinkedin />
              </SocialApp>
              <SocialApp href="/">
                <AiFillGithub />
              </SocialApp>
              <SocialApp href="/">
                <AiOutlineTwitter />
              </SocialApp>
            </div>
          </div>
        </div>
      </>
    );
  return <></>;
};
export default Footer;
