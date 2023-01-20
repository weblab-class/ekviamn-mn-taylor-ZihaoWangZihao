import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";

import Skeleton from "./Skeleton";
import logo from "../../public/logo.jpeg";

/**
 * Define the "LogIn" component
 */
const LogIn = (props) => {
  return (
    <>
      <div class="u-flexColumn">
        <div>
          <h1 class="heading">PositiviTy</h1>
        </div>
        <div class="u-flex">
          <div>
            <img src={logo} class="fit" />
          </div>
          <div class="vl"></div>
          <div class="u-flexColumn">
            <div>
              <h2 class="word">Welcome! Please log in below</h2>
            </div>
            <div class="left">
              <Skeleton
                handleLogin={props.handleLogin}
                handleLogout={props.handleLogout}
                userId={props.userId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
