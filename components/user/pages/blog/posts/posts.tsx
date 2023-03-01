"use client";

import { AnimatePresence, motion } from "framer-motion";
import BlogPost from "../blog-post/blog-post";
import BlogPostImpl from "../blog-post/types";
import Button from "./button/button";
import usePosts from "./use-posts";

const Posts = ({ blogs }: { blogs: Array<BlogPostImpl> }) => {
  const { filtered, selected, setSelectedFilter } = usePosts(blogs);
  return (
    <>
      <div className="w-full flex justify-center items-end flex-col relative -top-12 md:-top-8 460px:top-4">
        <div
          className="inline-flex overflow-hidden rounded-full bg-zinc-200
           bg-opacity-40 backdrop-blur-lg dark:bg-zinc-900 dark:bg-opacity-40"
        >
          <Button
            name="All"
            color="bg-indigo-500"
            isSelected={selected === "All"}
            setState={setSelectedFilter}
          />
          <Button
            name="Project"
            color="bg-blue-500"
            isSelected={selected === "Project"}
            setState={setSelectedFilter}
          />
          <Button
            name="Article"
            color="bg-red-500"
            setState={setSelectedFilter}
            isSelected={selected === "Article"}
          />
        </div>
        <div className="mt-8 grid gap-8 grid-cols-2 sm:grid-cols-1">
          <AnimatePresence>
            {filtered.map(
              ({ category, color, image, link, shortDesc, title, id }) => (
                <motion.div
                  key={id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <BlogPost
                    category={category}
                    color={color}
                    image={image}
                    id={id}
                    link={link}
                    shortDesc={shortDesc}
                    title={title}
                  />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Posts;
