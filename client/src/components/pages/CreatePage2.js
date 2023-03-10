import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import profile from "../../public/profile.png";
import NavBar from "./NavBar.js";

import InputText from "./CreatePage_Components/InputText.js";
import NewMessage from "./CreatePage_Components/NewMessage.js";

const CreatePage2 = (props) => {
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  return (
    <>
      <div className="u-flexColumn">
        <div className="heading">
          <h1 className="word">Create New Message</h1>
        </div>
        <div className="box">
          <NewMessage userMessage={message} mutateMessage={setMessage} userColor={messageColor} />
        </div>
        <div className="text">
          <InputText
            userMessage={message}
            mutateMessage={setMessage}
            userColor={messageColor}
            mutateColor={setMessageColor}
          />
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </>
  );
};

export default CreatePage2;
