import React from "react";
import "./InputBox.scss";


const InputBox = ({value, placeholder, onChange}) => {
  return (
    <input type="text" placeholder={placeholder} onChange={onChange} value={value} />
  )
}

export default InputBox