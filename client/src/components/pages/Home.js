import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import NavBar from "./NavBar.js";
/**
 * Define the "Home" component
 */
const Home = (props) => {
  return (
    <>
      <NavBar />
    </>
  );
};

export default Home;
