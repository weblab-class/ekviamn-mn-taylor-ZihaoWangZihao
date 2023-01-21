import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";

import profile from "../../public/profile.png";
import home from "../../public/home.png";
import create from "../../public/create.png";
import friends from "../../public/friends.png";
/**
 * Define the "Home" component
 */
const Home = (props) => {
  return (
    <>
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
        <div>
          <img src={home} class="homeImage" />
        </div>
      </div>
    </>
  );
};

export default Home;
