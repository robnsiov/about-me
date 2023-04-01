import { notFound } from "next/navigation";

import { constants } from "@/constants/constants";
import { Article } from "../types";

export const art = async (slug: string) => {
  try {
    const res = await fetch(
      `${constants.baseURL}${constants.user.article(slug)}`
    );
    if (!res.ok) return notFound();
    const result: Article = await res.json();
    return result;
  } catch {
    notFound();
  }
};
