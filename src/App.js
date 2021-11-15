import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import ErrorBox from "./components/ErrorBox";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [number, setNumber] = useState()
  const [errorBox, setErrorBox] = useState(false)
  const ref = useRef()

  useEffect (() => {
    const checkIfClickedOudtside = (e) => {
      if (errorBox && ref.current && !ref.current.contains(e.target)){
        setErrorBox(false)
        console.log("You clicked outside");
      }
    }
    document.addEventListener("mousedown", checkIfClickedOudtside)

    return() => {
      document.removeEventListener("mousedown", checkIfClickedOudtside)
    }
  }, [errorBox])

  return (
    <div className="App">
      <h1>Please Enter the Mobile Number to get the OTP.</h1>
      <input
        className="numInput"
        placeholder="Mobile Number"
        type="text"
        value={number}
        onChange={(e) => {setNumber(e.target.value)}}
        maxLength="10"
        onKeyPress={(e) => {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
          }
        }}
      />
      { errorBox && <ErrorBox closeBox={ref} /> }
      <button
        className="openModalBtn"
        onClick={() => {
          number && number.length=="10" ?
          setModalOpen(true) : setErrorBox(true)
        }}
      >
        Get OTP
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} number={number} />}
    </div>
  );
}

export default App;