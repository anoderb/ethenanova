import { motion } from "framer-motion";
import Image from "next/image";
import fadeIn from "../../lib/framer/animations/fadeIn";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-col md:flex-row gap-4"
  >
    <Image
      src={imgUrl}
      alt="ethernal-1"
      width={1000}
      height={1000}
      quality={100}
      loading="lazy"
      className="w-full md:w-[270px] h-[250px] rounded-[32px] object-cover"
    />

    <div className="w-full flex justify-between items-center">
      <div className="max-w-[650px] flex flex-col flex-1 md:ml-[62px]">
        <h2 className="text-[26px] lg:text-[42px] font-normal text-white">
          {title}
        </h2>
        <p className="text-[14px] lg:text-[20px] mt-[16px] font-normal text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="w-[100px] h-[100px] lg:flexCenter hidden rounded-full bg-transparent border-[1px] border-white">
        <Image
          src="/icons/arrow.svg"
          alt="arrow"
          width={60}
          height={60}
          loading="lazy"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
