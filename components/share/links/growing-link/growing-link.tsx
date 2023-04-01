import Link from "next/link";

import GrowingLinkImpl from "./types";

const GrowingLink = ({ href, title }: GrowingLinkImpl) => {
  return (
    <>
      <Link
        aria-label={href}
        href={href}
        className="bg-growing-underline bg-gradient-to-t from-red-500 to-red-500 tracking-widest hover:bg-full text-zinc-900 
                dark:text-white"
      >
        {title}
      </Link>
    </>
  );
};
export default GrowingLink;
