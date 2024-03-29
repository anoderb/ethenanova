import { motion } from "framer-motion";
import Image from "next/image";
import { TitleText, TypingText } from "../../components/CustomTexts";
import StartSteps from "../../components/StartSteps";
import EachRender from "../../lib/EachRender";
import startingFeatures from "../../lib/constants/startingFeatures";
import fadeIn from "../../lib/framer/animations/fadeIn";
import planetVariants from "../../lib/framer/planetVariants";
import staggerContainer from "../../lib/framer/staggerContainer";

const GetStarted = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col lg:flex-row gap-8"
    >
      <motion.div
        variants={planetVariants("left")}
        className="flexCenter flex-1"
      >
        <Image
          src="/images/ethernal/ethernal-1.webp"
          alt="ethernal-1"
          width={1500}
          height={1500}
          loading="lazy"
          className="w-[88%] h-[88%] object-contain"
        />
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="xPaddings flex flex-col justify-center flex-[0.75]"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title="Get started with just a few clicks" />
        <div className="max-w-[370px] mt-[31px] flex flex-col gap-[24px]">
          <EachRender
            of={startingFeatures}
            render={(feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? "0" : ""} ${index + 1}`}
                text={feature}
              />
            )}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
