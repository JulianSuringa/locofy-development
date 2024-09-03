import { FunctionComponent } from "react";

export type Text1Type = {
  className?: string;
  text4?: string;
  text2?: string;
  text3?: string;
  text?: string;
};

const Text1: FunctionComponent<Text1Type> = ({
  className = "",
  text4 = "4698",
  text2 = "6598",
  text3 = "1236",
  text = "9656",
}) => {
  return (
    <div
      className={`rounded-[8px] flex flex-row items-center justify-start flex-wrap content-center pt-[4px] pb-[0px] pl-[0px] pr-[68px] gap-x-[8px] gap-y-[7.4px] text-left text-sm text-[#000] font-sans ${className}`}
    >
      <div className="relative leading-[20px] font-semibold inline-block min-w-[36px]">
        {text}
      </div>
      <a className="[text-decoration:none] relative leading-[20px] font-semibold text-[inherit] inline-block min-w-[36px]">
        {text2}
      </a>
      <div className="relative leading-[20px] font-semibold inline-block min-w-[33px]">
        {text3}
      </div>
      <div className="relative leading-[20px] font-semibold inline-block min-w-[37px]">
        {text4}
      </div>
    </div>
  );
};

export default Text1;
