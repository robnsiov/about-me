import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import ImageLoaderImpl from "./types";
import "react-loading-skeleton/dist/skeleton.css";

const ImageLoader = ({ inProp }: ImageLoaderImpl) => {
  const nodeRef = useRef(null);
  return (
    <>
      <div className="absolute inset-0 z-100">
        <CSSTransition
          in={inProp}
          nodeRef={nodeRef}
          timeout={300}
          classNames={{
            enter: "fade-enter",
            enterActive: "fade-enter-active",
            exit: "fade-exit",
            exitActive: "fade-exit-active",
          }}
          unmountOnExit
        >
          <div ref={nodeRef} className="absolute inset-0">
            <SkeletonTheme baseColor="#475569" highlightColor="#64748b">
              <Skeleton
                className="w-full h-full"
                style={{ borderRadius: "0px" }}
                containerClassName="w-full h-full flex"
              />
            </SkeletonTheme>
          </div>
        </CSSTransition>
      </div>
    </>
  );
};
export default ImageLoader;
