import Image from "@/components/share/image/image";
import SocialApp from "@/components/user/footer/social-app/social-app";
import PageContainer from "@/components/user/page-container/page-container";
import { AiFillEye } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import BlogReaction from "./blog-reaction/blog-reaction";
import BlogView from "./blog-view/blog-view";

const BlogDetailPage = () => {
  return (
    <>
      <PageContainer className="items-start justify-start">
        <div className="w-full flex justify-center items-start lg:flex-col lg:items-center">
          <div className="w-full max-w-lg">
            <h1 className="text-5xl text-center dark:text-white text-zinc-900 font-extrabold md:text-4xl">
              How to use Image component in Next.js with unknown width and
              height
            </h1>
            <div className="mt-4 mb-6 text-center flex justify-center items-center flex-wrap text-slate-900 dark:text-white">
              <span className="dark:text-zinc-300 text-zinc-700 mr-4">
                February 24, 2022
              </span>
              <AiFillEye className="text-2xl mr-2" />
              <BlogView id={1} />
            </div>
            <Image
              height={600}
              width={800}
              alt="img"
              className="w-full h-full object-cover object-center rounded-xl"
              src="https://notion-andrew.vercel.app/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fpdtop6wwsgm%2Fnext-image_0lV_LH8fZ.jpg%3Fik-sdk-version%3Djavascript-1.4.3%26updatedAt%3D1646128125185&w=1200&q=75"
            />
          </div>
          <div
            className="min-w-[400px] flex justify-center items-center 
          flex-col text-center sticky top-[300px] right-0 my-36 lg:mt-6 lg:mb-0 lg:top-0 lg:min-w-[unset]"
          >
            <span className="uppercase dark:text-white text-zinc-900 mb-6">
              reactions
            </span>
            <BlogReaction />
            <span className="uppercase dark:text-white text-zinc-900 mb-6">
              share posts
            </span>
            <div className="flex justify-center items-center space-x-5">
              <SocialApp href="/">
                <BsTwitter className="text-3xl" />
              </SocialApp>
              <SocialApp href="/">
                <BsFacebook className="text-3xl" />
              </SocialApp>
              <SocialApp href="/">
                <BsLinkedin className="text-3xl" />
              </SocialApp>
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};
export default BlogDetailPage;
