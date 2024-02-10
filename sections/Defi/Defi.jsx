'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../../styles';
import { bridgedesc } from '../../constants';
import CrossSteps from '../../components/Bridge/Cross';
import { TitleText, TypingText } from '../../components/home';
import { staggerContainer, fadeIn, planetVariants } from '../../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/Bridge/obiter.png"
          alt="obiter"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Bridge Space" />
        <TitleText title={<>Obiter Finance</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {bridgedesc.map((feature, index) => (
            <CrossSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
          <a href="https://obiter.finance" target="_blank" rel="noopener noreferrer" className="flex items-center h-fit py-4 px-28 bg-[#25618B] rounded-[32px] gap-[12px] text-white text-[16px] font-normal">
          Enter To Bridge
          </a>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
