import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const Home = () => {
  return (
    <>
      <h1 class="heading">PositiviTy</h1>
      <div class="vl"></div>
      <div>
        <h2 class="left">Welcome! Please Log In or Sign Up</h2>
        <img src="../../public/logo.jpeg" class="pic" />
      </div>
    </>
  );
};

export default App;
