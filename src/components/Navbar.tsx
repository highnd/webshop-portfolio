"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";
import { circleVariant } from "./variants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/your-path" },
    { title: "About Us", path: "/your-path" },
    { title: "contact us", path: "/your-path" },
    { title: "programs", path: "/your-path" },
    { title: "Login", path: "/login" },
  ];

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      style={{ zIndex: "100" }}
      className="  w-full  bg-[#03001417] backdrop-blur-xl fixed top-0  "
    >
      <div className="items-center px-4 w-full mx-auto md:flex md:pl-20  ">
        <div className="flex items-center justify-between py-2 md:py-4 md:block ">
          <Link href="/">
            <h1 className="text-3xl font-bold text-purple-500">Logo</h1>
          </Link>
          <div className="md:hidden ">
            <button
              className="text-white outline-none p-2 rounded-md focus:border-gray-400"
              onClick={handleToggle}
              ref={buttonRef}
            >
              <svg
                className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* for mobile screen */}
        <motion.div animate={isOpen ? "open" : "closed"}>
          <motion.div
            ref={menuRef}
            variants={circleVariant}
            className="md:hidden flex  justify-center  z-50 bg-[#2d0245de]  w-full h-screen py-16  right-0 absolute  "
          >
            <ul className=" text-2xl ">
              {menus.map((item, idx) => (
                <li
                  key={idx}
                  className={`text-white hover:text-indigo-600  my-4`}
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* for big screen */}
        <div className="hidden md:flex w-full justify-end  mr-12 items-center ">
          <ul className="flex items-center justify-end gap-5">
            {menus.map((item, idx) => (
              <Link href={item.path}>
                <li
                  key={idx}
                  className={`${
                    item.title === "Login"
                      ? "btn px-24 ml-28 text-black bg-white  border-2 py-1 hover:bg-indigo-500 hover:border-white hover:text-white "
                      : "hover:text-blue-800 text-white"
                  }  hover:text-indigo-600 font-bold`}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
