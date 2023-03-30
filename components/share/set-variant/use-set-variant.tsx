import useCustomCursorStore, { Variant } from "@/stores/custom-cursor-store";

const useSetVariant = (variant: Variant) => {
  const [setVariant] = useCustomCursorStore((state) => [state.set]);
  const onMounseEnter = () => {
    setVariant(variant);
  };
  const onMounseLeave = () => {
    setVariant("default");
  };
  return { onMounseEnter, onMounseLeave };
};

export default useSetVariant;
