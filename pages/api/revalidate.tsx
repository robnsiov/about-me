import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.body.secret !== process.env.SECRET) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }

  const home = res.revalidate("/");
  const blog = res.revalidate("/blog");
  const bySlug = res.revalidate(`/blog/${req.body.slug}`);
  const result = Promise.allSettled([home, blog, bySlug]);
  result
    .then(() => {
      return res.json({ revalidated: true });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send("Error revalidating");
    });
}
