import React, { useState, useEffect } from "react";

const InputText = (props) => {
    
    const handleChangeText = (event) => {
        event.preventDefault();
        props.mutateMessage(event.target.value)
    }
    const handleChangeFont = (event) => {
        event.preventDefault();
        props.mutateFont(event.target.value)
    }
    const handleChangeColor = (event) => {
        event.preventDefault();
        props.mutateColor(event.target.value)
    }
    const handlePost = (event) => {
        event.preventDefault();
        alert(props.userMessage +" "+  props.userColor)
        // API Post
    }

    return (
    <>
        <div>
            <h1>User Text</h1>
            <form>
                <label>
                    message:
                    <input type="text" onChange={handleChangeText}/>
                </label>
            </form>
           <form>
                <label>
                    background color  &nbsp;&nbsp;&nbsp; :
                    <input type="text" onChange={handleChangeColor}/>
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