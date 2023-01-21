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
      <NavBar />
    </>
  );
};

export default Profile;
