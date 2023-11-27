import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import WorkCard from "./WorkCard";

const SingleWork = ({ item }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // const { scrollY } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });
  // const scaleX = useSpring(scrollY, {
  //   stiffness: 100,
  //   damping: 30,
  // });

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 2]);

  const x2 = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  const scale2 = useTransform(scrollYProgress, [0, 1], [0.1, -1]);
  const opacity2 = useTransform(scrollYProgress, [0, 1], [0, 2]);
  return (
    <section ref={ref} className="relative  overflow-hidden pt-24 z-[50]  ">
      <motion.div style={{ x, scale, opacity }} className="  pt-12 ">
        <Image
          src={"/uranus-03.png"}
          alt="talents"
          width={450}
          height={450}
          className="-rotate-[240deg] absolute -left-[27rem] -top-36 "
        />
      </motion.div>
      <motion.div
        style={{ x: x2, scale: scale2, opacity: opacity2 }}
        className="  pt-12 "
      >
        <Image
          src={"/uranus-03.png"}
          alt="talents"
          width={450}
          height={450}
          className="-rotate-[240deg] absolute right-[35rem] bottom-72 "
        />
      </motion.div>

      {/* <motion.div
        style={{ y: y }}
        className="relative   w-full h-full flex  py-24  px-64 gap-12"
      >
        <div className="imageContainer  w-full h-full ">
          <Image
            src={"/banner.png"}
            className="bg-cover "
            alt="work"
            width={500}
            height={500}
          />
        </div>
        <div className="textContainer w-full h-full  pt-4 ">
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            quae sapiente asperiores reprehenderit doloribus labore cumque, amet
            maiores laboriosam aspernatur pariatur laborum excepturi maxime
          </p>
          <button className=" rounded-full border border-white/50 max-w-[200px] md:px-12 px-6 py-2 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-purple-500 bg-purple-700 hover:bg-transparent group">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-bold md:text-md text-sm">
              see Demo
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-purple-500" />
          </button>
        </div>
      </motion.div> */}
      <WorkCard reference={ref} />
      {item.title}
    </section>
  );
};

export default SingleWork;
