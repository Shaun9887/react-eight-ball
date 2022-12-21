import React, { useState } from "react";
import "./EightBall.css";


const EightBall = ({ options }) => {
    const startText = "Think of a Question";
    const genRandom = () => Math.floor(Math.random() * options.length);
    
    const [text, setText] = useState(startText);
    const [bgColor, setBgColor] = useState('black');

    const updateBall = () => {
        const { msg, color } = options[genRandom()];
        setText(msg);
        setBgColor(color);
    }

    return (
        <>
        <h1>Ask the Magic Eight Ball!</h1>
        <button id="eightball"
            style={{backgroundColor: bgColor}}
            onClick={() => updateBall()}>{text}
            </button>
        </>
    )
}


export default EightBall;