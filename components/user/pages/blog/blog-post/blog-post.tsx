import Image from "@/components/share/image/image";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";
import BlogPostImpl from "./types";

const BlogPost = ({
  shortDesc,
  color,
  image,
  link,
  title,
  category,
}: BlogPostImpl) => {
  
  return (
    <>
      <Link
        href={link}
        className={`h-[240px] rounded-xl border-2  flex justify-center items-center
             overflow-hidden dark:bg-zinc-800 bg-white relative md:flex-col-reverse md:w-full md:h-[unset] md:min-h-[300px] border-${color} `}
      >
        <div
          className={`bg-${color} absolute inset-0 z-10 bg-opacity-20 duration-200 transition-all 
              opacity-0 hover:opacity-100`}
        ></div>
        <span
          className={`bg-${color} absolute z-[5]  bottom-3 right-3 rounded-2xl text-white
             py-1.5 px-7 uppercase md:bottom-[unset] md:top-3`}
        >
          {category}
        </span>
        <div className="flex items-start justify-between flex-col w-full h-full md:h-1/2 p-4">
          <div className="flex items-start justify-start flex-col">
            <h2 className="text-zinc-900 dark:text-white line-3 font-semibold text-xl">
              {title}
            </h2>
            <span className="text-zinc-500 dark:text-zinc-200 text-sm  mt-3 line-3">
              {shortDesc}
            </span>
          </div>
          <div className="flex justify-start items-end text-zinc-900 dark:text-white mt-4">
            <AiFillEye className="text-2xl" />
            <span className="ml-2">2,672 views</span>
          </div>
        </div>
        <div className="w-full h-full md:h-1/2">
          <Image
            src={image}
            height={400}
            width={400}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </Link>
    </>
  );
};

export default BlogPost;
