"use client";
import { motion } from "framer-motion";
import cn from "classnames";
import useCustomCursor from "./use-custom-cursor";

const CustomCursor = () => {
  const { cursorVariant, mobile, variantsDot, variantsRing, mounted } =
    useCustomCursor();
  return (
    <>
      {!mobile && (
        <>
          <div
            className={`fixed top-0 left-0 z-[1] ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <motion.div
              className="pointer-events-none absolute h-12 w-12 rounded-full bg-red-500 bg-opacity-40 dark:bg-opacity-20"
              variants={variantsRing}
              animate={cursorVariant}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 28,
                mass: 3,
              }}
            />
            <motion.div
              className="pointer-events-none absolute h-12 w-12 rounded-full  bg-blue-500 bg-opacity-30 dark:bg-opacity-10"
              variants={variantsRing}
              animate={cursorVariant}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
                mass: 3.2,
              }}
            />
            <motion.div
              className="pointer-events-none absolute  h-12 w-12 rounded-full  bg-yellow-500 bg-opacity-20 dark:bg-opacity-10"
              variants={variantsRing}
              animate={cursorVariant}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 16,
                mass: 3.4,
              }}
            />
          </div>
          <motion.div
            className={cn(
              "pointer-events-none fixed z-[999] h-4 w-4 rounded-full bg-zinc-800 transition-colors dark:bg-white opacity-0",
              cursorVariant === "none" &&
                "dark:bg-dark bg-opacity-10  dark:bg-opacity-10",
              mounted && "opacity-100"
            )}
            variants={variantsDot}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;
