"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { TypingText } from "./CustomText";
import { IoSparkles } from "react-icons/io5";
import { useAnimate } from "framer-motion";
import { SpotlightButton } from "./CustomBtn";
import ShuffleGrid from "./ShuffleHero";

const Info = () => {
  // const [scope, animate] = useAnimate();
  // const [isAnimate, setIsAnimate] = useState(false);

  // const handleAnimate = async () => {
  //   isAnimate &&
  //     (await animate(
  //       "#target",
  //       { x: 10, rotate: "-100deg", scale: "0.6" },
  //       { duration: 0.8 }
  //     ));
  //   await animate("#target", { y: -230 }, { duration: 0.8 });
  //   !isAnimate &&
  //     (await animate(
  //       "#target",
  //       { x: 1200, y: -300, scale: "0.6", rotate: "100deg" },
  //       { duration: 2 }
  //     ));
  // };

  return (
    <section className=" px-8 py-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-6xl mx-auto relative">
      {/* <div className="my-star"></div> */}
      <div className="my-star"></div>
      <div className="my-star"></div>
      <div>
        <div className="flex flex-col  md:text-5xl text-3xl font-bold text-white  w-auto h-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="Welcome-box my-2 py-4 px-4 border border-[#7042f88b]  flex"
          >
            <IoSparkles className=" text-[#b49bff] mr-3 h-5 w-5" />
            <TypingText
              title="| frameworks and Ui/Ux"
              textStyles="Welcome-text"
            />
          </motion.div>
          <span>
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r
             from-purple-500 to-orange-500"
            >
              {" "}
              design with your preference
            </span>
          </span>
          choose every detail
        </div>

        <div className="md:text-lg text-gray-400 mt-2 ">
          you can select every detail about your website , first sign up then
          answer some question about your character and personal taste . our
          team check your Info and contact with you in right time
        </div>
        <div className="relative z-[50] my-4">
          <SpotlightButton />
        </div>
      </div>

      <ShuffleGrid />
    </section>
  );
};

export default Info;
