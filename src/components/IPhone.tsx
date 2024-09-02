import { FunctionComponent } from "react";
import Card1 from "./Card1";

export type IPhoneType = {
  className?: string;
};

const IPhone: FunctionComponent<IPhoneType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[731px] h-[435px] bg-white max-w-full overflow-hidden flex flex-row items-start justify-start pt-[93px] px-[164px] pb-[178px] box-border leading-[normal] tracking-[normal] ${className}`}
    >
      <Card1 />
    </div>
  );
};

export default IPhone;
