import React, { useContext, useEffect, useState } from "react"
import "./Dashboard.css"
import { ethers } from "ethers"
import { contractAddress, abi } from "../../utils/essentials"
import UserContext from "../../context/User/UserContext"
import Mint from "../Mint/Mint"
const Dashboard = () => {
  const user = useContext(UserContext)
  const [buttons, setButtons] = useState([])
  const [isBatchClicked, setIsBatchClicked] = useState(false)
  const [batchId, setBatchId] = useState(null)
  useEffect(() => {
    const getBatLen = async () => {
      const contract = new ethers.Contract(contractAddress, abi, user.signer)
      try {
        const getBatchLen = await contract.addrToFaculty(user.userAddr)
        const numBatch = Number(getBatchLen[1])
        console.log(numBatch)
        // Create an array of buttons
        const buttonsArray = Array(numBatch).fill(null)
        console.log(buttonsArray)
        setButtons(buttonsArray)
      } catch (error) {
        console.log(`Errror:${error}`)
      }
    }
    getBatLen()
  }, [])
  const test = async () => {
    const contract = new ethers.Contract(contractAddress, abi, user.signer)
    try {
      const getBatchLen = await contract.addrToFaculty(user.userAddr)
      const numBatch = Number(getBatchLen[1])
      console.log(numBatch)
      // Create an array of buttons
      const buttonsArray = Array(numBatch).fill(null)
      console.log(buttonsArray)
      setButtons(buttonsArray)
    } catch (error) {
      console.log(`Errror:${error}`)
    }
  }
  return (
    <>
      {isBatchClicked ? (
        <div className="flex justify-center items-center">
          <Mint
            batchid={batchId}
            setClicked={setIsBatchClicked}
          />
        </div>
      ) : (
        <>
          <div className="table">
            {/* Render a button for each element in the buttons array */}
            {buttons.map((button, index) => (
              <button
                key={index}
                className="bg-purple-900 text-white p-3 rounded mx-5"
                onClick={() => {
                  setBatchId(index + 1)
                  setIsBatchClicked(true)
                }}>
                Batch: {index + 1}
              </button>
            ))}
          </div>
          <button onClick={test}>Check Batch</button>
        </>
      )}
    </>
  )
}

export default Dashboard
