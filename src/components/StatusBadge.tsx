import { FunctionComponent } from "react";

export type StatusBadgeType = {
  className?: string;
};

const StatusBadge: FunctionComponent<StatusBadgeType> = ({
  className = "",
}) => {
  return (
    <div
      className={`rounded-boundvariablesdata11 bg-honeydew flex flex-row items-center justify-start py-px px-boundvariablesdata4 text-left text-xs text-mediumaquamarine font-regular ${className}`}
    >
      <a className="[text-decoration:none] relative leading-[16px] text-[inherit] inline-block min-w-[36px]">
        Active
      </a>
    </div>
  );
};

export default StatusBadge;
