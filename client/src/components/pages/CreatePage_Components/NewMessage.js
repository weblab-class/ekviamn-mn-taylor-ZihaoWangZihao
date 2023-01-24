import React, { useState, useEffect } from "react";

const NewMessage = (props) => {

    return (
        <>
            <div style={{
                height: "400px",
                width:"400px",
                backgroundColor:props.userColor,
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <div style={{
                    textAlign:"right"
                }}>{props.userMessage}</div>
            </div>
        </>
    );
};

export default NewMessage;