import React from "react";
import "./Button.scss";

const Button = ({name, onClick}) => {
  return (
    <button value={name} onClick={onClick}>
        {name}
    </button>
  )
}

export default Button