import React from "react";

const Button = ({ children, classes, clickHandler }) => {
  return (
    <button className={classes} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
