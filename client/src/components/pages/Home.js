import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import NavBar from "./NavBar.js";
import background_image from "../../public/logo.jpeg";
/**
 * Define the "Home" component
 */
const Home = (props) => {
  return (
    <>
      <div class="u-flexColumn">
        <h1 className="word">Today's Motivation</h1>
      </div>

      <NavBar />
    </>
  );
};

export default Home;
