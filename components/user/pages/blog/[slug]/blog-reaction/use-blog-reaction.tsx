import { constants } from "@/constants/constants";
import useArticleDetailStore from "@/stores/article-detail-store";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";

type Reaction = "heart" | "sparkles" | "dislike" | "like" | null;
interface Rcs {
  heart: number;
  sparkles: number;
  like: number;
  dislike: number;
}
type Reactions = Rcs | null;
const articleAction = async (slug: string, action: string) => {
  console.log(constants.user.actions(slug));
  const { data } = await axios({
    method: "POST",
    baseURL: constants.baseURL,
    url: constants.user.actions(slug),
    data: {
      action: action,
    },
  });
  return data;
};

const useBlogReaction = () => {
  const [
    {
      is_disliked,
      is_liked,
      is_loves,
      is_sparkles,
      number_dislikes,
      number_likes,
      number_loves,
      number_sparkles,
      slug,
    },
  ] = useArticleDetailStore((state) => [state.detail]);
  const [articleDetail] = useArticleDetailStore((state) => [state.detail]);
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

  const mutation = useMutation({
    mutationFn: ({ slug, action }: { slug: string; action: string }) =>
      articleAction(slug, action),
  });
  useEffect(() => {
    if (is_loves) {
      setReaction("heart");
      setHighlighted({
        top: "0px",
        left: "129px",
      });
      setReactionsIndex((prev) => ({ ...prev, heart: 2 }));
    } else if (is_sparkles) {
      setReaction("sparkles");
      setHighlighted({
        top: "0px",
        left: "0",
      });
      setReactionsIndex((prev) => ({ ...prev, sparkles: 2 }));
    } else if (is_liked) {
      setReaction("like");
      setHighlighted({
        top: "76px",
        left: "0px",
      });
      setReactionsIndex((prev) => ({ ...prev, like: 2 }));
    } else if (is_disliked) {
      setReaction("dislike");
      setHighlighted({
        top: "76px",
        left: "129px",
      });
      setReactionsIndex((prev) => ({ ...prev, dislike: 2 }));
    }
    if (is_disliked || is_sparkles || is_liked || is_loves) {
      setShowHighlight(true);
    }
    setReactions({
      dislike: number_dislikes as number,
      heart: number_loves as number,
      like: number_likes as number,
      sparkles: number_sparkles as number,
    });
  }, [articleDetail]);

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
    setReactionsIndex(def);
    const actionKey = key == "heart" ? "love" : key;
    mutation.mutate({ slug: slug as string, action: actionKey });
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
