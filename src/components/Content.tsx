import { FunctionComponent } from "react";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-[8px] flex flex-row items-center justify-start flex-wrap content-center py-[0px] pl-[0px] pr-[2px] gap-x-[16px] gap-y-[14px] text-left text-sm text-[rgba(0,0,0,0.4)] font-sans ${className}`}
    >
      <div className="flex-1 rounded-[8px] flex flex-col items-start justify-center">
        <div className="self-stretch relative leading-[20px]">Exp 06/25</div>
      </div>
      <div className="rounded-[8px] flex flex-row items-center justify-center">
        <img
          className="h-[40px] w-[40px] relative"
          loading="lazy"
          alt=""
          src="/mastercard.svg"
        />
      </div>
    </div>
  );
};

export default Content;
