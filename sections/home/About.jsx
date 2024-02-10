'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypingText } from '../../components/home';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Ethernal" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">ETHENA NOVA</span> is a new space in the Crypto world, where you can wade through vast spaces on various networks from layer 1 layer 2 or others, you can experience the ease of transactions on {' '}
        <span className="font-extrabold text-white">
        ETHENA NOVA
        </span>{' '}
        because this is the innovation.{' '}
        {/* <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '} */}
        <span className="font-extrabold text-white">ETHENA NOVA</span> invites you to explore by scrolling down.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
        
      />
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <Link href={'/explore'} className="font-normal text-[16px] text-white">
            Get Started
          </Link>
        </button>
    </motion.div>
  </section>
);

export default About;
