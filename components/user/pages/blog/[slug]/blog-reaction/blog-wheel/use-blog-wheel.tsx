import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";

const useBlogWheel = (activeIndex: number) => {
  const [sliderRef, slider] = useKeenSlider({
    vertical: true,
    initial: 1,
    defaultAnimation: {
      duration: 850,
    },
  });
  const moveToIndex = (idx: number) => {
    slider.current?.moveToIdx(idx);
  };

  useEffect(() => {
    moveToIndex(activeIndex);
  }, [activeIndex]);

  return { sliderRef };
};
export default useBlogWheel;
