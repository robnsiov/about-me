import PageContainerImpl from "./types";

const PageContainer = ({
  children,
  className = "md:flex-col-reverse items-center",
}: PageContainerImpl) => {
  return (
    <>
      <div className="w-full">
        <div
          className={`max-w-6xl w-full min-h-screen mx-auto px-8 py-20 relative -left-[65px] 
        1362px:left-0  flex justify-start ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
export default PageContainer;
