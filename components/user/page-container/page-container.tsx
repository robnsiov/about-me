import PageContainerImpl from "./types";

const PageContainer = ({ children, className = "" }: PageContainerImpl) => {
  return (
    <>
      <div className="w-full">
        <div
          className={`max-w-6xl w-full mx-auto px-8 py-16 relative -left-[65px] 
        1362px:left-0  flex justify-start items-center md:flex-col-reverse ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
export default PageContainer;
