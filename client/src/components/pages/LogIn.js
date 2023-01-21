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
      <div className="u-flexColumn">
        <div>
          <h1 className="heading">PositiviTy</h1>
        </div>
        <div className="u-flex">
          <div className="center">
            <img src={logo} className="fit" />
          </div>

          <div className="vl"></div>
          <div className="u-flexColumn right">
            <div>
              <h2 className="word">Welcome! Please log in below</h2>
            </div>
            <div className="left">
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
