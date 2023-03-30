import classes from "./image-loader.module.scss";

const ImageLoader = () => {
  return (
    <>
      <div className={classes.loader}>
        <span
          className={`${classes["loader-after"]} dark:bg-zinc-900 bg-white`}
        ></span>
      </div>
    </>
  );
};
export default ImageLoader;
