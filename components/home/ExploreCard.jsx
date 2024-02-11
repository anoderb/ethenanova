import { motion } from "framer-motion";
import Link from "next/link";
import fadeIn from "../../lib/framer/animations/fadeIn";

const ExploreCard = ({
  id,
  imgUrl,
  title,
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
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="absolute z-0 lg:bottom-20 text-[18px] sm:text-[26px] font-semibold text-whit lg:rotate-[-90deg] lg:origin-[0,0] text-white">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 w-full flex flex-col justify-start bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <Link href={`explore${query}`}>
          <div
            className={`w-[60px] h-[60px] mb-[16px] flexCenter rounded-[24px] glassmorphism`}
          >
            <img
              src="/icons/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="text-[16px] font-normal leading-[20.16px] text-white uppercase">
            Cooming soon.
          </p>
          <h2 className="text-[24px] sm:text-[32px] mt-[24px] font-semibold text-white">
            {title}
          </h2>
        </Link>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
