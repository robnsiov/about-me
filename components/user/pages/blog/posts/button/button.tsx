import cn from "classnames";
import { motion } from "framer-motion";
import ButtonImpl from "./types";
const Button = ({ name, color, isSelected, setState }: ButtonImpl) => {
  return (
    <button
      className={cn("relative bg-opacity-30 p-4 ")}
      onClick={() => {
        setState(name);
      }}
    >
      <p
        className={cn(
          "relative z-20 font-semibold tracking-widest transition-colors",
          !isSelected ? "text-black dark:text-white" : "text-white "
        )}
      >
        {name}
      </p>
      {isSelected && (
        <motion.div
          className={cn(
            "absolute top-0 left-0 z-10 h-full w-full bg-opacity-80",
            color
          )}
          layoutId="outline"
        ></motion.div>
      )}
    </button>
  );
};

export default Button;
