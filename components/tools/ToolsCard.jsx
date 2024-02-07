'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { fadeIn } from '../../utils/motion';

const ToolsCard = ({ id, imgUrl, index, active, title, desc, logo, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[100]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
  
    <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
      <div
        className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px]  mb-[16px]`}
      >
        <img
          src={logo}
          alt="headset"
          className="w-[60px] h-[60px] rounded-[24px]"
        />
      </div>
      <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
        {desc}
      </p>
      <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
        {title}
      </h2>
    </div>
  
  </motion.div>
);

export default ToolsCard;
