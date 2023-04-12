import React from "react";
import "./App.css";
import { Navbar } from "./components";
import { Body } from "./container";
import UserState from "./context/User/UserState";

function App() {
  return (
    <>
      <UserState>
        <Navbar />
        <Body />
      </UserState>{" "}
    </>
  );
}

export default App;
