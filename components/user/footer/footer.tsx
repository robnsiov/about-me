"use client";
import Image from "@/components/share/image/image";
import GrowingLink from "@/components/share/links/growing-link/growing-link";
import { constants } from "@/constants/constants";
import { usePathname } from "next/navigation";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import SocialApp from "./social-app/social-app";

const Footer = () => {
  const pathname = usePathname();
  if (pathname !== "/")
    return (
      <>
        <div
          className="w-full bg-white px-6 
      dark:bg-black/20 p-8"
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center md:flex-col relative z-20">
            <div className="flex items-center justify-center sm:flex-col">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-zinc-800 mr-8 sm:mr-0 sm:mb-4">
                <Image
                  src={constants.footerLogo}
                  width={144}
                  height={144}
                  alt={constants.footer}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="flex justify-center items-start flex-col sm:text-center sm:items-center">
                <div className="flex justify-center space-x-3 items-center">
                  <GrowingLink href="/" title="Home" />
                  <GrowingLink href="/blog" title="Projects" />
                  <GrowingLink href="/about" title="About" />
                </div>
                <span className="text-gray-500 mt-3">{constants.footer}</span>
              </div>
            </div>
            <div className="flex justify-center items-center text-3xl space-x-4 md:mt-4">
              <SocialApp href={constants.lnikedIn}>
                <AiFillLinkedin />
              </SocialApp>
              <SocialApp href={constants.github}>
                <AiFillGithub />
              </SocialApp>
              <SocialApp href={constants.twitter}>
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
