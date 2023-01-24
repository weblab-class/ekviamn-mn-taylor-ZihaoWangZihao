import React, { useState, useEffect } from "react";

const NewMessage = (props) => {
  return (
    <>
      <div
        style={{
          height: "150px",
          width: "400px",
          backgroundColor: props.userColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderStyle: "solid",
          borderColor: "black",
        }}
      >
        <div
          style={{
            textAlign: "right",
            fontFamily: "Times New Roman",
          }}
        >
          {props.userMessage}
        </div>
      </div>
    </>
  );
};

export default NewMessage;
