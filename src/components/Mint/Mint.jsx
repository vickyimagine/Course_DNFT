import React, { useState, useContext, useEffect } from "react"
import "./Mint.css"
import { ethers } from "ethers"
import { contractAddress, abi } from "../../utils/essentials"
import UserContext from "../../context/User/UserContext"

const Mint = (props) => {
  const user = useContext(UserContext)
  // const [studentList, setStudentList] = useState([]);
  const [studentAddr, setStudentAddr] = useState()
  const [URI, setURI] = useState()
  const [descrp, setDescrp] = useState()
  const [isRendered, setIsRendered] = useState(false)
  const [studentList, setStudentList] = useState([])

  const mintNFT = async () => {
    const contract = new ethers.Contract(contractAddress, abi, user.signer)
    try {
      const mint = await contract.enrollStudent(studentAddr, URI, descrp, props.batchid)
      console.log(mint)
    } catch (error) {
      console.log(`ERro:${error}`)
    }
  }

  const fetchStudentList = async () => {
    const contract = new ethers.Contract(contractAddress, abi, user.signer)
    let student
    try {
      const len = await contract.getStudentLen(props.batchid)
      const numLen = Number(len)
      // const students = [];
      for (let i = 0; i < numLen; i++) {
        const studentDet = await contract.facultyToStudent(
          user.userAddr,
          props.batchid,
          i
        )
        student = {
          tokenId: studentDet._tokenId.toString(),
          walletAddr: studentDet._studentAddr,
          description: studentDet._description,
        }
        setStudentList((prev) => {
          return [...prev, student]
        })
      }
      console.log(numLen)
    } catch (error) {
      console.log(`Error occurred: ${error}`)
    }
  }

  // useEffect(() => {
  //   fetchStudentList();
  // }, []);

  const updateNFTs = async () => {
    const contract = new ethers.Contract(contractAddress, abi, user.signer)
    try {
      const len = await contract.getStudentLen(props.batchid)
      const numLen = Number(len)
      try {
        for (let i = 0; i <= numLen; i++) {
          const studentId = await contract.facultyToStudent(
            user.userAddr,
            props.batchid,
            i
          )
          try {
            const update = await contract.update(
              studentId._tokenId.toString(),
              "https://gateway.pinata.cloud/ipfs/QmZpxgCbWTvo7MWJFR48LYykFbLz1ogYwxbtPMBoovjH6b"
            )
            console.log(update)
          } catch (error) {
            console.log(`Error:${error}`)
          }
        }
      } catch (error) {
        console.log(`Error occured whilelooping:${error}`)
      }
    } catch (error) {
      console.log(`Error occured:${error}`)
    }

    console.log("nft updated for all studetns")
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-center my-10 ">
          <input
            type="text"
            placeholder="Student Address"
            className="ring-2 ring-purple-900 rounded-md mx-4 p-3"
            onChange={(e) => setStudentAddr(e.target.value)}
          />
          <input
            type="text"
            placeholder="URI"
            className="ring-2 ring-purple-900 rounded-md mx-4 p-3"
            onChange={(e) => setURI(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="ring-2 ring-purple-900 rounded-md mx-4 p-3"
            onChange={(e) => setDescrp(e.target.value)}
          />
          <button
            className="bg-purple-900 text-white p-4 rounded-md "
            onClick={mintNFT}>
            Mint
          </button>
          <button
            className="bg-purple-900 text-white p-3 rounded h-fit mx-5"
            onClick={() => {
              props.setClicked(false)
            }}>
            X
          </button>
        </div>
        <button
          className="bg-purple-900 text-white p-3 rounded h-fit mx-5"
          onClick={updateNFTs}>
          Update
        </button>
        <button
          className="bg-purple-900 text-white p-3 rounded h-fit mx-5"
          onClick={fetchStudentList}>
          Fetch Student
        </button>
        <div>
          <table>
            <thead>
              <tr>
                <th>Token ID</th>
                <th>Wallet Address</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student) => (
                <tr key={student.tokenId}>
                  <td>{student.tokenId}</td>
                  <td>{student.walletAddr}</td>
                  <td>{student.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Mint
