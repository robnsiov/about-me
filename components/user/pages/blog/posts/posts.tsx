"use client";

import { Articles } from "@/api/types";
import SetVariant from "@/components/share/set-variant/set-variant";
import { AnimatePresence, motion } from "framer-motion";
import BlogPost from "../blog-post/blog-post";
import Button from "./button/button";
import usePosts from "./use-posts";

const Posts = ({ blogs }: { blogs: Articles }) => {
  const { filtered, selected, setSelectedFilter, views } = usePosts(blogs);
  return (
    <>
      <div className="w-full flex justify-center items-end flex-col relative -top-12 md:-top-8 460px:top-4">
        <SetVariant variant="none" className="w-full">
          <div
            className="inline-flex overflow-hidden rounded-full bg-zinc-200
           bg-opacity-40 backdrop-blur-lg dark:bg-zinc-900 dark:bg-opacity-40"
          >
            <Button
              name="All"
              label="All"
              color="bg-indigo-500"
              isSelected={selected === "All"}
              setState={setSelectedFilter}
            />
            <Button
              name="PR"
              label="Project"
              color="bg-blue-500"
              isSelected={selected === "PR"}
              setState={setSelectedFilter}
            />
            <Button
              name="AR"
              label="Article"
              color="bg-red-500"
              setState={setSelectedFilter}
              isSelected={selected === "AR"}
            />
          </div>
        </SetVariant>
        <div className="w-full mt-8 grid gap-8 grid-cols-2 sm:grid-cols-1">
          <AnimatePresence>
            {filtered.map(
              ({ category, to_value, img, slug, short_desc, title }, index) => (
                <SetVariant key={slug} variant="none">
                  <motion.div
                    layout
                    className="w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <BlogPost
                      category={category}
                      color={to_value}
                      image={img}
                      id={slug}
                      link={`/blog/${slug}`}
                      shortDesc={short_desc ?? title}
                      title={title}
                      view={views[index]}
                    />
                  </motion.div>
                </SetVariant>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Posts;
