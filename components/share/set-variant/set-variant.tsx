"use client";
import SetVariantImpl from "./types";
import useSetVariant from "./use-set-variant";

const SetVariant = ({ children, variant, className = "" }: SetVariantImpl) => {
  const { onMounseEnter, onMounseLeave } = useSetVariant(variant);
  return (
    <div
      onMouseEnter={onMounseEnter}
      onMouseLeave={onMounseLeave}
      className={`inline-flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};
export default SetVariant;
