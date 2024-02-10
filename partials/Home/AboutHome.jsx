import { motion } from "framer-motion";
import Link from "next/link";
import { TypingText } from "../../components/CustomTexts";
import fadeIn from "../../lib/framer/animations/fadeIn";
import staggerContainer from "../../lib/framer/staggerContainer";

// eslint-disable-next-line
const HighlightText = () => {
  return <span className="font-extrabold text-white">Ethena Nova</span>;
};

const About = () => (
  <section className={`paddings relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={"innerWidth mx-auto flexCenter flex-col"}
    >
      <TypingText title="| About Ethena" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-[20px] sm:text-[32px] mt-2 font-normal text-center text-secondary-white"
      >
        <HighlightText /> is a new space in the Crypto world, where you can wade
        through vast spaces on various networks from layer 1 layer 2 or others,
        you can experience the ease of transactions on <HighlightText /> because
        this is the innovation. <HighlightText /> invites you to explore by
        scrolling down.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/icons/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-7 mt-7 mb-6 object-contain animate-bounce"
      />

      <Link href={"/explore"}>
        <button
          type="button"
          className="h-fit text-[16px] py-4 px-6 flex items-center gap-3 font-normal rounded-full text-white bg-[#25618B]"
        >
          Get Started
        </button>
      </Link>
    </motion.div>
  </section>
);

export default About;
