import classes from "./image-loader.module.scss";
import ImageLoaderImpl from "./types";

const ImageLoader = ({ size }: ImageLoaderImpl) => {
  return (
    <>
      <div
        className={`${classes.loader} ${
          size === "md" ? "h-[50px] w-[50px]" : "h-[80px] w-[80px]"
        }`}
      >
        <span
          className={`${classes["loader-after"]} dark:bg-zinc-900 bg-white ${
            size === "md" ? "h-[45px] w-[45px]" : "h-[75px] w-[75px]"
          }`}
        ></span>
      </div>
    </>
  );
};
export default ImageLoader;
