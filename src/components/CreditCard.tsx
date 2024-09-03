import { FunctionComponent } from "react";
import Text1 from "./Text1";
import Content from "./Content";

export type CreditCardType = {
  className?: string;
};

const CreditCard: FunctionComponent<CreditCardType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[280px] rounded-[16px] bg-[rgba(229,236,246,0.5)] flex flex-col items-start justify-start py-[16px] px-[24px] box-border gap-[8px] min-w-[200px] max-w-[280px] leading-[normal] tracking-[normal] text-left text-sm text-[#000] font-sans ${className}`}
    >
      <div className="self-stretch rounded-[8px] flex flex-col items-start justify-center py-[4px] px-[0px]">
        <div className="self-stretch relative leading-[20px] font-semibold">
          ByeWind
        </div>
      </div>
      <Text1 text4="7542" text2="6321" text3="1343" text="1235" />
      <Content />
    </div>
  );
};

export default CreditCard;
