'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { exploretools} from '../../constants';
import { exploreWorlds } from '../../constants';
import { staggerContainer } from '../../utils/motion';
import ExplorePage from '../../components/explore/ExplorePage';
import { ExploreCard, TitleText, TypingText } from '../../components/home';

const Product1 = () => {
  const [active, setActive] = useState('world-2');

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
          title={<>Choose the space you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:grid lg:grid-cols-3 flex-col min-h-[70vh] gap-5 lg:space-x-1">
          {exploretools.map((world, index) => (
            <ExplorePage
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Product1;
