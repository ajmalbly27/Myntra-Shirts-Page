import React, { useEffect, useState } from 'react'
import './Login.css'
import Navbar from '../Header/Navbar'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const naviagte = useNavigate();
    const [getNumber, setNumber] = useState('');
    const [getFlag,setFlag] = useState(false);
    
    const handleChange =(e)=>{
        let val = e.target.value.slice(0,10);
        console.log(val)
        setNumber(val);
    }

    useEffect( ()=>{
        if(getNumber.length === ''){
            setFlag(false)
        }
        if(getNumber.length === 10){
            setFlag(false)
        }
        // setFlag(getNumber.length <10)
    },[getNumber])
    const handleCheck = ()=>{
        if(getNumber.length ===''){
            setFlag(true);
            return;
        }
        if(getNumber.length <10){
            setFlag(true);
            return;
        }
        redirectToOTP();

    }
    const redirectToOTP=()=>{
        naviagte('/OTPPage',{state:{mobNumber:getNumber}})
    }
  return (
    <div>
        <div className="login-navbar">
            <Navbar/>
        </div>
        <div className='login-wrapper'>
            <div className="login-container">
                <div className='login-advertisement'>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/1/d07fff8e-c616-44ae-a01d-f0163c2e743c1625160833447-Banner-Hamburger-500--1-.jpg" alt="img" />
                </div>
                <div className='login-content'>
                        <div className='lgn'>Login<span style={{fontWeight:400,fontSize:"large"}}>  or  </span><span className='lgn'>Signup</span></div>
                        <div className="login-form">
                            <input type="number" name="" id="staticPlaceholder" placeholder='Mobile number*' value={getNumber} onChange={handleChange}/>
                            {getFlag?<p style={{color:"red",fontSize:"10px"}}>Please enter a valid mobile number (10 digits)</p>:null}
                            <br /><br />
                            <div style={{fontSize:"13px",fontWeight:"400"}}>By continuing, I agree to the <span style={{color:"#ff3e6c",fontSize:"13px",fontWeight:"500"}}>Terms of Use <span style={{color:"black"}}>&</span> Privacy Policy</span></div>
                            <div className='login-continue'>
                                <button onClick={handleCheck}>Continue</button>
                            </div>
                            <div style={{fontSize:"13px",fontWeight:"400"}}>Have trouble logging in? <span style={{color:"#ff3e6c",fontSize:"15px",fontWeight:"500"}}>Get help</span></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;