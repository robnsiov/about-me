import Link from "next/link";
import SocialAppImpl from "./types";

const SocialApp = ({ children, href }: SocialAppImpl) => {
  return (
    <>
      <Link
        href={href}
        target="_blank"
        className="transition-all duration-200 text-gray-600 hover:text-gray-900 dark:text-gray-500 
        dark:hover:text-gray-50"
      >
        {children}
      </Link>
    </>
  );
};
export default SocialApp;
