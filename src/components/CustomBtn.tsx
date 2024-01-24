"use client";
import React, { useEffect, useRef } from "react";
import { CustomButtonProps } from "@/types";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

export const CustomButton = ({
  title,
  titleStyle,
  addArrow,
  containerStyles,
  btnType,
  disabled,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled || false}
      type={btnType || "button"}
      className={`custom-button ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`title ${titleStyle}`}>{title}</span>
      {addArrow ? (
        <BsArrowRight
          className="-translate-y-[120%]  translate-x-[120%] opacity-0 text-green-300  group-hover:flex 
        group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[22px]"
        />
      ) : null}
    </button>
  );
};

export const SpotlightButton = () => {
  const btnRef = useRef<any>(null);
  const spanRef = useRef<any>(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef?.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef?.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current?.addEventListener("mousemove", handleMouseMove);
    btnRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current?.removeEventListener("mousemove", handleMouseMove);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs  overflow-hidden rounded-lg
      bg-gradient-to-r from-orange-500 via-red-500 to-purple-700 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 ">Adjusting</span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%]
         -translate-y-[50%] rounded-full bg-gradient-to-r from-lime-500 to-cyan-600"
      />
    </motion.button>
  );
};

export const DrawOutlineButton = ({ children, ...rest }: any) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-3 font-medium text-slate-100 transition-colors 
      duration-[400ms]   border-white/10 bg-purple-900 hover:bg-transparent "
    >
      <span className="tracking-widest text-glow">{children}</span>

      {/* TOP */}
      <span
        className="absolute left-0 top-0 h-[2px] w-0
       bg-indigo-300 transition-all duration-300 group-hover:w-full"
      />

      {/* RIGHT */}
      <span
        className="absolute right-0 top-0 h-0 w-[2px]
       bg-indigo-300 transition-all delay-100 duration-300 group-hover:h-full"
      />

      {/* BOTTOM */}
      <span
        className="absolute bottom-0 right-0 h-[2px] w-0
       bg-indigo-300 transition-all delay-200 duration-300 group-hover:w-full"
      />

      {/* LEFT */}
      <span
        className="absolute bottom-0 left-0 h-0 w-[2px]
       bg-indigo-300 transition-all delay-300 duration-300 group-hover:h-full"
      />
    </button>
  );
};

export default DrawOutlineButton;
