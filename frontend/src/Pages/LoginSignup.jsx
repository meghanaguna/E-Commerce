import React from 'react';
import './CSS/LoginSignup.css';

export default function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-inputfields d-flex flex-column">
          <input type="text" placeholder='Your Name' className='form-control form-control-sm'/>
          <input type="email" placeholder='Email Address' className='form-control form-control-sm'/>
          <input type="password" placeholder='Password' className='form-control form-control-sm'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an Account ? <span>Login here</span></p>
        <div className="loginsignup-agree d-flex align-items-center">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>

    </div>
  )
}
