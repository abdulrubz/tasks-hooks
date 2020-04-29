import React from "react";

export const Button = ({ classes, text, clickFunction }) => {
  return (
    <div>
      <button className={classes} onClick={clickFunction}>
        {text}
      </button>
    </div>
  );
};

export default Button;
