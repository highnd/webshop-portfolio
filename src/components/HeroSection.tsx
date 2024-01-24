"use client";
import Image from "next/image";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
  slideInFromRight,
} from "@/utils/motion";

import { TypingText } from "./CustomText";
import CountUp from "react-countup";
import { BsArrowRight } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import GridAnimation3D from "./GridAnimation3D";
import { ShuffleGrid } from "./ShuffleHero";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, -2]);
  const x = useTransform(scrollYProgress, [0, 1], [-100, 1000]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <section className="relative flex flex-col w-full h-[112vh] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="rotate-[-340deg] absolute top-[-30px] right-[-360px]  bg-cover object-cover z-[8]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* welcome box */}

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex md:flex-row flex-col items-center justify-center lg:px-20 px-4 mt-32 w-full   z-20 "
      >
        <div className="relative z-50 h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="Welcome-box  py-4 px-4 border border-[#7042f88b]  flex"
          >
            <IoSparkles className=" text-[#b49bff] mr-3 h-5 w-5" />
            <TypingText
              title="| Fullstack Developer Portfolio"
              textStyles="Welcome-text"
            />
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col  mt-6 md:text-6xl text-3xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              Providing
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r
             from-purple-500 to-cyan-500"
              >
                {" "}
                the best
              </span>
            </span>
            project experience
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.8)}
            className="md:text-lg text-gray-400 max-w-[600px] "
          >
            I&apos;m a Full Stack Software Engineer with experience in website &
            Software development . Check out my projects & Skills.
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="flex  md:gap-x-6 gap-x-2 lg:w-[600px] h-[100px] mb-2"
          >
            {/* experienced */}
            <div className="countUpContainer md:pl-0 pl-2">
              <div className="sm:text-2xl text-lg xl:text-3xl  font-extrabold  mb-2 Welcome-text">
                <CountUp start={0} end={2} duration={5} />
              </div>
              <div
                className="sm:text-xs  text-[7px] uppercase tracking-[1px] leading-[1.2] text-transparent
               bg-clip-text bg-gradient-to-t from-purple-500 to-cyan-300"
              >
                Years of experience
              </div>
            </div>
            {/* clients */}
            <div className="countUpContainer ">
              <div className="sm:text-2xl text-lg xl:text-3xl font-extrabold mb-2 Welcome-text">
                <CountUp start={0} end={12} duration={5} />
              </div>
              <div
                className="sm:text-xs text-[7px] uppercase tracking-[1px] leading-[1.2] text-transparent
               bg-clip-text bg-gradient-to-t from-purple-500 to-cyan-300"
              >
                satisfied clients
              </div>
            </div>
            {/* finished project */}
            <div className="countUpContainer">
              <div className="sm:text-2xl text-lg xl:text-3xl font-extrabold  mb-2 Welcome-text">
                <CountUp start={0} end={4} duration={5} />
              </div>
              <div
                className="sm:text-xs text-[7px] uppercase tracking-[1px] leading-[1.2] text-transparent 
              bg-clip-text bg-gradient-to-t from-purple-500 to-cyan-300"
              >
                Finished Projects
              </div>
            </div>
            {/*  awards */}
            <div className="relative  ">
              <div className="sm:text-2xl text-lg  xl:text-3xl font-extrabold  mb-2 Welcome-text">
                <CountUp start={0} end={2} duration={5} />
              </div>
              <div
                className="sm:text-xs text-[7px] uppercase tracking-[1px] leading-[1.2] text-transparent bg-clip-text
               bg-gradient-to-t from-purple-500 to-cyan-300"
              >
                winning awards
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="flex md:justify-start justify-center gap-6 "
          >
            <button
              className=" rounded-lg border border-white/50 max-w-[250px] md:px-12 px-4 py-2
             transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-cyan-500
              bg-cyan-500 hover:bg-transparent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-bold md:text-md text-sm">
                Download CV
              </span>
              <AiOutlineDownload
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
               group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-cyan-500"
              />
            </button>
            <button
              className=" rounded-lg border border-white/50 max-w-[200px] md:px-12 px-6 py-2 transition-all duration-300
             flex items-center justify-center overflow-hidden hover:border-purple-500 bg-purple-700 hover:bg-transparent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-bold md:text-md text-sm">
                Learn More
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
               group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-purple-500"
              />
            </button>
          </motion.div>
        </div>
        {/* <motion.div
          style={{ x, opacity }}
          variants={slideInFromRight(0.6)}
          className="flex gap-x-4 pt-12"
        >
          <div className="relative w-[300px] grid place-content-center px-8 ">
            <GridAnimation3D />
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
