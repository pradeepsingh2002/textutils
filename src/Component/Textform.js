import React,{useState} from "react";

export default function TextForm(props) {
    const [text,setText]=useState('');
    
    const handleUpClick=()=>{
   const newText=text.toUpperCase();
   setText(newText);
   props.showAlert("Converted to upper Case","success");
    }

    const handleLoClick=()=>{
   const newText=text.toLowerCase();
   setText(newText);
   props.showAlert("Converted to Lower Case","success");

    }

    const handleClear=()=>{
      let newText=' ';   
      setText(newText);
      props.showAlert("Text Cleared","success");
      
     }

    const handleCopy=()=>{
        const text=document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,99);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copyed","success");
        
    }

    const handleExtraSpace=()=>{
      //single space se split ho kar ek array ban jayega
      const newText=text.split(/[ ]+/);
      setText(newText.join(" "));
   props.showAlert("Extra spaces are removed","success");

    }

    const handleOnChange=(event)=>{
setText(event.target.value);
    }

  return (
   <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==="dark"?"grey":"white" ,color: props.mode==="dark"?"white":"black"}} onChange={handleOnChange} id="myBox" rows="3"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
   <div className="container my-3">
    <h1>your text summary</h1>
    <p>{text.split(" ").length} words | {text.length} Character</p>
    <p>{0.008*text.split(" ").length} Minutes</p>
    <h2>preview
    </h2>
    <p>{text}</p>
   </div>
   </div>
   
  );
}

