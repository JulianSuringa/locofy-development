import { FunctionComponent } from "react";
import Tag from "./Tag";
import Text1 from "./Text1";
import Content from "./Content";

export type Card1Type = {
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
};

const Card1: FunctionComponent<Card1Type> = ({
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
}) => {
  return (
    <div
      className={`w-[280px] rounded-boundvariablesdata2 flex flex-col items-start justify-start p-boundvariablesdata1 box-border gap-boundvariablesdata text-left text-xs text-black-40 font-regular ${className}`}
    >
      <Tag />
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
      <Content text="6" text1="8" />
    </div>
  );
};

export default Card1;
