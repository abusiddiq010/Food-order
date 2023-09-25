import React from "react";

const Button = (props) => {
  const buttonClass = `${props.className} || "" `;
  return (
    <div>
      <button className={buttonClass}>{props.name}</button>
    </div>
  );
};

export default Button;
