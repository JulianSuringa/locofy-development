import { FunctionComponent } from "react";

export type IconTextType = {
  className?: string;
  chatText?: string;
  text?: string;
};

const IconText: FunctionComponent<IconTextType> = ({
  className = "",
  chatText,
  text,
}) => {
  return (
    <div
      className={`rounded-boundvariablesdata4 flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-0.5 gap-x-1 gap-y-0.5 text-left text-xs text-black-40 font-regular ${className}`}
    >
      <div className="h-4 w-4 rounded-boundvariablesdata4 flex flex-row items-center justify-center">
        <img
          className="h-boundvariablesdata7 w-boundvariablesdata7 relative"
          loading="lazy"
          alt=""
          src={chatText}
        />
      </div>
      <div className="rounded-boundvariablesdata4 flex flex-col items-start justify-center">
        <div className="relative leading-[16px] inline-block min-w-[8px]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default IconText;
