import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const WorkCard = ({ reference }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0", "-300%"]);
  return (
    <motion.div
      style={{ y: y }}
      className="relative   w-full h-full flex  py-24  px-64 gap-12"
    >
      <div className="imageContainer  w-full h-full ">
        <Image
          src={"/banner.png"}
          className="bg-cover rounded-full "
          alt="work"
          width={500}
          height={500}
        />
      </div>
      <div className="textContainer w-full h-full  pt-4 ">
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quae
          sapiente asperiores reprehenderit doloribus labore cumque, amet
          maiores laboriosam aspernatur pariatur laborum excepturi maxime
        </p>
        <button className=" rounded-full border border-white/50 max-w-[200px] md:px-12 px-6 py-2 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-purple-500 bg-purple-700 hover:bg-transparent group">
          <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-bold md:text-md text-sm">
            see Demo
          </span>
          <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-purple-500" />
        </button>
      </div>
    </motion.div>
  );
};

export default WorkCard;
