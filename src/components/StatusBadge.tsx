import { FunctionComponent } from "react";

export type StatusBadgeType = {
  className?: string;
};

const StatusBadge: FunctionComponent<StatusBadgeType> = ({
  className = "",
}) => {
  return (
    <div
      className={`rounded-[80px] bg-[#def8ee] flex flex-row items-center justify-start py-[1px] px-[8px] text-left text-xs text-[#4aa785] font-sans ${className}`}
    >
      <a className="[text-decoration:none] relative leading-[16px] text-[inherit] inline-block min-w-[36px]">
        Active
      </a>
    </div>
  );
};

export default StatusBadge;
