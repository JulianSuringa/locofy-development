import { FunctionComponent } from "react";
import Group from "./Group";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-boundvariablesdata3 flex flex-row items-center justify-between flex-wrap content-center gap-5 text-left text-xs text-black-40 font-regular ${className}`}
    >
      <div className="rounded-boundvariablesdata4 flex flex-row items-center justify-center">
        <img
          className="h-boundvariablesdata9 w-boundvariablesdata9 relative rounded-boundvariablesdata8 overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/byewind@2x.png"
        />
      </div>
      <Group />
    </div>
  );
};

export default Content;
