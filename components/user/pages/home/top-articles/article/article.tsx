import Link from "next/link";

import Image from "@/components/share/image/image";
import { toIntl } from "@/utils/to-intl";
import ArticleImpl from "./types";

const Article = ({
  date,
  from,
  to,
  href,
  src,
  title,
  lastChild = false,
}: ArticleImpl) => {
  return (
    <>
      <Link
        aria-label={title}
        href={href}
        className={`w-full h-full overflow-hidden relative group ${
          lastChild ? "col-span-2" : ""
        }`}
      >
        <div
          className="absolute inset-0  z-[30] flex justify-end items-start 
          flex-col p-4 transition-all duration-300 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"
        >
          <h2 className="text-white font-medium text-xl sm:text-base sm:font-normal">
            {title}
          </h2>
          <span className="text-gray-100 text-sm mt-2 sm:text-xs italic">
            {toIntl(date)}
          </span>
        </div>
        <div className="w-full h-full flex justify-center items-center flex-col relative z-20  md:aspect-square">
          <div
            className="absolute inset-0 z-10 transition-all duration-300 opacity-60 group-hover:opacity-80"
            style={{
              background: `linear-gradient(to right top, ${from}, ${to})`,
            }}
          ></div>

          <Image
            alt={title}
            className="w-full h-full object-cover object-center transition-all duration-300 scale-[1.01] group-hover:scale-[1.18] ease-in-out"
            src={src}
            width={1050}
            height={1050}
          />
        </div>
      </Link>
    </>
  );
};
export default Article;
