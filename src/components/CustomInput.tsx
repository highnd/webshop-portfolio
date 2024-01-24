"use client";
import React from "react";
import { CustomInputProps } from "@/types";
const CustomInput = ({
  placeholder,
  addIcon,
  inputStyle,
  icon,
  inputType,
  iconStyle,
  value,
  containerStyles,
  onChange,
}: CustomInputProps) => {
  return (
    <div className={containerStyles}>
      <input
        type={inputType}
        placeholder={placeholder}
        className={inputStyle}
        value={value}
        onChange={onChange}
      />
      {addIcon ? <span className={iconStyle}>{icon}</span> : null}
    </div>
  );
};

export default CustomInput;
