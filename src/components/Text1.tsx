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
  text4 = "7542",
  text2 = "6321",
  text3 = "1343",
  text = "1235",
}) => {
  return (
    <div
      className={`rounded-[8px] flex flex-row items-center justify-start flex-wrap content-center pt-[4px] pb-[0px] pl-[0px] pr-[72px] gap-[8px] text-left text-sm text-[#000] font-sans ${className}`}
    >
      <div className="relative leading-[20px] font-semibold inline-block min-w-[34px]">
        {text}
      </div>
      <a className="[text-decoration:none] relative leading-[20px] font-semibold text-[inherit] inline-block min-w-[33px]">
        {text2}
      </a>
      <div className="relative leading-[20px] font-semibold inline-block min-w-[34px]">
        {text3}
      </div>
      <a className="[text-decoration:none] relative leading-[20px] font-semibold text-[inherit] inline-block min-w-[35px]">
        {text4}
      </a>
    </div>
  );
};

export default Text1;
