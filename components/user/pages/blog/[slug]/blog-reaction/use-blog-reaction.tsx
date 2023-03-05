import { useState, useEffect } from "react";

type Reaction = "heart" | "sparkles" | "dislike" | "like" | null;
type ReactionState = number | null;

const useBlogReaction = () => {
  const [reaction, setReaction] = useState<Reaction>("sparkles");
  const [highlighted, setHighlighted] = useState({
    top: "0px",
    left: "0px",
  });

  const [heart, setHeart] = useState<ReactionState>(null);

  useEffect(() => {
    setHeart(15);
  }, []);

  useEffect(() => {
    switch (reaction) {
      case "heart":
        setHighlighted({
          top: "0px",
          left: "129px",
        });
        break;
      case "sparkles":
        setHighlighted({
          top: "0px",
          left: "0px",
        });
        break;
      case "dislike":
        setHighlighted({
          top: "76px",
          left: "128px",
        });
        break;
      case "like":
        setHighlighted({
          left: "0px",
          top: "76px",
        });
        break;
    }
  }, [reaction]);
  const changeReaction = (react: Reaction) => {
    setReaction((prev) => {
      if (prev === react) return null;
      return react;
    });
  };

  return { reaction, changeReaction, highlighted, heart };
};
export default useBlogReaction;
