import { useState, useEffect } from "react";

type Reaction = "heart" | "sparkles" | "dislike" | "like" | null;
interface Rcs {
  heart: number;
  sparkles: number;
  like: number;
  dislike: number;
}
type Reactions = Rcs | null;

const useBlogReaction = () => {
  const [reaction, setReaction] = useState<Reaction>(null);
  const [highlighted, setHighlighted] = useState({
    top: "0px",
    left: "0px",
  });
  const [showHighlight, setShowHighlight] = useState(false);

  const [reactions, setReactions] = useState<Reactions>(null);
  const [reactionsIndex, setReactionsIndex] = useState<Rcs>({
    dislike: 1,
    heart: 1,
    like: 1,
    sparkles: 1,
  });

  useEffect(() => {
    setReaction("heart");
    setHighlighted({
      top: "0px",
      left: "129px",
    });
    setShowHighlight(true);
    setReactionsIndex((prev) => ({ ...prev, heart: 2 }));
    setReactions({ dislike: 10, heart: 50, like: 80, sparkles: 7 });
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

  const changeReactionIndex = (key: keyof Rcs, type: "inc" | "dec") => {
    const def = {
      dislike: 1,
      heart: 1,
      like: 1,
      sparkles: 1,
    };
    def[key] = reactionsIndex[key];
    def[key] = type === "inc" ? def[key] + 1 : def[key] - 1;
    console.log(def[key], type);
    setReactionsIndex(def);
  };

  const changeReaction = (react: Reaction) => {
    setReaction((prev) => {
      if (prev === react) {
        changeReactionIndex(react as keyof Rcs, "dec");
        setShowHighlight(false);
        return null;
      }
      changeReactionIndex(react as keyof Rcs, "inc");
      setShowHighlight(true);
      return react;
    });
  };

  return {
    reaction,
    changeReaction,
    highlighted,
    reactions,
    reactionsIndex,
    showHighlight,
  };
};
export default useBlogReaction;
