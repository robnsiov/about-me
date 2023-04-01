import { HiOutlineHome, HiHome } from "react-icons/hi";
import { BsGrid1X2Fill, BsGrid1X2 } from "react-icons/bs";
import { MdSchool, MdOutlineSchool } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { TbMoon } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useLockedBody } from "usehooks-ts";

import { initTheme, setThemeToDark, setThemeToLight } from "@/utils/theme";

const useMenu = () => {
  const [theme, setTheme] = useState("dark");
  const [showModal, setShowModal] = useState(false);
  const [_, setLocked] = useLockedBody(false, "root");

  const toggleModal = () => {
    setLocked(!showModal);
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
    setLocked(false);
  };
  const toggleTheme = () => {
    if (localStorage.theme === "dark") {
      setThemeToLight();
      setTheme("light");
    } else {
      setThemeToDark();
      setTheme("dark");
    }
  };
  useEffect(() => {
    const theme = initTheme();
    setTheme(theme);
  }, []);
  return {
    items: [
      {
        href: "/",
        icon: <HiOutlineHome />,
        activeIcon: <HiHome />,
        title: "Home",
        onclick() {
          closeModal();
        },
      },
      {
        href: "/blog",
        icon: <BsGrid1X2 className="text-xl" />,
        activeIcon: <BsGrid1X2Fill className="text-xl" />,
        title: "Blog",
        onclick() {
          closeModal();
        },
      },
      {
        href: "/about",
        icon: <MdOutlineSchool />,
        activeIcon: <MdSchool />,
        title: "About",
        onclick() {
          closeModal();
        },
      },
      {
        href: "/",
        icon:
          theme === "dark" ? (
            <FiSun className="text-[22px]" />
          ) : (
            <TbMoon className="text-[22px]" />
          ),
        onclick(e: React.MouseEvent<HTMLAnchorElement>) {
          e.preventDefault();
          toggleTheme();
        },
        rounded: true,
      },
    ],
    showModal,
    toggleModal,
  };
};
export default useMenu;
