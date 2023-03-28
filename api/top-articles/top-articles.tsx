import { constants } from "@/constants/constants";
import { Articles } from "../types";

export const topArts = async () => {
  let response: Articles = [];
  try {
    const res = await fetch(
      `${constants.baseURL}${constants.user.topArticles()}`
    );
    if (res.ok) {
      const result: Articles = await res.json();
      response = result;
    }
  } catch {
  } finally {
    return response;
  }
};
