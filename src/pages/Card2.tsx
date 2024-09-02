import { FunctionComponent } from "react";
import Text1 from "../components/Text1";
import StatusBadge from "../components/StatusBadge";
import Strip from "../components/Strip";

export type Card2Type = {
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
    <div className="w-full relative rounded-boundvariablesdata13 bg-background-bg2 flex flex-col items-start justify-start p-boundvariablesdata14 box-border gap-boundvariablesdata12 min-w-[15rem] leading-[normal] tracking-[normal] text-left text-[0.75rem] text-black-100 font-regular">
      <div className="self-stretch rounded-boundvariablesdata4 flex flex-row items-start justify-start flex-wrap content-start py-[0rem] pl-[0rem] pr-[0.125rem] gap-x-[1.25rem] gap-y-[1.125rem]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
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
      <div className="self-stretch rounded-boundvariablesdata3 flex flex-row items-start justify-between flex-wrap content-start pt-boundvariablesdata12 pb-boundvariablesdata10 pl-[0rem] pr-[0.125rem] gap-[1.25rem]">
        <div className="rounded-boundvariablesdata4 flex flex-row items-center justify-center">
          <img
            className="h-boundvariablesdata9 w-boundvariablesdata9 relative rounded-boundvariablesdata8 overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/byewind@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
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
      <div className="self-stretch rounded-boundvariablesdata4 flex flex-row items-start justify-start flex-wrap content-start py-[0rem] pl-[0rem] pr-[0.125rem] gap-x-[1rem] gap-y-[0.75rem]">
        <div className="flex-1 rounded-boundvariablesdata4 flex flex-row items-start justify-start">
          <div className="flex-1 relative leading-[1rem]">
            <span>{`36 `}</span>
            <span className="text-gray">/</span>
            <span>{` 49 `}</span>
            <span className="text-black-40">Total Tasks</span>
          </div>
        </div>
        <div className="rounded-boundvariablesdata4 flex flex-row items-start justify-start">
          <div className="relative leading-[1rem] inline-block min-w-[1.625rem]">
            75%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
