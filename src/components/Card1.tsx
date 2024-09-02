import { FunctionComponent } from "react";
import Tag from "./Tag";
import Text1 from "./Text1";
import Content from "./Content";

export type Card1Type = {
  className?: string;
};

const Card1: FunctionComponent<Card1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[280px] rounded-boundvariablesdata2 flex flex-col items-start justify-start p-boundvariablesdata1 box-border gap-boundvariablesdata text-left text-xs text-black-40 font-regular ${className}`}
    >
      <Tag />
      <Text1
        text2="First, a disclaimer – the entire process writing a blog post often takes a couple of hours if you can type"
        text="Meeting with customer"
      />
      <Content />
    </div>
  );
};

export default Card1;
