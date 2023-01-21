import React, { useState, useEffect } from "react";

const NewMessage = (props) => {

    return (
        <>
            <div style={{
                    backgroundColor:props.userColor,
                    position:"relative",
                    top:"50%",
                    left:"50%",
                    transform:"translate(-50%, -50%)",
                    width:"400px",
                    heigh:"400px"
                    }}>
                {props.userMessage}
            </div>

        </>
    );
};

export default NewMessage;