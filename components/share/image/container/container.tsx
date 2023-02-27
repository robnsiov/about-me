import Menu from "@/components/user/menu/menu";
import ContainerImpl from "./types";

const Container = ({ children }: ContainerImpl) => {
  return (
    <>
      <div className="bg-white-100 dark:bg-black-100 relative">
        <span
          className="fixed left-0 top-[calc(50%+100px)] -translate-y-1/2 aspect-square w-80
         rounded-full bg-orange-500 bg-opacity-50 blur-3xl dark:bg-opacity-20"
        ></span>
        <span
          className="fixed right-0 top-0 aspect-square w-80 
        rounded-full bg-blue-500 bg-opacity-50 blur-3xl dark:bg-opacity-20"
        ></span>
        <span
          className="fixed right-0 bottom-0 aspect-square w-80 
        rounded-full bg-red-500 bg-opacity-50 blur-3xl dark:bg-opacity-20 sm:bottom[unset] sm:top-full"
        ></span>
        <Menu />
        <div className="relative z-[10]">{children}</div>
      </div>
    </>
  );
};
export default Container;
