import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import WorkCard from "./WorkCard";

const SingleWork = ({ item }: any) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 3", "1.33 1"],
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

  const x = useTransform(scrollYProgress, [0, 1], [500, -100]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -10]);

  const scale = useTransform(scrollYProgress, [1, 0], [1, 6]);

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <section ref={ref} className="relative  overflow-hidden pt-24 z-[50]">
      <motion.div style={{ x, y, scale, opacity }} className="  pt-12 ">
        <Image
          src={item.bg}
          alt="talents"
          width={500}
          height={500}
          className="-rotate-[200deg] absolute left-[1rem] transition-all duration-700 -top-2 
         rotate-animation lg:w-[400px] lg:h-[400px] w-[14rem] "
        />
      </motion.div>

      <WorkCard reference={ref} item={item} />
      {/* {item.title} */}
    </section>
  );
};

export default SingleWork;
