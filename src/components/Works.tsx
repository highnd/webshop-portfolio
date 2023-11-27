"use client";
import { ParallaxProps } from "@/types";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import SingleWork from "./SingleWork";

const worksData = [
  {
    id: 1,
    title: "React Portfolio",
    image: "https://www.pexels.com/photo/photo-of-imac-near-macbook-1029757/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi maxime quasi et deleniti saepe eius!",
  },
  {
    id: 2,
    title: "React Dashboard",
    image: "https://www.pexels.com/photo/photo-of-imac-near-macbook-1029757/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi maxime quasi et deleniti saepe eius!",
  },
  {
    id: 3,
    title: "React E-Commerce",
    image: "https://www.pexels.com/photo/photo-of-imac-near-macbook-1029757/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi maxime quasi et deleniti saepe eius!",
  },
  {
    id: 4,
    title: "React Authentication ",
    image: "https://www.pexels.com/photo/photo-of-imac-near-macbook-1029757/",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nisi maxime quasi et deleniti saepe eius!",
  },
];

const Works = ({ type }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  });

  return (
    <div ref={ref} className="relative  ">
      {/* header */}
      <div className="text-center sticky top-24 left-0  px-24 z-[60] ">
        <h1 className="text-center text-6xl text-bold text-white mb-4">
          my Projects
        </h1>

        <motion.div
          style={{ scaleX, boxShadow: "20px 20px 150px 3px #0ff" }}
          className="progressbar h-2 rounded-full bg-cyan-300 transition ease-in-out duration-75"
        ></motion.div>
      </div>
      {/* Works */}
      {worksData.map((item) => (
        <SingleWork item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Works;
