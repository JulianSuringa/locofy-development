import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Text1Type = {
  className?: string;
  text2?: string;
  text?: string;

  /** Style props */
  textGap?: CSSProperties["gap"];
  textOverflow?: CSSProperties["overflow"];
  textTextOverflow?: CSSProperties["textOverflow"];
  textDisplay?: CSSProperties["display"];
  textOverflow1?: CSSProperties["overflow"];
  textTextOverflow1?: CSSProperties["textOverflow"];
  textWebkitLineClamp?: CSSProperties["webkitLineClamp"];
  textWebkitBoxOrient?: CSSProperties["webkitBoxOrient"];
  textFontSize?: CSSProperties["fontSize"];
  textFontSize1?: CSSProperties["fontSize"];
};

const Text1: FunctionComponent<Text1Type> = ({
  className = "",
  text2 = "First, a disclaimer – the entire process writing a blog post often takes a couple of hours if you can type",
  text = "Meeting with customer",
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
  const textStyle: CSSProperties = useMemo(() => {
    return {
      gap: textGap,
    };
  }, [textGap]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      overflow: textOverflow,
      textOverflow: textTextOverflow,
      fontSize: textFontSize,
    };
  }, [textOverflow, textTextOverflow, textFontSize]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      display: textDisplay,
      overflow: textOverflow1,
      textOverflow: textTextOverflow1,
      webkitLineClamp: textWebkitLineClamp,
      webkitBoxOrient: textWebkitBoxOrient,
      fontSize: textFontSize1,
    };
  }, [
    textDisplay,
    textOverflow1,
    textTextOverflow1,
    textWebkitLineClamp,
    textWebkitBoxOrient,
    textFontSize1,
  ]);

  return (
    <div
      className={`self-stretch rounded-boundvariablesdata3 flex flex-col items-start justify-center gap-boundvariablesdata10 text-left text-sm text-black-100 font-regular ${className}`}
      style={textStyle}
    >
      <div
        className="self-stretch relative leading-[20px] font-semibold"
        style={text1Style}
      >
        {text}
      </div>
      <div
        className="self-stretch relative text-xs leading-[16px] text-black-40 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]"
        style={text2Style}
      >
        {text2}
      </div>
    </div>
  );
};

export default Text1;
