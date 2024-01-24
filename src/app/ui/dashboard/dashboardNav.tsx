"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const DashboardNav = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center p-3 bg-secondary rounded-xl">
      <div className="font-bold capitalize text-soft">
        {pathname.split("/").pop()}
      </div>
      {/* menu */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 bg-[#2e374a] p-2 rounded-xl">
          <MdSearch className="cursor-pointer hover:scale-125" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none outline-none text-soft"
          />
        </div>
        <div className="flex gap-3 cursor-pointer">
          <MdOutlineChat size={20} className="hover:text-purple-500" />
          <MdNotifications size={20} className="hover:text-yellow-500" />
          <MdPublic size={20} className="hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
