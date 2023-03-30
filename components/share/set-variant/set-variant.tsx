"use client";
import SetVariantImpl from "./types";
import useSetVariant from "./use-set-variant";

const SetVariant = ({ children, variant }: SetVariantImpl) => {
  const { onMounseEnter, onMounseLeave } = useSetVariant(variant);
  return (
    <div
      onMouseEnter={onMounseEnter}
      onMouseLeave={onMounseLeave}
      className="inline-flex justify-center items-center"
    >
      {children}
    </div>
  );
};
export default SetVariant;
