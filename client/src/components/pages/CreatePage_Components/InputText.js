import React, { useState, useEffect } from "react";

const InputText = (props) => {
    
    
    const handleChangeText = (event) => {
        event.preventDefault();
        props.mutateMessage(event.target.value)
    }
    const handleChangeColor = (event) => {
        event.preventDefault();
        props.mutateColor(event.target.value)
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
                    color:
                    <input type="text" onChange={handleChangeColor}/>
                </label>
            </form>
        </div>
    </>
    );
};

export default InputText;