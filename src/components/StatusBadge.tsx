import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type StatusBadgeType = {
  className?: string;

  /** Style props */
  dotIconHeight?: CSSProperties["height"];
  dotIconWidth?: CSSProperties["width"];
  dotIconMinHeight?: CSSProperties["minHeight"];
  inProgressFontSize?: CSSProperties["fontSize"];
  inProgressMinWidth?: CSSProperties["minWidth"];
};

const StatusBadge: FunctionComponent<StatusBadgeType> = ({
  className = "",
  dotIconHeight,
  dotIconWidth,
  dotIconMinHeight,
  inProgressFontSize,
  inProgressMinWidth,
}) => {
  const dotIconStyle: CSSProperties = useMemo(() => {
    return {
      height: dotIconHeight,
      width: dotIconWidth,
      minHeight: dotIconMinHeight,
    };
  }, [dotIconHeight, dotIconWidth, dotIconMinHeight]);

  const inProgressStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: inProgressFontSize,
      minWidth: inProgressMinWidth,
    };
  }, [inProgressFontSize, inProgressMinWidth]);

  return (
    <div
      className={`rounded-boundvariablesdata16 flex flex-row items-start justify-start text-left text-xs text-cornflowerblue font-regular ${className}`}
    >
      <img
        className="h-boundvariablesdata7 w-boundvariablesdata7 relative min-h-[16px]"
        loading="lazy"
        alt=""
        src="/dot.svg"
        style={dotIconStyle}
      />
      <a
        className="[text-decoration:none] relative leading-[16px] text-[inherit] inline-block min-w-[64px]"
        style={inProgressStyle}
      >
        In Progress
      </a>
    </div>
  );
};

export default StatusBadge;
