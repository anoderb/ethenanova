'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { productItem } from '../../constants';
import { staggerContainer } from '../../utils/motion';
import ToolsCard from '../../components/explore/ExplorePage';

const Product = () => {
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
   <div className="mt-[50px] flex lg:grid lg:grid-cols-3 flex-col min-h-[70vh] gap-5 lg:space-x-1">
          {productItem.map((world, index) => (
            <ToolsCard
              key={world.id}
              {...world}
              index={index}
              active={active}
             desc={world.desc}
             logo={world.logo}
             handleClick={setActive}
            />
          ))}
        </div>


      </motion.div>
    </section>
  );
};

export default Product;
