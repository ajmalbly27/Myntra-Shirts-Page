import React from 'react';
import Otpinput from './Otpinput';
import {  useNavigate } from 'react-router-dom';
const Otp =()=> {
  const navigate = useNavigate();
  let generatedOTP;
  const generateOTP =()=>{
       generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
       alert(`Generated OTP: ${generatedOTP}`);
       console.log(generatedOTP)
  }
  const navigateToPage = () => {
    console.log("Naviagte succesfully")
    navigate('/AfterOtp')
  };

  return (
    <div>
      <Otpinput generatedOTP={generatedOTP} generateOTP={generateOTP} navigateToPage={navigateToPage} />
    </div>
  );
}

export default Otp;