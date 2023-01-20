import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";

import Skeleton from "./Skeleton";
import logo from "../../public/logo.jpeg";
import profile from "../../public/profile.png";
import home from "../../public/home.png";
import create from "../../public/create.png";
import friends from "../../public/friends.png";
/**
 * Define the "Profile" component
 */
const Profile = (props) => {
  return (
    <>
      <div class="u-flexColumn">
        <div class="u-flex">
          <div>
            <img src={profile} class="profile" />
          </div>
          <div>
            <img src={home} class="home" />
          </div>
          <div>
            <img src={create} class="create" />
          </div>
          <div>
            <img src={friends} class="friends" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
