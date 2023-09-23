import React from "react";

const Pill = ({ text, clickHandler, isActive }) => {
  return (
    <div
      className={`text-sm leading-4 tracking-normal text-center font-semibold bg-[#ffffff] text-[#410DEB] mx-[6px] px-5 py-3.5 rounded-full inline-block cursor-pointer border-2 border-[#410DEB] whitespace-nowrap select-none ${
        isActive ? "isActive" : ""
      }`}
      onClick={clickHandler}
    >
      {text}
    </div>
  );
};

export default Pill;
