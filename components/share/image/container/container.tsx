import Footer from "@/components/user/footer/footer";
import Menu from "@/components/user/menu/menu";
import ContainerImpl from "./types";

const Container = ({ children }: ContainerImpl) => {
  return (
    <>
      <div className="bg-stone-50 dark:bg-zinc-900 relative flex justify-center items-center flex-col">
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
        <div className="relative w-full flex justify-center items-center z-[10] min-h-screen">
          <Menu />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Container;
