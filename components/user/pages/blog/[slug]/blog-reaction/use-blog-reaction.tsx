import { useState, useEffect } from "react";

type Reaction = "heart" | "sparkles" | "dislike" | "like" | null;

const useBlogReaction = () => {
  const [reaction, setReaction] = useState<Reaction>("sparkles");
  const [highlighted, setHighlighted] = useState({
    top: "0px",
    left: "0px",
  });

  const changeReaction = (react: Reaction) => {
    setReaction((prev) => {
      if (prev === react) return null;
      return react;
    });
  };

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

  return { reaction, changeReaction, highlighted };
};
export default useBlogReaction;
