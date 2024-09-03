import { FunctionComponent } from "react";

export type ButtonType = {
  className?: string;
};

const Button: FunctionComponent<ButtonType> = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-boundvariablesdata5 px-boundvariablesdata4 bg-black-5 w-[42px] !m-[0] absolute top-[16px] right-[16px] rounded-boundvariablesdata6 flex flex-row items-center justify-center box-border z-[1] ${className}`}
    >
      <div className="flex-1 rounded-boundvariablesdata6 flex flex-col items-start justify-center">
        <a className="[text-decoration:none] self-stretch relative text-sm leading-[20px] font-regular text-black-100 text-center inline-block min-w-[26px]">
          Edit
        </a>
      </div>
    </button>
  );
};

export default Button;
