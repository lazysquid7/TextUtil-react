import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const TextForm = (props) => {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
    //console.log("button clicked");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);

    props.showAlert("Converted to lowercase", "success");

    //console.log("button clicked");
  };
  const handleClearClick = () => {
    const newText = "";
    setText(newText);
    //console.log("button clicked");

    props.showAlert("Clear the text area", "success");
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setCopied(false);
    setText(e.target.value);
  };

  const handleCopy = () => {
    props.showAlert("Text Copied", "success");
  };

  return (
    <>
      <div
        className={`container my-5 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <form>
          <div className="mb-3">
            <h1>Enter text below</h1>
            <textarea
              style={{
                backgroundColor: props.mode === "dark" ? "black" : "white",
                border:
                  props.mode === "dark" ? "1px solid white" : "1px solid black",
                color: props.mode === "dark" ? "white" : "black",
              }}
              placeholder="enter here..."
              value={text}
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
            ></textarea>
          </div>
        </form>
        <button
          onClick={handleUpClick}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1`}
        >
          ABC
        </button>
        <button
          onClick={handleLoClick}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1`}
        >
          abc
        </button>
        <button
          onClick={handleClearClick}
          className={`btn btn-${
            props.mode === "light" ? "primary" : "secondary"
          } mx-1`}
        >
          {"<-"}
        </button>

        <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
          <button
            onClick={handleCopy}
            className={`btn btn-${
              props.mode === "light" ? "primary" : "secondary"
            } mx-1`}
          >
            Copy
            {/* {copied ? "Copied!" : "Click to copy"} */}
          </button>
        </CopyToClipboard>
      </div>

      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Preview</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{(0.008 * text.split(" ").length).toFixed(2)} Minutes to read</p>
        <h4 style={{ fontWeight: "normal" }}>{text}</h4>
      </div>
    </>
  );
};

export default TextForm;
