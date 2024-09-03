import { FunctionComponent } from "react";

export type ButtonType = {
  className?: string;
};

const Button: FunctionComponent<ButtonType> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[4px] px-[8px] bg-[rgba(0,0,0,0.05)] w-[42px] !m-[0] absolute top-[16px] right-[16px] rounded-[8px] flex flex-row items-center justify-center box-border z-[1] ${className}`}
    >
      <div className="flex-1 rounded-[8px] flex flex-col items-start justify-center">
        <a className="[text-decoration:none] self-stretch relative text-sm leading-[20px] font-sans text-[#000] text-center inline-block min-w-[26px]">
          Edit
        </a>
      </div>
    </button>
  );
};

export default Button;
