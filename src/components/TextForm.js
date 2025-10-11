import { useState } from "react";

export default function TextForm(props) {
  const handleUpChange = () => {
    // console.log("Clicked on Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
    // alert("Changed to Uppercase");
  };
  const handleOnChange = (e) => {
    console.log("On Change");
    setText(e.target.value);
  };
  const handleLowChange = () => {
    // console.log("Clicked on Lowercase");
    let newText2 = text.toLowerCase();
    setText(newText2);
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared!", "danger");
  };
  const [text, setText] = useState("Enter Your Text");
  return (
    <>
      <h1
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        {props.header}
      </h1>

      <div
        className="container mb-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="myBox"
          rows="8"
        ></textarea>
        <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={handleUpChange}>
          Convert to uppercase
        </button>{" "}
        <button disabled={text.length === 0} className="btn btn-secondary my-2" onClick={handleLowChange}>
          Convert to lowercase
        </button>{" "}
        <button disabled={text.length === 0} className="btn btn-danger my-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>
          It will take {0.008 * text.split(" ").length} Minutes to read it
          completely
        </p>
      </div>
    </>
  );
}
