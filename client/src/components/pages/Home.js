import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";

import Skeleton from "./Skeleton";
import logo from "../../public/logo.jpeg";
/**
 * Define the "Home" component
 */
const Home = (props) => {
  return (
    <>
      <Skeleton
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
        userId={props.userId}
      />
      <div class="u-flex">
        <h1 class="heading">PositiviTy</h1>
        <div class="vl"></div>
        <div>
          <h2 class="left">Welcome! Please Log In or Sign Up</h2>
          <img src={logo} class="pic" />
        </div>
      </div>
    </>
  );
};

export default Home;
