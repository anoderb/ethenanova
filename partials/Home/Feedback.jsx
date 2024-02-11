import { motion } from "framer-motion";
import fadeIn from "../../lib/framer/animations/fadeIn";
import staggerContainer from "../../lib/framer/staggerContainer";

const Feedback = () => (
  <section className="paddings">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col lg:flex-row gap-6"
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flexCenter flex-1"
      >
        <img
          src="/images/galaxy.png"
          alt="galaxy"
          className="w-full h-auto min-h-[210px] lg:h-[610px] object-cover rounded-[40px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
