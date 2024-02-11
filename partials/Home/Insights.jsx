import { motion } from "framer-motion";
import { TitleText, TypingText } from "../../components/CustomTexts";
import InsightCard from "../../components/home/InsightCard";
import EachRender from "../../lib/EachRender";
import insights from "../../lib/constants/insights";
import staggerContainer from "../../lib/framer/staggerContainer";

const Insights = () => (
  <section className="relative z-10 paddings">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight about Ethena Nova" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        <EachRender
          of={insights}
          render={(item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          )}
        />
      </div>
    </motion.div>
  </section>
);

export default Insights;
