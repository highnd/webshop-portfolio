import Image from "next/image";
import React from "react";
import { IoSparkles } from "react-icons/io5";
import { MdPlayCircleFilled } from "react-icons/md";

const RightBar = () => {
  return (
    <div className="container ">
      <div className="item relative bg-gradient-to-b from-soft/40 to-primary py-2 px-4 rounded-lg mb-5">
        <div className="img absolute bottom-2 right-3 w-1/3 h-1/3">
          <Image
            src={"/big-earth.png"}
            alt=""
            fill
            className="object-fit opacity-25"
          />
        </div>
        <div className="texts flex flex-col gap-3">
          <span className="flex items-center gap-2 font-[500]">
            <IoSparkles className="text-purple-400" /> Available Now
          </span>
          <h3 className=" font-bold ">
            how to use the new version of the admin dashboard?
          </h3>
          <span className="font-[500] text-sm text-soft">
            Takes 4 minutes to learn
          </span>
          <p className="font-[500] text-xs text-soft">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            voluptas provident asperiores corporis beatae porro eveniet?
          </p>
        </div>

        <button
          className=" rounded-full border border-white/50 max-w-[100px]  px-4 py-2 transition-all duration-300 my-3
             flex items-center justify-center overflow-hidden hover:border-purple-500 bg-purple-700 hover:bg-transparent group"
        >
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500   text-xs">
            Watch
          </span>
          <MdPlayCircleFilled
            className="-translate-y-[60%] opacity-0 group-hover:flex group-hover:-translate-y-0
               group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-purple-500"
          />
        </button>
      </div>
      {/* second box */}
      <div className="item relative bg-gradient-to-b from-soft/40 to-primary px-3 py-5 rounded-lg mb-3">
        <div className="texts flex flex-col gap-3">
          <span className="flex items-center gap-2 font-[500]">
            <IoSparkles className="text-purple-400" /> Coming soon
          </span>
          <h3 className=" font-bold ">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="font-[500] text-sm text-soft">
            Boost your Productivity
          </span>
          <p className="font-[500] text-xs text-soft">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            voluptas provident asperiores corporis beatae porro eveniet?
          </p>
        </div>

        <button
          className=" rounded-full border border-white/50 max-w-[100px]  px-4 py-2 transition-all duration-300 my-3
             flex items-center justify-center overflow-hidden hover:border-purple-500 bg-purple-700 hover:bg-transparent group"
        >
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500   text-xs">
            Learn
          </span>
          <MdPlayCircleFilled
            className="-translate-y-[60%] opacity-0 group-hover:flex group-hover:-translate-y-0
               group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-purple-500"
          />
        </button>
      </div>
    </div>
  );
};

export default RightBar;
