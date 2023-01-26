import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import profile from "../../public/profile.png";
import NavBar from "./NavBar.js";

import InputText from "../modules/InputText.js";
import NewMessage from "../modules/NewMessage.js";

const CreatePage = (props) => {
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  return (
    <>
      <div className="u-flexColumn">
        <div class="heading">
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

export default CreatePage;