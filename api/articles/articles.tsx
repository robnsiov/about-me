import { constants } from "@/constants/constants";
import { Articles } from "../types";

export const arts = async () => {
  let response: Articles = [];
  try {
    const res = await fetch(`${constants.baseURL}${constants.user.articles()}`);
    if (res.ok) {
      console.log(`${constants.baseURL}${constants.user.articles()}`);
      const result: Articles = await res.json();
      response = [...result, ...result, ...result]; // create 3 fake arts
      // response = result;
    }
  } catch {
  } finally {
    return response;
  }
};
