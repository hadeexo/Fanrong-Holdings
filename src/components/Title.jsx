const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="w-6 sm:w-8 h-[1px] sm:h-[2px] bg-[#686868]"></p>
      <p className="text-[#686868]">
        {text1}
        <span className="text-[#007CC3] font-medium">{text2}</span>
      </p>
      <p className="w-6 sm:w-8 h-[1px] sm:h-[2px] bg-[#686868]"></p>
    </div>
  );
};

export default Title;
