import { FunctionComponent } from "react";

export type TagType = {
  className?: string;
};

const Tag: FunctionComponent<TagType> = ({ className = "" }) => {
  return (
    <div
      className={`rounded-boundvariablesdata11 bg-background-bg3 flex flex-row items-center justify-start py-0.5 px-boundvariablesdata whitespace-nowrap text-left text-xs text-black-40 font-regular ${className}`}
    >
      <a className="[text-decoration:none] relative leading-[16px] text-[inherit] inline-block min-w-[55px]">
        UI Design
      </a>
    </div>
  );
};

export default Tag;
