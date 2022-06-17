import React from "react";
import "./Main.scss";
import Button from "../../components/Button/Button";
import DropDown from "../../components/DropDown/DropDown";
import InputBox from "../../components/InputBox/InputBox";

const Main = () => {

    const getQuote = () => {
        console.log("I want a quote");
    }

    const encryptInput = () => {
        console.log("I want to encrypt the message");
    }

    return (
    <div>
        <h1>Title</h1>
        <Button name={"Get Quote"} onClick={getQuote} />
        <InputBox />
        <Button name={"Encrypt"} onClick={encryptInput} />
        <DropDown />
        <p>Output field</p>
    </div>
    )
}

export default Main