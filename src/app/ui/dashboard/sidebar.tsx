"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-[90px]  ">
      {/* image profile */}
      <div className="flex items-center gap-5 my-2 ">
        <Image
          className="rounded-[50%] object-cover w-12 h-12"
          alt="profile"
          src={"/banner.png"}
          width={"50"}
          height={"50"}
        />
        <div className="flex flex-col">
          <span className="font-[500] ">mahdi fallah</span>
          <span className="text-soft">Administrator</span>
        </div>
      </div>
      {/* sidebar list */}
      <ul className=" list-none w-full">
        {menuItems.map((category) => (
          <li key={category.title}>
            {" "}
            <span className="text-purple-500 font-bold text-[13px] ">
              {category.title}{" "}
            </span>
            {category.list.map((item) => (
              <Link
                href={item.path}
                key={item.title}
                className={`p-[10px] w-full flex items-center gap-2 hover:bg-effect   cursor-pointer 
              rounded-lg transition-all mt-1 ${
                pathname === item.path ? "bg-effect " : ""
              }`}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </li>
        ))}
      </ul>
      <button
        className={`p-[10px] w-full flex items-center gap-2 hover:bg-[#a94141]  cursor-pointer 
              rounded-lg transition-all mt-1`}
      >
        <MdLogout />
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
