"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TitleText, TypingText } from "../../components/CustomTexts";
import ExplorePage from "../../components/explore/ExplorePage";
import exploreTools from "../../lib/constants/exploreTools";
import staggerContainer from "../../lib/framer/staggerContainer";
import styles from "../../styles";

const Product1 = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Space" textStyles="text-center" />
        <TitleText
          title="Choose the space you want to explore"
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:grid lg:grid-cols-3 flex-col min-h-[70vh] gap-5 lg:space-x-1">
          {exploreTools.map((world, index) => (
            <ExplorePage
              key={world.id}
              {...world}
              index={index}
              active={active}
              query={world.query}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Product1;
