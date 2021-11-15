import React from "react";
import Otp from "./Otp";

function Modal({ setOpenModal, number }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titlesetOpenModalBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Phone Varification</h1>
          <hr/>
        </div>
        <div className="body">
          <p>Enter the OTP you recieved on XXXXX-XXX{number.slice(8)} </p>
        </div>
        <div className="otpBox">
          <Otp/>
        </div>
        <div className="optionBtn">
          <a href="#">
            Change Number
          </a>
          <a href="#">
            Re-send OTP
          </a>
        </div>    
        <div className="footer">
          <button
          id="cancelBtn"
          >
            Verify Phone Number
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;