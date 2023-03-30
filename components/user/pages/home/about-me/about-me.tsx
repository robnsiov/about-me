import SetVariant from "@/components/share/set-variant/set-variant";
import { constants } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center px-4 lg:pt-20 lg:pb-10 lg:px-8">
        <div className="max-w-lg h-full flex flex-col justify-center items-center text-center">
          <div className="w-36 h-36 overflow-hidden rounded-full mb-4 relative z-10 lg:w-1/2 lg:aspect-square lg:h-[unset]">
            <Image
              src={constants.me}
              alt="me"
              priority
              width={144}
              height={144}
              className="object-cover object-top w-full h-full"
            />
          </div>
          <h1 className="relative z-10 font-bold tracking-tighter text-black dark:text-white text-5xl md:text-4xl">
            I am,{" "}
            <SetVariant variant="link">
              <Link href={"/about"} className="underline text-red-500 mr-2">
                {constants.name}
              </Link>{" "}
            </SetVariant>
            a {constants.position}.
          </h1>
          <div
            className="relative z-10 text-gray-700 dark:text-gray-400  tracking-widest text-lg mt-4 
          flex md:inline-block justify-center items-center flex-col"
          >
            <span>{constants.attitude}</span>
            <SetVariant variant="link">
              <Link
                className="relative z-10 underline text-red-500 md:ml-3"
                href={"/blog"}
              >
                publishings
              </Link>
            </SetVariant>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
