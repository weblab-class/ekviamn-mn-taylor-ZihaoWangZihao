import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import profile from "../../public/profile.png";
import home from "../../public/home.png";
import create from "../../public/create.png";
import friends from "../../public/friends.png";
let text = "";
let image = "";

const EmojiMenu = (props) => {
  return (
    <>
      <div>
        <h1>Emoji menu</h1>
      </div>
    </>
  );
};

const InputText = (props) => {
  const handleChange = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <h1>User Text</h1>
        <form>
          <label>
            message:
            <input type="text" />
          </label>
        </form>
      </div>
    </>
  );
};
const NewMessage = (props) => {
  return (
    <>
      <div class="container">
        <div class="center">
          <img src={profile} alt="user image" />
        </div>
      </div>
    </>
  );
};

const CreatePage = (props) => {
  return (
    <>
      <div class="u-flexColumn">
        <div class="heading">
          <h1>Create New Message</h1>
        </div>
        <div class="u-flex">
          <div>
            <EmojiMenu />
            <InputText />
          </div>
          <div class="u-flex-justifyCenter">
            <NewMessage uText={text} uImage={image} />
          </div>
        </div>
      </div>
      <div class="u-flexColumn">
        <div class="u-flex">
          <div>
            <a href="http://localhost:5050/Profile">
              <img src={profile} class="profile" />
            </a>
          </div>
          <div>
            <a href="http://localhost:5050/Home">
              <img src={home} class="home" />
            </a>
          </div>
          <div>
            <a href="http://localhost:5050/CreatePage">
              <img src={create} class="create" />
            </a>
          </div>
          <div>
            <a href="http://localhost:5050/Friends">
              <img src={friends} class="friends" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePage;
