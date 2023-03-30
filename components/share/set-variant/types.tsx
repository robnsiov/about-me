import { Variant } from "@/stores/custom-cursor-store";

export default interface SetVariantImpl {
  children: React.ReactNode;
  variant: Variant;
  className?: string
}
