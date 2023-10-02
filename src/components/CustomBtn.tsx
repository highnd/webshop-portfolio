"use client";
import React from "react";
import { CustomButtonProps } from "@/types";
import { BsArrowRight } from "react-icons/bs";

const CustomButton = ({
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
        <BsArrowRight className="-translate-y-[120%]  translate-x-[120%] opacity-0 text-green-300  group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[22px]" />
      ) : null}
    </button>
  );
};

export default CustomButton;
