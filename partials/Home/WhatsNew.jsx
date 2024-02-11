import { motion } from "framer-motion";
import Image from "next/image";
import { TitleText, TypingText } from "../../components/CustomTexts";
import NewFeatures from "../../components/home/NewFeatures";
import EachRender from "../../lib/EachRender";
import newFeatures from "../../lib/constants/newFeatures";
import fadeIn from "../../lib/framer/animations/fadeIn";
import planetVariants from "../../lib/framer/planetVariants";
import staggerContainer from "../../lib/framer/staggerContainer";

const WhatsNew = () => (
  <section className={`paddings relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`innerWidth mx-auto flex flex-col lg:flex-row gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex flex-col justify-center flex-[0.95]"
      >
        <TypingText title="| Whats new?" />
        <TitleText title="What's new about Ethena Nova" />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          <EachRender
            of={newFeatures}
            render={(feature) => (
              <NewFeatures key={feature.title} {...feature} />
            )}
          />
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className="flexCenter flex-1"
      >
        <Image
          src="/images/ethernal/ethernal-5.webp"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
          width={3000}
          height={3000}
          quality={100}
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
