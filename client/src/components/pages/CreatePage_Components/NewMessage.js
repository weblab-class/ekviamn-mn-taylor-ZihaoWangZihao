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
                justifyContent:"center",
                borderStyle: "solid",
                borderColor:"yellow"
            }}>
                <div style={{
                    textAlign:"right",
                    fontFamily:"Times New Roman",
                }}>{props.userMessage}</div>
            </div>
        </>
    );
};

export default NewMessage;