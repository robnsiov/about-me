"use client";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import BlogViewCounterImpl from "./types";
import useBlogViewConter from "./use-blog-view-counter";

const BlogViewCounter = ({ view }: BlogViewCounterImpl) => {
  const { loading } = useBlogViewConter(view);
  return (
    <div className="relative flex  items-center gap-2">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.p
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="tracking-wide"
          >
            {view} views
          </motion.p>
        ) : (
          <motion.div
            className="flex gap-1 rounded-full  py-1 px-2 "
            variants={ContainerVariants}
            initial="initial"
            exit="exit"
            key="dots"
            animate="animate"
          >
            <motion.div
              className="h-2 w-2 rounded-full bg-yellow-500"
              transition={DotTransition}
              variants={DotVariants}
            ></motion.div>
            <motion.div
              className="h-2 w-2 rounded-full bg-red-500"
              transition={DotTransition}
              variants={DotVariants}
            ></motion.div>
            <motion.div
              className="h-2 w-2 rounded-full bg-green-500"
              transition={DotTransition}
              variants={DotVariants}
            ></motion.div>
            <motion.div
              className="h-2 w-2 rounded-full bg-blue-500"
              transition={DotTransition}
              variants={DotVariants}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContainerVariants: Variants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};
const DotVariants: Variants = {
  initial: {
    y: "-35%",
  },
  animate: {
    y: "35%",
  },
};
const DotTransition: Transition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

export default BlogViewCounter;
