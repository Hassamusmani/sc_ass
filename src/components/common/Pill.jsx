import React from "react";

const Pill = ({ text, clickHandler }) => {
  return <div onClick={clickHandler}>{text}</div>;
};

export default Pill;
