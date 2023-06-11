import { React, useEffect, useRef, useState } from "react";
import "./Otp.css";
import OTPLogo from "../../images/otp-logo.jpg";
import Navbar from "../Header/Navbar";
import { useLocation, } from "react-router-dom";

const Otpinput = ({ generatedOTP, generateOTP, navigateToPage }) => {
  const inputRefs = useRef([]);
  const location = useLocation();
  const [otp, setOTP] = useState(["", "", "", ""]);
  useEffect(()=>{
    generateOTP();
  },[])
  const handleInputChange = (event, index) => {
    const value = event.target.value;
    // Update the OTP array with the new value at the specified index
    const updatedOTP = [...otp];
    updatedOTP[index] = value;
    console.log(updatedOTP)
    setOTP(updatedOTP);

    // Focus on the next input field
    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Check if all OTP digits are filled

    if (index === inputRefs.current.length-1 && updatedOTP.every((digit) => digit !== '')){
        const filledOTP = updatedOTP.join("");
        console.log(filledOTP)
        console.log(generatedOTP)
        if (filledOTP === generatedOTP) {
            console.log("Yes");
            navigateToPage();
        } else {
            console.log("No")
            alert("Invalid OTP. Please try again.");
            setOTP(["", "", "", ""]);
            inputRefs.current[0].focus();
        }
    }
  };
  return (
    <div>
      <div className="login-navbar">
        <Navbar />
      </div>
      <div className="otp-wrapper">
        <div className="otp-container">
          <div className="otp-logo">
            <img src={OTPLogo} alt="otplogoImage" />
          </div>
          <p className="verify">Verify with OTP</p>
          <p style={{ fontSize: "13px", fontWeight: "100" }}>Sent to {location.state.mobNumber}</p>
          <br />
          <div className="otp-box">
            {otp.map((digit, index) => (
              <div className="otp-input-wrapper" key={index}>
                <input
                  type="text"
                  className="otp-input"
                  value={digit}
                  maxLength={1}
                  onChange={(event) => handleInputChange(event, index)}
                  ref={(inputRef) => (inputRefs.current[index] = inputRef)}
                />
              </div>
            ))}
          </div>
          <br />
          <button className="otp-resend">Resend OTP</button>
          <br />
          <br />
          <div style={{ fontSize: "13px" }}>Log in using <span style={{ color: "#ff3e6c", fontWeight: "500" }}>Password</span></div>
          <br />
          <div style={{ fontSize: "13px" }}>Having trouble logging in?<span style={{ color: "#ff3e6c", fontWeight: "500" }}>Get help</span></div>
        </div>
      </div>
    </div>
  );
};

export default Otpinput;