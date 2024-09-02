import { FunctionComponent } from "react";

export type CardType = {
  className?: string;
};

const Card: FunctionComponent<CardType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[280px] rounded-boundvariablesdata2 border-black-100 border-[2px] border-solid box-border flex flex-col items-start justify-start pt-[21px] px-[22px] pb-[13px] relative gap-boundvariablesdata leading-[normal] tracking-[normal] text-left text-sm text-black-100 font-regular ${className}`}
    >
      <div className="rounded-boundvariablesdata4 flex flex-row items-center justify-start flex-wrap content-center">
        <div className="rounded-boundvariablesdata4 flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-[97px] gap-x-1 gap-y-[3px]">
          <div className="rounded-boundvariablesdata4 flex flex-col items-start justify-center">
            <a className="[text-decoration:none] relative leading-[20px] font-semibold text-[inherit] inline-block min-w-[61px]">
              ByeWind
            </a>
          </div>
          <div className="rounded-boundvariablesdata20 bg-honeydew flex flex-row items-center justify-start py-px px-boundvariablesdata text-xs text-mediumaquamarine">
            <a className="[text-decoration:none] relative leading-[16px] text-[inherit] inline-block min-w-[55px]">
              Complete
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-boundvariablesdata3 flex flex-row items-center justify-start flex-wrap content-center pt-boundvariablesdata19 pb-0 pl-0 pr-3 gap-x-2 gap-y-1">
        <div className="relative leading-[20px] font-semibold inline-block min-w-[38px]">
          0000
        </div>
        <a className="[text-decoration:none] relative leading-[20px] font-semibold text-[inherit] inline-block min-w-[38px]">
          0000
        </a>
        <div className="relative leading-[20px] font-semibold inline-block min-w-[38px]">
          0000
        </div>
        <div className="relative leading-[20px] font-semibold inline-block min-w-[38px]">
          0000
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
      <div className="!m-[0] absolute top-[16px] right-[16px] rounded-boundvariablesdata4 flex flex-row items-center justify-center z-[1]">
        <img
          className="h-boundvariablesdata9 w-boundvariablesdata9 relative"
          loading="lazy"
          alt=""
          src="/radio2.svg"
        />
      </div>
    </div>
  );
};

export default Card;
