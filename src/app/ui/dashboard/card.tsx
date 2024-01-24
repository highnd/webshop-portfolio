import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="p-4 w-full flex  gap-5 bg-secondary hover:bg-effect transition-all rounded-lg cursor-pointer">
      <MdSupervisedUserCircle size={24} />
      <div className=" flex flex-col gap-5">
        <span className="">Total Users</span>
        <span className="text-[24px] font-[500]">10.435</span>
        <span className="text-sm font-[300]">
          <span className="text-green-400">12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
