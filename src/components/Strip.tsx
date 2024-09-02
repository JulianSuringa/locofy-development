import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type StripType = {
  className?: string;

  /** Style props */
  stripPadding?: CSSProperties["padding"];
  rectangleHeight?: CSSProperties["height"];
};

const Strip: FunctionComponent<StripType> = ({
  className = "",
  stripPadding,
  rectangleHeight,
}) => {
  const stripStyle: CSSProperties = useMemo(() => {
    return {
      padding: stripPadding,
    };
  }, [stripPadding]);

  const rectangleStyle: CSSProperties = useMemo(() => {
    return {
      height: rectangleHeight,
    };
  }, [rectangleHeight]);

  return (
    <div
      className={`self-stretch rounded-boundvariablesdata8 bg-black-5 overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-10 ${className}`}
      style={stripStyle}
    >
      <div
        className="h-0.5 flex-1 relative rounded-boundvariablesdata8 bg-secondary-indigo"
        style={rectangleStyle}
      />
    </div>
  );
};

export default Strip;
