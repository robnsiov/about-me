"use client";
import NextImage from "next/image";
import ImageLoader from "./image-loader/image-loader";
import ImageImpl from "./types";
import useImage from "./use-image";
import errorImage from "../../../public/images/404.jpg";

const Image = ({
  className,
  height,
  src,
  width,
  alt,
  size = "lg",
}: ImageImpl) => {
  const { error, loading, endLoading, activationError } = useImage();
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        {/* <ImageLoader size="md" /> */}
        {loading && <ImageLoader size={size} />}
        {error && (
          <NextImage className={className} src={errorImage} alt="404" />
        )}
        <NextImage
          onLoad={endLoading}
          onError={activationError}
          alt={alt}
          className={`${className} ${!loading && !error ? "block" : "hidden"}`}
          src={src}
          priority
          width={width}
          height={height}
        />
      </div>
    </>
  );
};

export default Image;
