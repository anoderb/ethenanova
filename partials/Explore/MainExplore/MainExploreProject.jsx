import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TitleText, TypingText } from "../../../components/CustomTexts";
import EachRender from "../../../lib/EachRender";
import { capitalizeFirstLetter } from "../../../lib/constants";
import fadeIn from "../../../lib/framer/animations/fadeIn";
import planetVariants from "../../../lib/framer/planetVariants";
import staggerContainer from "../../../lib/framer/staggerContainer";
import getData from "./function/getData";

export default function MainExploreProjects({ query }) {
  const data = getData(query);

  return (
    <EachRender
      of={data}
      render={(item) => (
        <section key={item.id} className="relative z-10 paddings">
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
                src={item.image}
                alt={item.name}
                width={1500}
                height={1500}
                className="w-[90%] h-[90%] object-contain"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex flex-col justify-center flex-[0.75]"
            >
              <TypingText title={`| ${capitalizeFirstLetter(query)} Space`} />
              <TitleText title={item.name} />
              <div className="max-w-[370px] mt-[31px] flex flex-col gap-[24px]">
                <div className="flexCenter flex-row">
                  <p className="text-[18px] ml-[30px] font-normal flex-1 leading-[32.4px] text-[#B0B0B0]">
                    {item.desc}
                  </p>
                </div>
                <Link
                  href={item.website}
                  target="_blank"
                  className="h-fit py-4 px-28 text-[16px] flex items-center gap-[12px] rounded-[32px] font-normal bg-[#25618B] text-white"
                >
                  Enter To {capitalizeFirstLetter(query)}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>
      )}
    />
  );
}
