import Link from "next/link";
import { usePathname } from "next/navigation";
import InnerMenuImpl from "./types";

const InnerMenu = ({ items, lg = true }: InnerMenuImpl) => {
  const pathname = usePathname();
  return (
    <>
      {items.map(
        ({ href, icon: icon, onclick, title, rounded, activeIcon }) => (
          <Link
            key={title + href}
            href={href}
            onClick={onclick}
            className={`font-normal text-gray-600 dark:text-gray-400 group relative flex h-12 w-12 items-center justify-center
         bg-zinc-50 text-2xl  dark:bg-zinc-900  transition-all 
         duration-200 group ${pathname === href ? "" : ""} ${
              rounded
                ? "rounded-full border-2 border-transparent hover:border-gray-300 dark:hover:border-white"
                : "rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800"
            }`}
          >
            {!rounded ? (pathname === href ? activeIcon : icon) : icon}

            {title && (
              <span
                className={`pointer-events-none absolute left-14 rounded-lg bg-zinc-50 
          px-2 py-3 text-sm tracking-widest dark:bg-zinc-900 transition-all opacity-0 
          duration-[0.35s] group-hover:translate-y-0 group-hover:opacity-100 ease-out ${
            pathname === href ? "font-semibold" : ""
          } ${lg ? "translate-y-12" : "translate-y-0 opacity-100"}`}
              >
                {title}
              </span>
            )}
          </Link>
        )
      )}
    </>
  );
};
export default InnerMenu;
