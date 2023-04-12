import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="bg-purple-900 p-10 text-white font-bold text-2xl  flex justify-between mb-7">
        Course DNFT
        <button className="bg-white text-purple-900 rounded-md p-4">
          <Link to="/dashboard">Dashboard</Link>
        </button>
      </div>
    </>
  );
};

export default Navbar;
