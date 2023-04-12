import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
// import { Routes } from "react-router-dom";
const ethers = require("ethers");

const UserState = (props) => {
  const [userAddr, setUserAddr] = useState();
  const [signer, setSigner] = useState();

  useEffect(() => {
    const getAddress = async () => {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const signerAddr = await signer.getAddress();
        setSigner(signer);
        setUserAddr(signerAddr);
      }
      const handleAddrChange = (accounts) => {
        setUserAddr(accounts[0]);
      };
      //   const { ethereum } = window;
      ethereum.on("accountsChanged", handleAddrChange);
    };
    getAddress();
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          userAddr,
          signer,
        }}
      >
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export default UserState;
