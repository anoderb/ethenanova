"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { capitalizeFirstLetter } from "../../lib/constants";
import fadeIn from "../../lib/framer/animations/fadeIn";
import planetVariants from "../../lib/framer/planetVariants";
import staggerContainer from "../../lib/framer/staggerContainer";
import styles from "../../styles";
import { TitleText, TypingText } from "../home";

const bridge = [
  {
    id: 1,
    name: "Obiter Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
  {
    id: 2,
    name: "Stargate Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
];
const defi = [
  {
    id: 1,
    name: "Obiter Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
  {
    id: 2,
    name: "Stargate Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
];
const nfts = [
  {
    id: 1,
    name: "Obiter Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
  {
    id: 2,
    name: "Stargate Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
];
const social = [
  {
    id: 1,
    name: "Obiter Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
  {
    id: 2,
    name: "Stargate Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
];
const tools = [
  {
    id: 1,
    name: "Obiter Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
  {
    id: 2,
    name: "Stargate Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
];
const onramps = [
  {
    id: 1,
    name: "Obiter Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
  {
    id: 2,
    name: "Stargate Finance",
    website: "https://www.orbiter.finance/",
    desc: "Orbiter Finance is a decentralized cross-rollup bridge for transferring the Ethereum native assets, which is the infrastructure of Layer 2, it offers low cost and almost instant transfers.",
    image: "/Bridge/obiter.png",
  },
];

export default function MainExploreProjects({ query }) {
  let data;
  switch (query) {
    case "bridge":
      data = bridge;
      break;
    case "onramps":
      data = onramps;
      break;
    case "nfts":
      data = nfts;
      break;
    case "defi":
      data = defi;
      break;
    case "tools":
      data = tools;
      break;
    case "social":
      data = social;
      break;

    default:
      data = bridge;
      break;
  }
  return (
    <>
      {data.map((item) => (
        <section key={item.id} className={`${styles.paddings} relative z-10`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
          >
            <motion.div
              variants={planetVariants("left")}
              className={`flex-1 ${styles.flexCenter}`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[90%] h-[90%] object-contain"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex-[0.75] flex justify-center flex-col"
            >
              <TypingText title={`| ${capitalizeFirstLetter(query)} Space`} />
              <TitleText title={item.name} />
              <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
                <div className={`${styles.flexCenter} flex-row`}>
                  <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
                    {item.desc}
                  </p>
                </div>
                <Link
                  href={item.website}
                  target="_blank"
                  className="flex items-center h-fit py-4 px-28 bg-[#25618B] rounded-[32px] gap-[12px] text-white text-[16px] font-normal"
                >
                  Enter To {capitalizeFirstLetter(query)}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>
      ))}
    </>
  );
}
