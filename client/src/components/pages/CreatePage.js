import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import profile from "../../public/profile.png";
import NavBar from "./NavBar.js";

import InputText from "./CreatePage_Components/InputText.js";
import NewMessage from "./CreatePage_Components/NewMessage.js";

const CreatePage = (props) => {
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  return (
    <>
      <div class="u-flexColumn">
        <div class="heading">
          <h1>Create New Message</h1>
        </div>
        <div class="u-flex">
          <div>
            <InputText userMessage={message}
              mutateMessage={setMessage}
              userColor={messageColor} 
              mutateColor={setMessageColor}
            />
          </div>
          <div class="u-flex container">
            <NewMessage userMessage={message} 
            mutateMessage={setMessage} 
            userColor={messageColor}/>
          </div>
        </div>
        <div>
          <NavBar/>
        </div>
      </div>
    </>
  );
};

export default CreatePage;