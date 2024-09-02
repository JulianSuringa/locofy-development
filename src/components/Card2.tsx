import { FunctionComponent } from "react";
import Text1 from "./Text1";
import StatusBadge from "./StatusBadge";
import Strip from "./Strip";

export type Card2Type = {
  className?: string;
  text?: string;
  text2?: string;
  textGap?: string;
  textOverflow?: string;
  textTextOverflow?: string;
  textDisplay?: string;
  textOverflow1?: string;
  textTextOverflow1?: string;
  textWebkitLineClamp?: string;
  textWebkitBoxOrient?: string;
  textFontSize?: string;
  textFontSize1?: string;
  dotIconHeight?: string;
  dotIconWidth?: string;
  dotIconMinHeight?: string;
  inProgressFontSize?: string;
  inProgressMinWidth?: string;
  stripPadding?: string;
  rectangleHeight?: string;
};

const Card2: FunctionComponent<Card2Type> = ({
  className = "",
  text,
  text2,
  textGap,
  textOverflow,
  textTextOverflow,
  textDisplay,
  textOverflow1,
  textTextOverflow1,
  textWebkitLineClamp,
  textWebkitBoxOrient,
  textFontSize,
  textFontSize1,
  dotIconHeight,
  dotIconWidth,
  dotIconMinHeight,
  inProgressFontSize,
  inProgressMinWidth,
  stripPadding,
  rectangleHeight,
}) => {
  return (
    <div
      className={`w-[280px] rounded-boundvariablesdata13 bg-background-bg2 flex flex-col items-start justify-start p-boundvariablesdata14 box-border gap-boundvariablesdata12 min-w-[240px] leading-[normal] tracking-[normal] text-left text-xs text-black-100 font-regular ${className}`}
    >
      <div className="self-stretch rounded-boundvariablesdata4 flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-0.5 gap-x-5 gap-y-[18px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <Text1
            text2={text2}
            text={text}
            textGap={textGap}
            textOverflow={textOverflow}
            textTextOverflow={textTextOverflow}
            textDisplay={textDisplay}
            textOverflow1={textOverflow1}
            textTextOverflow1={textTextOverflow1}
            textWebkitLineClamp={textWebkitLineClamp}
            textWebkitBoxOrient={textWebkitBoxOrient}
            textFontSize={textFontSize}
            textFontSize1={textFontSize1}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <img
            className="h-boundvariablesdata18 w-boundvariablesdata18 relative"
            loading="lazy"
            alt=""
            src="/snowui-icon.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-boundvariablesdata3 flex flex-row items-start justify-between flex-wrap content-start pt-boundvariablesdata12 pb-boundvariablesdata10 pl-0 pr-0.5 gap-5">
        <div className="rounded-boundvariablesdata4 flex flex-row items-center justify-center">
          <img
            className="h-boundvariablesdata9 w-boundvariablesdata9 relative rounded-boundvariablesdata8 overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <StatusBadge
            dotIconHeight={dotIconHeight}
            dotIconWidth={dotIconWidth}
            dotIconMinHeight={dotIconMinHeight}
            inProgressFontSize={inProgressFontSize}
            inProgressMinWidth={inProgressMinWidth}
          />
        </div>
      </div>
      <Strip stripPadding={stripPadding} rectangleHeight={rectangleHeight} />
      <div className="self-stretch rounded-boundvariablesdata4 flex flex-row items-start justify-start flex-wrap content-start py-0 pl-0 pr-0.5 gap-x-4 gap-y-3">
        <div className="flex-1 rounded-boundvariablesdata4 flex flex-row items-start justify-start">
          <div className="flex-1 relative leading-[16px]">
            <span>{`36 `}</span>
            <span className="text-gray">/</span>
            <span>{` 49 `}</span>
            <span className="text-black-40">Total Tasks</span>
          </div>
        </div>
        <div className="rounded-boundvariablesdata4 flex flex-row items-start justify-start">
          <a className="[text-decoration:none] relative leading-[16px] text-[inherit] inline-block min-w-[26px]">
            75%
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card2;
