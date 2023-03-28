import { art } from "@/api/article/article";
import Image from "@/components/share/image/image";
import SocialApp from "@/components/user/footer/social-app/social-app";
import PageContainer from "@/components/user/page-container/page-container";
import { constants } from "@/constants/constants";
import { toIntl } from "@/utils/to-intl";
import { AiFillEye } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import BlogReaction from "./blog-reaction/blog-reaction";
import BlogView from "./blog-view/blog-view";
import BlogDetailPageImpl from "./types";

const U = () => {
  return (
    <>
      <p>OK</p>
    </>
  );
};
const dummyBody = {
  __html: `
  <div class="rounded-md rounded-b-none mt-3 bg-red-500 text-white
            flex justify-start items-center p-2
            ">
              <div class="w-5 h-5 bg-red-400 rounded-full mr-3"></div>
              <span class="">/pages/index.tsx</span>
            </div>
  <div class="rounded-md rounded-t-none overflow-hidden">
    <pre><code class="language-javascript">
    document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
  });
});
    </code></pre>
  </div>
    
    <span class="bg-blue-400">HI</span>
`,
};

const BlogDetailPage = async ({ slug }: BlogDetailPageImpl) => {
  const { title, created_at, body, img } = await art(slug);
  return (
    <>
      <PageContainer className="items-start justify-start">
        <div className="w-full flex justify-center items-start lg:flex-col lg:items-center">
          <div className="w-full max-w-lg">
            <h1 className="text-5xl text-center dark:text-white text-zinc-900 font-extrabold md:text-4xl">
              {title}
            </h1>
            <div className="mt-4 mb-6 text-center flex justify-center items-center flex-wrap text-slate-900 dark:text-white">
              <span className="dark:text-zinc-300 text-zinc-700 mr-4">
                {toIntl(created_at)}
              </span>
              <AiFillEye className="text-2xl mr-2" />
              <BlogView slug={slug} />
            </div>
            <Image
              height={600}
              width={800}
              alt="img"
              className="w-full h-full object-cover object-center rounded-xl"
              src={img}
            />
            <div
              className="w-full mt-6 dark:text-white text-zinc-800"
              dangerouslySetInnerHTML={{ __html: body }}
            ></div>
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
              <SocialApp
                href={`https://twitter.com/intent/tweet?url=${constants.appURL}/blog/${slug}`}
              >
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
