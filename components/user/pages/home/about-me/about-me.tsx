import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center px-4 lg:py-10">
        <div className="max-w-lg h-full flex flex-col justify-center items-center text-center">
          <div className="w-36 h-36 overflow-hidden rounded-full mb-4">
            <Image
              src={
                "https://notion-andrew.vercel.app/_next/image?url=%2Fimages%2Favatar.jpg&w=1920&q=75"
              }
              alt="me"
              priority
              width={144}
              height={144}
              className="object-cover object-top"
            />
          </div>
          <h1 className="font-bold tracking-tighter text-black dark:text-white text-5xl md:text-4xl">
            I am,{" "}
            <Link href={"/"} className="underline text-red-500">
              Mohammad
            </Link>{" "}
            a front-end developer.
          </h1>
          <div
            className="text-gray-700 dark:text-gray-400  tracking-widest text-lg mt-4 
          flex md:inline-block justify-center items-center flex-col"
          >
            <span>
              I love to share my knowledge through code. Check out a few of my
              most recent
            </span>

            <Link className="underline text-red-500 md:ml-3" href={"/"}>
              publishings
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
