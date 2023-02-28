import Footer from "@/components/user/footer/footer";
import Menu from "@/components/user/menu/menu";
import ContainerImpl from "./types";

const Container = ({ children }: ContainerImpl) => {
  return (
    <>
      <div className="bg-stone-50 dark:bg-zinc-900 relative">
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
        <div className="relative z-[10] min-h-screen">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Container;
