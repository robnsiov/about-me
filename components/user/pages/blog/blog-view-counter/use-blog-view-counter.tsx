import { useEffect, useState } from "react";

const useBlogViewConter = (view: number | null) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (view != null) setLoading(true);
  }, [view]);
  return { loading };
};
export default useBlogViewConter;
