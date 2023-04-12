import React from "react";
import { Batch, Dashboard } from "../../components";
import { Routes, Route } from "react-router-dom";

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Batch />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Body;
