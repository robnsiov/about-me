import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Article } from "@/api/types";
import Image from "@/components/share/image/image";
import SocialApp from "@/components/user/footer/social-app/social-app";
import PageContainer from "@/components/user/page-container/page-container";
import { constants } from "@/constants/constants";
import { toIntl } from "@/utils/to-intl";
import BlogReaction from "./blog-reaction/blog-reaction";
import BlogView from "./blog-view/blog-view";

import "./markdown-styles.scss";

const BlogDetailPage = ({
  article: { title, created_at, body, img, slug },
}: {
  article: Article;
}) => {
  return (
    <>
      <PageContainer className="items-start justify-start">
        <div className="w-full flex justify-between items-start lg:flex-col lg:items-center">
          <div className="w-full max-w-2xl">
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
            <div className="w-full flex justify-center items-center">
              <div className="w-full aspect-video flex justify-center items-center  rounded-xl overflow-hidden">
                <Image
                  height={600}
                  width={800}
                  alt={title}
                  className="w-full h-full object-cover object-center"
                  src={img}
                />
              </div>
            </div>
            <div className="w-full mt-6 markdown-body">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code: ({ node, ...props }) => (
                    <div className="rounded p-4 overflow-auto code-body min-w-[400px]">
                      <code {...props}></code>
                    </div>
                  ),
                }}
              >
                {body}
              </ReactMarkdown>
            </div>
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
