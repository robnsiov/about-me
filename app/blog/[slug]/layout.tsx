import Script from "next/script";

const BlogDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      {/* <Script src="https://cdn.tailwindcss.com" /> */}
    </>
  );
};
export default BlogDetailLayout;
