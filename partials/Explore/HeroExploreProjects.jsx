import { motion } from "framer-motion";
import staggerContainer from "../../lib/framer/staggerContainer";
import textVariant from "../../lib/framer/text/textVariant";

const HeroExploreProjects = ({ name }) => (
  <section className="yPaddings sm:pl-16 pl-6">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <div className="relative z-10 flexCenter flex-col">
        <motion.h1 variants={textVariant(1.1)} className="heroHeading">
          {name}
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className="flexCenter flex-row">
          <h1 className="heroHeading"> Interchain</h1>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default HeroExploreProjects;
