import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import NavBar from "./NavBar.js";
import background_image from "../../public/logo.jpeg";
import LogIn from "./LogIn.js";
import Feed from "../modules/Feed.js";
/**
 * Define the "Home" component
 */
const Home = ({ userId, handleLogin, handleLogout }) => {
  if (userId == null) {
    return <LogIn path="/" handleLogin={handleLogin} handleLogout={handleLogout} userId={userId} />;
  }
  return (
    <>
      <div className="u-flexColumn">
        <h1 className="word">Today's Motivation</h1>
      </div>
      <div className="feed">
        <Feed userId={userId} filter={false}/>
      </div>
      <NavBar />
    </>
  );
};

export default Home;
