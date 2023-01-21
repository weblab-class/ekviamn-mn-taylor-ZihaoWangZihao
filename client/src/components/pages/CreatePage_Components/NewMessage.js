import React, { useState, useEffect } from "react";

const NewMessage = (props) => {

    return (
        <>
            <div>
                <h1>{props.userMessage}</h1>
            </div>
        </>
    );
};

export default NewMessage;