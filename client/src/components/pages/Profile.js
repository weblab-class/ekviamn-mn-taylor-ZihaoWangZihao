import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";

import Skeleton from "./Skeleton";
import NavBar from "./NavBar.js";
/**
 * Define the "Profile" component
 */
const Profile = (props) => {
  return (
    <>
      <div>
        <h1 className="word">Name of Person</h1>
      </div>

      <div className="center">
        <h2 class="change">Messages Sent</h2>
      </div>

      <NavBar />
    </>
  );
};

export default Profile;
