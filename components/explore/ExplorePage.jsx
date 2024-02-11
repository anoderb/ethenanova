import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import fadeIn from "../../lib/framer/animations/fadeIn";

const ToolsCard = ({
  id,
  imgUrl,
  title,
  desc,
  index,
  active,
  handleClick,
  query,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative min-w-[170px] h-[700px] flexCenter ${
      active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"
    } transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt="planet-04"
      width={3000}
      height={3000}
      loading="lazy"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />

    {active !== id ? (
      <h2 className="absolute z-0 lg:bottom-20 text-[18px] sm:text-[26px] font-semibold lg:rotate-[-90deg] lg:origin-[0,0] text-white">
        {title}
      </h2>
    ) : (
      <Link
        href={`explore${query}`}
        className="absolute bottom-0 w-full p-8 flex flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.5)]"
      >
        <div className="w-[60px] h-[60px] flexCenter rounded-[24px] glassmorphism mb-[16px]">
          <Image
            src="/icons/headset.svg"
            alt="headset"
            width={60}
            height={60}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <h3 className="text-[16px] leading-[20.16px] font-normal uppercase text-white">
          Cooming soon.
        </h3>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          {desc}
        </p>
      </Link>
    )}
  </motion.div>
);

export default ToolsCard;
