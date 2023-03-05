"use client";
import useBlogReaction from "./use-blog-reaction";

const BlogReaction = () => {
  const { reaction, changeReaction, highlighted, heart } = useBlogReaction();
  return (
    <>
      <div className="relative grid grid-cols-2 gap-3 mb-12">
        <div
          className={`h-16 w-[116px] absolute z-10 
        transition-all duration-[0.4s]
        rounded-full border-4  border-opacity-50
        bg-opacity-30 cursor-pointer ${
          reaction === null ? "opacity-0 invisible" : "opacity-100 visible"
        } ${
            reaction === "heart"
              ? "bg-red-500 border-red-500"
              : reaction === "sparkles"
              ? "bg-yellow-500 border-yellow-500"
              : reaction === "dislike"
              ? "bg-indigo-500 border-indigo-500"
              : "bg-green-500 border-green-500"
          }`}
          style={{
            top: highlighted.top,
            left: highlighted.left,
          }}
        ></div>
        <div
          onClick={() => changeReaction("sparkles")}
          className="flex h-16 w-[116px] items-center rounded-full bg-zinc-200
         bg-opacity-30 p-2 dark:bg-zinc-900 dark:bg-opacity-70 cursor-pointer group"
        >
          <span
            className={`relative z-20 text-4xl group-hover:grayscale-0 
          grayscale transition-all duration-300 ${
            reaction === "sparkles" ? "grayscale-0" : "grayscale"
          } `}
          >
            ✨
          </span>
          <span className="relative z-20 ml-2 text-[19px] dark:text-white text-zinc-900 font-medium">
            10
          </span>
        </div>
        <div
          onClick={() => changeReaction("heart")}
          className="flex h-16 w-[116px] items-center rounded-full bg-zinc-200
          bg-opacity-30 p-2 dark:bg-zinc-900 dark:bg-opacity-70 cursor-pointer group"
        >
          <span
            className={`relative z-20 text-4xl group-hover:grayscale-0 
          grayscale transition-all duration-300 ${
            reaction === "heart" ? "grayscale-0" : "grayscale"
          } `}
          >
            ❤️
          </span>
          {heart == null ? (
            <span className="ml-2 w-4 h-4 bg-zinc-300 animate-ping rounded-full"></span>
          ) : (
            <span className="ml-2 text-[19px] dark:text-white text-zinc-900 font-medium">
              {heart}
            </span>
          )}
        </div>
        <div
          onClick={() => changeReaction("like")}
          className="flex h-16 w-[116px] items-center rounded-full bg-zinc-200
         bg-opacity-30 p-2 dark:bg-zinc-900 dark:bg-opacity-70 cursor-pointer group"
        >
          <span
            className={`relative z-20 text-4xl group-hover:grayscale-0 
          grayscale transition-all duration-300 ${
            reaction === "like" ? "grayscale-0" : "grayscale"
          } `}
          >
            👍
          </span>
          <span className="ml-2 text-[19px] dark:text-white text-zinc-900 font-medium">
            10
          </span>
        </div>
        <div
          onClick={() => changeReaction("dislike")}
          className="flex h-16 w-[116px] items-center rounded-full bg-zinc-200
         bg-opacity-30 p-2 dark:bg-zinc-900 dark:bg-opacity-70 cursor-pointer group"
        >
          <span
            className={`relative z-20 text-4xl group-hover:grayscale-0 
          grayscale transition-all duration-300 ${
            reaction === "dislike" ? "grayscale-0" : "grayscale"
          } `}
          >
            👎
          </span>
          <span className="ml-2 text-[19px] dark:text-white text-zinc-900 font-medium">
            10
          </span>
        </div>
      </div>
    </>
  );
};
export default BlogReaction;
