import React, { useState } from "react";
import "./Mint.css";
import { ethers } from "ethers";
import { contractAddress, abi } from "../../utils/essentials";
const Mint = () => {
  const [studentAddr, setStudentAddr] = useState();
  const mintNFT = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const mint = await contract.safeMint(studentAddr);
    } catch (error) {}
  };
  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Student Address"
          className="ring-2 ring-purple-900 rounded-md mx-4 p-3"
          onChange={(e) => setStudentAddr(e.target.value)}
        />
        <button
          className="bg-purple-900 text-white p-4 rounded-md "
          onClick={mintNFT}
        >
          Mint
        </button>
      </div>
    </>
  );
};

export default Mint;
