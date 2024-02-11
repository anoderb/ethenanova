import Image from "next/image";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="min-w-[210px] sm:max-w-[250px] flex flex-col flex-1">
    <div className={`w-[70px] h-[70px] flexCenter rounded-[24px] bg-[#323F5D]`}>
      <Image
        src={imgUrl}
        alt="icon"
        className="w-1/2 h-1/2 object-contain"
        width={70}
        height={70}
        loading="lazy"
      />
    </div>
    <h1 className="text-[24px] mt-[26px] font-bold leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="text-[18px] mt-[16px] leading-[32.4px] flex-1 font-normal text-[#B0B0B0]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
