import "keen-slider/keen-slider.min.css";
import BlogWheelImpl from "./types";
import useBlogWheel from "./use-blog-wheel";

const BlogWheel = ({ count, activeIndex }: BlogWheelImpl) => {
  const { sliderRef } = useBlogWheel(activeIndex);
  return (
    <>
      <div className="w-14 h-16  overflow-hidden">
        <div
          ref={sliderRef}
          className="keen-slider relative top-[10px]
            text-lg text-[19px] dark:text-white text-zinc-900 font-medium"
        >
          <div className="keen-slider__slide number-slide1">
            <span className="relative top-2">{count - 1}</span>
          </div>
          <div className="keen-slider__slide number-slide1">
            <span className="relative top-2">{count}</span>
          </div>
          <div className="keen-slider__slide number-slide1">
            <span className="relative top-2">{count + 1}</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogWheel;
