import { motion } from "framer-motion";
import Link from "next/link";
import EachRender from "../lib/EachRender";
import socials from "../lib/constants/socials";
import footerVariants from "../lib/framer/footerVariants";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="xPaddings py-8 relative"
  >
    <div className="footer-gradient" />

    <div className="innerWidth mx-auto flex flex-col gap-8">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter the Space
        </h4>
        <Link
          href={"/explore"}
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <img
            src="/icons/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Enter Space
          </span>
        </Link>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link href={"/"} className="font-extrabold text-[24px] text-white">
            ETHENANOVA
          </Link>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © Anoderb Team. All rights reserved.
          </p>

          <div className="flex gap-4">
            <EachRender
              of={socials}
              render={(social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
