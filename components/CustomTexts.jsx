import { motion } from "framer-motion";
import textContainer from "../lib/framer/text/textContainer";
import textVariant2 from "../lib/framer/text/textVariant2";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-[14px] font-normal text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter) => (
      <motion.span variants={textVariant2} key={letter}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`text-[40px] md:text-[64px] mt-[8px] font-bold text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
