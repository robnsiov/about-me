import { create } from "zustand";

export type Variant = "default" | "none" | "link";

interface CustomCursor {
  cursorVariant: Variant;
  set(variant: Variant): void;
}

const useCustomCursorStore = create<CustomCursor>((set) => ({
  cursorVariant: "default",
  set: (variant) => set({ cursorVariant: variant }),
}));

export default useCustomCursorStore;
