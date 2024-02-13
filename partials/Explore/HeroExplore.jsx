import { motion } from "framer-motion";
import staggerContainer from "../../lib/framer/staggerContainer";
import textVariant from "../../lib/framer/text/textVariant";

const Hero = () => (
  <section className="yPaddings sm:pl-16 pl-6">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <h1 className="relative z-10 flexCenter flex-col">
        <motion.div variants={textVariant(1.1)} className="heroHeading">
          EXPLORE
        </motion.div>
        <motion.div variants={textVariant(1.2)} className="flexCenter flex-row">
          <div className="heroHeading">Interchain</div>
        </motion.div>
      </h1>
    </motion.div>
  </section>
);

export default Hero;
