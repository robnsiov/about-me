import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const home = res.revalidate("/");
  const blog = res.revalidate("/blog");
  const bySlug = res.revalidate(`/blog/${req.body.slug}`);
  try {
    await Promise.allSettled([home, blog, bySlug]);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}