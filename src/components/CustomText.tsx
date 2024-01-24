import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";
import { customTextTyping } from "@/types";

export const TypingText = ({ title, textStyles }: customTextTyping) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] transition-all  ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span className=" " variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: customTextTyping) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={` font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);

export const splitLetters = (letters: string, key: string) => {
  return letters.split("").map((letter) => (
    <span
      key={letter}
      className={`name-animation name-animation-${key}  inline-block`}
    >
      {letter}
    </span>
  ));
};
