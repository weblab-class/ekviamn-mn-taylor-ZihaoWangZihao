import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import { Link } from "@reach/router";

import profile from "../../public/profile.png";
import home from "../../public/home.png";
import create from "../../public/create.png";
import friends from "../../public/friends.png";

const NavBar = (props) => {
  return (
    <>
      <div class="u-flexColumn">
        <div class="u-flex">
          <div>
            <Link to={`/Profile.js/`}>Profile</Link>
            <img src={profile} class="profile" />
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
        </div>
      </div>
    </>
  );
};
export default NavBar;
