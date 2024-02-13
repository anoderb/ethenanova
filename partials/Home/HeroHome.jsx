import { motion } from "framer-motion";
import staggerContainer from "../../lib/framer/staggerContainer";
import textVariant from "../../lib/framer/text/textVariant";

const Hero = () => (
  <section className="yPaddings pl-6 sm:pl-16">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <h1 className="relative z-10 flex justify-center items-center flex-col">
        <motion.div variants={textVariant(1.1)} className="heroHeading">
          Dashboard
        </motion.div>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <div className="heroHeading"> Interchain</div>
        </motion.div>
      </h1>
    </motion.div>
  </section>
);

export default Hero;
