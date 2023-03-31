import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // if (req.body.secret !== process.env.SECRET) {
//   //   return res.status(401).json({ message: "Invalid token" });
//   // }

//   // const home = await res.revalidate("/");
//   // const blog = res.revalidate("/blog/");
//   // const bySlug = res.revalidate(`/blog/${req.body.slug}`);
//   // const result = Promise.all([home]);
//   try {
//     // This should be the actual path not a rewritten path
//     // e.g. for "/blog/[slug]" this should be "/blog/post-1"
//     await res.revalidate("/");
//     return res.status(200).json({ revalidated: true });
//   } catch (err) {
//     console.log(err);
//     // If there was an error, Next.js will continue
//     // to show the last successfully generated page
//     return res.status(500).send("Error revalidating");
//   }
// }
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate("/");
    // await res.revalidate("/blog");
    // await res.revalidate(`/blog/${req.body.slug}`);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
