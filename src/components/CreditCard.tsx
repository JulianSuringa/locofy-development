import { FunctionComponent } from "react";
import StatusBadge from "./StatusBadge";
import Text1 from "./Text1";
import Content from "./Content";
import Button from "./Button";

export type CreditCardType = {
  className?: string;
};

const CreditCard: FunctionComponent<CreditCardType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[280px] rounded-[16px] bg-[rgba(229,236,246,0.5)] flex flex-col items-start justify-start py-[16px] px-[24px] box-border relative gap-[8px] min-w-[200px] max-w-[280px] leading-[normal] tracking-[normal] text-left text-sm text-[#000] font-sans ${className}`}
    >
      <div className="rounded-[8px] flex flex-row items-center justify-start flex-wrap content-center py-[4px] pl-[0px] pr-[112px] gap-x-[8px] gap-y-[7px]">
        <div className="rounded-[8px] flex flex-col items-start justify-center">
          <div className="relative leading-[20px] font-semibold inline-block min-w-[61px]">
            ByeWind
          </div>
        </div>
        <StatusBadge />
      </div>
      <Text1 text4="4698" text2="6598" text3="1236" text="9656" />
      <Content />
      <Button />
    </div>
  );
};

export default CreditCard;
