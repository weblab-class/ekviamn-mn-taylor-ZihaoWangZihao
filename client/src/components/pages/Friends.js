import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import NavBar from "./NavBar.js";
/**
 * Define the "Profile" component
 */
const Friends = (props) => {
  return (
    <>
      <div className="u-flexColumn">
        <h1 className="word">Your Friends' Motivations</h1>
      </div>

      <NavBar />
    </>
  );
};

export default Friends;
