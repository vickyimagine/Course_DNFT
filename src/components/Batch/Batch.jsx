import React, { useContext, useEffect, useState } from "react";
import "./Batch.css";
import { ethers } from "ethers";
import UserContext from "../../context/User/UserContext";
import { abi, contractAddress } from "../../utils/essentials";

const Batch = () => {
  const user = useContext(UserContext);

  const createBatch = async () => {
    const contract = new ethers.Contract(contractAddress, abi, user.signer);
    try {
      const create = await contract.createBatch();
      console.log(create);
    } catch (error) {
      console.log(`Error occurred: ${error}`);
    }
  };

  return (
    <>
      <button
        className="bg-purple-900 text-white p-3 rounded mx-5"
        onClick={createBatch}
      >
        Create Batch
      </button>
    </>
  );
};

export default Batch;
