import React, {useState, useEffect} from "react";
import "./Main.scss";
import Button from "../../components/Button/Button";
import DropDown from "../../components/DropDown/DropDown";
import InputBox from "../../components/InputBox/InputBox";

const Main = () => {
    const [message, setMessage] = useState();
    const [quote, setQuote] = useState("");

    useEffect(() => {
        console.log("I am updating the quote now");
        setMessage(quote)
    }, [quote])

    const getQuote = async () => {
        let url = "https://type.fit/api/quotes";
        let request = await fetch(url);
        let fetchResult = await request.json();
        const retrievedQuote = fetchResult[Math.floor(Math.random() * fetchResult.length)]
        setQuote(retrievedQuote.text);
    }

    const encryptInput = () => {
        console.log("I want to encrypt the message");
    }

    const updateMessage = (event) => {
        setMessage(event.target.value);
    }

    // let inputBoxElement = (<InputBox placeholder={"Type your message here..."} onChange={updateMessage} />)
    // if (quote) {
    //     inputBoxElement = (<InputBox value={message} placeholder={"Type your message here..."} onChange={updateMessage} />)
    // }

    return (
    <div className="main">
        <h1 className="main__title">Title</h1>
        <Button name={"Get Quote"} onClick={getQuote} />
        <InputBox value={message} placeholder={"Type your message here..."} onChange={updateMessage} />
        <Button name={"Encrypt"} onClick={encryptInput} />
        <DropDown />
        <p className="main__output">Output field</p>
    </div>
    )
}

export default Main