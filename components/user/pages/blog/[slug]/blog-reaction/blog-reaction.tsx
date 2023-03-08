"use client";
import BlogWheel from "./blog-wheel/blog-wheel";
import ReactionIcon from "./reaction-icon/reaction-icon";
import useBlogReaction from "./use-blog-reaction";

const BlogReaction = () => {
  const {
    reaction,
    changeReaction,
    highlighted,
    reactions,
    reactionsIndex,
    showHighlight,
  } = useBlogReaction();

  return (
    <>
      <div className="relative grid grid-cols-2 gap-3 mb-12">
        <div
          className={`h-16 w-[116px] absolute z-10 
         duration-[0.4s]
        rounded-full border-4  border-opacity-50
        bg-opacity-30 cursor-pointer ${
          !showHighlight ? "opacity-0 invisible" : "opacity-100 visible"
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
        <ReactionIcon
          count={reactions?.sparkles as number}
          index={reactionsIndex.sparkles}
          onClick={() => changeReaction("sparkles")}
          reaction={reaction === "sparkles"}
        >
          ✨
        </ReactionIcon>
        <ReactionIcon
          count={reactions?.heart as number}
          index={reactionsIndex.heart}
          onClick={() => changeReaction("heart")}
          reaction={reaction === "heart"}
        >
          ❤️
        </ReactionIcon>
        <ReactionIcon
          count={reactions?.like as number}
          index={reactionsIndex.like}
          onClick={() => changeReaction("like")}
          reaction={reaction === "like"}
        >
          👍
        </ReactionIcon>

        <ReactionIcon
          count={reactions?.dislike as number}
          index={reactionsIndex.dislike}
          onClick={() => changeReaction("dislike")}
          reaction={reaction === "dislike"}
        >
          👎
        </ReactionIcon>
      </div>
    </>
  );
};
export default BlogReaction;
