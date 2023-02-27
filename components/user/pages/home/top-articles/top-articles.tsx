"use client";

import Article from "./article/article";

const TopArticles = () => {
  return (
    <>
      <div className="w-full h-screen md:h-auto flex justify-start items-center flex-col ml-4 md:ml-0">
        <div className="w-full h-1/2 md:h-[250px] flex justify-center items-center bg-blue-300">
          <Article
            title="How to use Image component in Next.js with unknown width and height"
            date="February 24, 2022"
            from="#e44245"
            to={"#000000"}
            src={
              "https://notion-andrew.vercel.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fpdtop6wwsgm%2Fnext-image_0lV_LH8fZ.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1646128125185&w=1080&q=75"
            }
            href="/"
          />
          <Article
            title="How to use Image component in Next.js with unknown width and height"
            date="February 24, 2023"
            from="#1F8395"
            to={"#1a7cec9c"}
            src={
              "https://notion-andrew.vercel.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fpdtop6wwsgm%2Fnotion-tailwind_-2tyAG4u00c.png%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1646145885877&w=1200&q=75"
            }
            href="/"
          />
        </div>
        <div className="w-full flex justify-center h-1/2 md:h-[250px] bg-blue-300">
          <Article
            title="How to use Image component in Next.js with unknown width and height"
            date="February 24, 2023"
            from="#A25634"
            to={"#986d32a5"}
            src={
              "https://notion-andrew.vercel.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fpdtop6wwsgm%2Fvestis-ecommerce_4kphyTG_7.png%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1646154712969&w=1920&q=75"
            }
            href="/"
          />
        </div>
      </div>
    </>
  );
};
export default TopArticles;
