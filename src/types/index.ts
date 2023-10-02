import { MouseEventHandler, ChangeEvent } from "react";

export interface CustomButtonProps {
  title: string;
  titleStyle: string;
  addArrow?: boolean;
  containerStyles?: string;
  btnType?: "button" | "submit";
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomInputProps {
  placeholder: string;
  addIcon?: boolean;
  containerStyles?: string;
  inputStyle?: string;
  inputType: string;
  icon?: any;
  iconStyle?: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SignUpForm {
  email: string;
  password: string;
  username: string;
}

export interface searchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
