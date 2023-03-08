import BlogWheel from "../blog-wheel/blog-wheel";
import ReactionIconImpl from "./types";

const ReactionIcon = ({
  index,
  onClick,
  reaction,
  count,
  children,
}: ReactionIconImpl) => {
  return (
    <>
      <div
        className="flex h-16 w-[116px] items-center rounded-full bg-zinc-200
          bg-opacity-30 p-2 dark:bg-zinc-900 dark:bg-opacity-70 cursor-pointer group relative"
      >
        <span className="absolute z-40 inset-0" onClick={onClick}></span>
        <span
          className={`relative z-20 text-4xl group-hover:grayscale-0 
          grayscale transition-all duration-300 ${
            reaction ? "grayscale-0" : "grayscale"
          } `}
        >
          {children}
        </span>

        {count == null ? (
          <span className="ml-2 w-4 h-4 bg-zinc-300 animate-ping rounded-full"></span>
        ) : (
          <BlogWheel count={count} activeIndex={index} />
        )}
      </div>
    </>
  );
};
export default ReactionIcon;
