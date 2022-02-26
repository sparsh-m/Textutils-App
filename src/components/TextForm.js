import React, {useState} from 'react'

export default function TextForm(props){
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.changeAlert('Changed to UpperCase', 'success')
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.changeAlert('Changed to Lowercase', 'success')
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.changeAlert('Text Cleared', 'success')
    }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.changeAlert('Copied to Clipboard', 'success')
    }
    const [text, setText] = useState("")
    return (
        <>
        <h1 className="my-3" style={{backgroundColor: `${props.mode==='light'?'white':'grey'}`, color: `${props.mode==='light'?'black':'white'}`}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control my-3" style={{backgroundColor: `${props.mode==='light'?'white':'grey'}`, color: `${props.mode==='light'?'black':'white'}`}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container" style={{backgroundColor: `${props.mode==='light'?'white':'grey'}`, color: `${props.mode==='light'?'black':'white'}`}}>
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            <p>Takes {0.008 * text.split(" ").length} minutes to read.</p>
            <h2>Preview Text</h2>
            <p>{text}</p>
        </div>
        </>
    );
}

