import { motion } from "framer-motion";
import Image from "next/image";
import { TitleText, TypingText } from "../../components/CustomTexts";
import fadeIn from "../../lib/framer/animations/fadeIn";
import staggerContainer from "../../lib/framer/staggerContainer";

const World = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <TypingText title="| Blockchains on the Space" textStyles="text-center" />
      <TitleText
        title="The blockchain space is as vast as an infinite galaxies."
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative w-full h-[550px] mt-[68px] flex"
      >
        <Image
          src="/images/map.webp"
          alt="map"
          width={3000}
          height={2000}
          quality={100}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
