import React from "react";
import "./Login.css";
import { IoMusicalNote } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
 function Login() {
  const navigate =useNavigate();
  return (
    <div className="login-container">
      <div className="music-icon"><IoMusicalNote /></div>
      <h1 className="login-title">Log in to musicverse</h1>

      <form className="login-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <a href="#" className="forgot-password">
          Forgot Password
        </a>

        <button type="submit" className="login-btn"
        onClick={()=>navigate("/Continue as Guest")}
        >Log In</button>
      </form>

      <p className="signup-text">
        Don’t have an account? <br />
        <a href="#" className="signup-link" 
        onClick={()=>navigate("/Sign up for free")}
        >Sign up</a>
      </p>
    </div>
  );
}

export default Login;