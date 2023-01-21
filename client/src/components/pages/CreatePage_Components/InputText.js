import React, { useState, useEffect } from "react";

const InputText = (props) => {
    
    
    const handleChange = (event) => {
        event.preventDefault();
        props.mutateMessage(event.target.value)
    }

    return (
    <>
        <div>
            <h1>User Text</h1>
            <form>
                <label>
                    message:
                    <input type="text" onChange={handleChange}/>
                </label>
            </form>
        </div>
    </>
    );
};

export default InputText;