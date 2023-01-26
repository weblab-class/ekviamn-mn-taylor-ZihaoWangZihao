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
            <Link to={`/`}>
              <img src={home} class="home" />
            </Link>
          </div>
          <div>
            <Link to={`/Profile`}>
              <img src={profile} class="profile" />
            </Link>
          </div>

          <div>
            <Link to={`/CreatePage`}>
              <img src={create} class="create" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
