const StartSteps = ({ number, text }) => (
  <div className="flexCenter flex-row">
    <div className="w-[70px] h-[70px] flexCenter rounded-[24px] bg-[#323F5D]">
      <p className="text-[20px] font-bold text-white">{number}</p>
    </div>
    <p className="text-[18px] ml-[30px] flex-1 font-normal leading-[32.4px] text-[#B0B0B0]">
      {text}
    </p>
  </div>
);

export default StartSteps;
