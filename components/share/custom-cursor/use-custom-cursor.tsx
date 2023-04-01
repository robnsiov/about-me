import { useEffect, useState } from "react";
import { Variants } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

import useCustomCursorStore from "@/stores/custom-cursor-store";

const useCustomCursor = () => {
  const [cursorVariant] = useCustomCursorStore((state) => [
    state.cursorVariant,
  ]);
  const [mounted, setMounted] = useState(false);
  const [mousePositon, setMousePosition] = useState({ x: -100, y: -100 });
  const mobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  });
  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
  }, []);

  const variantsDot: Variants = {
    default: {
      opacity: 0,
      x: mousePositon.x - 8,
      y: mousePositon.y - 8,
      scale: 0,
    },
    link: {
      zIndex: 1,
      opacity: 1,
      x: mousePositon.x - 8,
      y: mousePositon.y - 8,
      scale: 5,
    },
    none: {
      x: mousePositon.x - 8,
      y: mousePositon.y - 8,
      opacity: 1,
      scale: 1,
    },
  };
  const variantsRing = {
    default: {
      x: mousePositon.x - 24,
      y: mousePositon.y - 24,
    },
    link: {
      x: mousePositon.x - 8,
      y: mousePositon.y - 8,
      opacity: 0,
      scale: 3,
    },
    none: {
      x: mousePositon.x - 8,
      y: mousePositon.y - 8,
    },
  };
  return { variantsDot, cursorVariant, variantsRing, mobile, mounted };
};

export default useCustomCursor;
