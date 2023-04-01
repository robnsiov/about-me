import Link from "next/link";

import SocialImpl from "./types";

const Social = ({ children, href, className }: SocialImpl) => {
  return (
    <>
      <Link
        aria-label={href}
        href={href}
        className={`flex rounded-full border-2 p-3.5 
                 transition-all duration-300 hover:text-white ${className}`}
      >
        {children}
      </Link>
    </>
  );
};
export default Social;
