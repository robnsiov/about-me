"use client";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import InnerMenu from "./inner-menu/inner-menu";
import useMenu from "./use-menu";
const Menu = () => {
  const { items, showModal, toggleModal } = useMenu();

  return (
    <>
      <button
        className="fixed top-0 left-0 z-50 m-6 hidden rounded-full bg-zinc-100 dark:text-zinc-100 p-3 text-2xl
       shadow-lg ring-zinc-400 hover:ring-2
       text-zinc-900 dark:bg-zinc-900 dark:ring-zinc-300 lg:flex"
        onClick={toggleModal}
      >
        <HiOutlineMenu />
      </button>
      <div
        className={`fixed inset-0 z-[91] transition-all duration-300 bg-black bg-opacity-30 backdrop-blur-sm
        flex justify-start items-center ${
          showModal ? "opacity-100 visible" : "invisible opacity-0"
        }`}
        onClick={toggleModal}
      ></div>
      <div
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-[92]
        duration-[0.25s] ease-in-out transition-all flex justify-center items-center flex-col p-4 space-y-5 ${
          showModal ? "translate-x-0" : "-translate-x-36"
        }`}
      >
        <InnerMenu items={items as []} lg={false} />
      </div>
      <div
        className="fixed top-1/2 left-0 -translate-y-1/2 flex justify-center items-center flex-col
         z-50 p-4 space-y-5 duration-400 transition-all lg:-translate-x-8 lg:opacity-0"
      >
        <InnerMenu items={items as []} />
      </div>
    </>
  );
};
export default Menu;
