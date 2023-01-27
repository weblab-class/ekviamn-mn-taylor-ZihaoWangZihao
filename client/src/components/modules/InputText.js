import React, { useState, useEffect } from "react";
import {get, post} from "../../utilities.js";

const InputText = (props) => {
  const handleChangeText = (event) => {
    event.preventDefault();
    props.mutateMessage(event.target.value);
  };
  const handleChangeFont = (event) => {
    event.preventDefault();
    props.mutateFont(event.target.value);
  };
  const handleChangeColor = (event) => {
    event.preventDefault();
    props.mutateColor(event.target.value);
  };
  const handlePost = (event) => {
    event.preventDefault();
    post("/post",{
      message: props.userMessage,
      background: props.userColor
    });
  };

  return (
    <>
      <div>
        <h1>Write your motivational message!</h1>
        <form>
          <label>
            Message:
            <input type="text" onChange={handleChangeText} />
          </label>
        </form>
        <form>
          <label>
            Background Color:
            <input type="text" onChange={handleChangeColor} />
          </label>
        </form>
        <form>
          <button onClick={handlePost}>POST</button>
        </form>
      </div>
    </>
  );
};

export default InputText;
