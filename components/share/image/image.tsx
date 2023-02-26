import NextImage from "next/image";
import ImageLoader from "./image-loader/image-loader";
import ImageImpl from "./types";
import useImage from "./use-image";

const Image = ({ className, height, src, width, alt }: ImageImpl) => {
  const { error, loading, endLoading, activationError } = useImage();
  console.log(loading, error);
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        {(loading || error) && (
          <>
            (
            <div className="absolute inset-0 z-[100] flex justify-center items-center">
              {loading && !error && (
                <>
                  <div className="absolute inset-0 z-[100] bg-white-100/40"></div>
                  <div>
                    <ImageLoader />
                  </div>
                </>
              )}
              {error && (
                <div className="absolute inset-0 z-[100] bg-red-400"></div>
              )}
            </div>
            )
          </>
        )}
        <NextImage
          onLoad={endLoading}
          onError={activationError}
          alt={alt}
          className={className}
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
