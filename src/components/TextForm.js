import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Upper case was cleaked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success")
    }
    const handleOnChange =(event)=>{
        console.log("Upper case was cleaked");
        setText(event.target.value);

    }
    const handleClick =()=>{
      //console.log("Upper case was cleaked");

      setText("");

  }
    const handleLowClick =()=>{
      console.log("Upper case was cleaked"+text);
      let newText = text.toLowerCase();
      setText(newText);
  }
    const[text,setText] = useState('');
  return (
    <>
    <div className="conatiner" style={{color:props.mode==='dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase </button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase </button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClick}>Clear the phrase </button>

      
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>

      <p>{text.split(/\s+/)
            .filter(function(n) { return n !== '' })
            .length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
