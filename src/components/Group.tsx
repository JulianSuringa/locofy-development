import { FunctionComponent } from "react";
import IconText from "./IconText";

export type GroupType = {
  className?: string;
};

const Group: FunctionComponent<GroupType> = ({ className = "" }) => {
  return (
    <div
      className={`rounded-boundvariablesdata4 flex flex-row items-center justify-start flex-wrap content-center py-0 pl-0 pr-0.5 gap-x-4 gap-y-3.5 text-left text-xs text-black-40 font-regular ${className}`}
    >
      <IconText chatText="/paperclip.svg" text="6" />
      <IconText chatText="/chattext.svg" text="8" />
    </div>
  );
};

export default Group;
