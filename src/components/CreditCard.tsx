import { FunctionComponent } from "react";
import Button from "./Button";

export type CreditCardType = {
  className?: string;
};

const CreditCard: FunctionComponent<CreditCardType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[280px] rounded-boundvariablesdata13 bg-background-bg5 flex flex-col items-start justify-start py-boundvariablesdata5 px-boundvariablesdata14 box-border relative gap-boundvariablesdata12 min-w-[200px] max-w-[280px] leading-[normal] tracking-[normal] text-left text-sm text-black-100 font-regular ${className}`}
    >
      <div className="rounded-boundvariablesdata3 flex flex-row items-center justify-start flex-wrap content-center py-boundvariablesdata10 pl-0 pr-28 gap-x-2 gap-y-[7px]">
        <div className="rounded-boundvariablesdata4 flex flex-col items-start justify-center">
          <div className="relative leading-[20px] font-semibold inline-block min-w-[61px]">
            ByeWind
          </div>
        </div>
        <div className="rounded-boundvariablesdata20 bg-honeydew flex flex-row items-center justify-start py-px px-boundvariablesdata text-xs text-mediumaquamarine">
          <a className="[text-decoration:none] relative leading-[16px] text-[inherit] inline-block min-w-[36px]">
            Active
          </a>
        </div>
      </div>
      <div className="rounded-boundvariablesdata3 flex flex-row items-center justify-start flex-wrap content-center pt-boundvariablesdata10 pb-0 pl-0 pr-[68px] gap-x-2 gap-y-[7.4px]">
        <div className="relative leading-[20px] font-semibold inline-block min-w-[36px]">
          9656
        </div>
        <a className="[text-decoration:none] relative leading-[20px] font-semibold text-[inherit] inline-block min-w-[36px]">
          6598
        </a>
        <div className="relative leading-[20px] font-semibold inline-block min-w-[33px]">
          1236
        </div>
        <div className="relative leading-[20px] font-semibold inline-block min-w-[37px]">
          4698
        </div>
      </div>
      <div className="self-stretch rounded-boundvariablesdata4 flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-0.5 gap-x-4 gap-y-3.5 text-black-40">
        <div className="flex-1 rounded-boundvariablesdata4 flex flex-col items-start justify-center">
          <div className="self-stretch relative leading-[20px]">Exp 06/25</div>
        </div>
        <div className="rounded-boundvariablesdata4 flex flex-row items-center justify-center">
          <img
            className="h-boundvariablesdata18 w-boundvariablesdata18 relative object-cover"
            loading="lazy"
            alt=""
            src="/visa@2x.png"
          />
        </div>
      </div>
      <Button />
    </div>
  );
};

export default CreditCard;
