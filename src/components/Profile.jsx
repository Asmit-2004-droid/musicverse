import React from 'react'
import "./Profile.css"
import { useNavigate } from 'react-router-dom'
import { FaPlus, FaPowerOff } from "react-icons/fa";import { IoMdSettings } from "react-icons/io";
function Profile () {
    const navigate =useNavigate();
  return (
    <div className="profile-container">

      <div className="profile-header">
        <h2>Your Profile</h2>
        <div className="profile-icons">
          <FaPlus />
          <div 
          onClick={()=>navigate("/setting")}
          ><IoMdSettings /></div>
          <div 
          onClick={()=>navigate("/")}
          ><FaPowerOff /></div>
        </div>
      </div>
      <div className="profile-info">
        <img
          src="musicverse-logo.png"
          alt="User Avatar"
          className="profile-avatar"
        />
        <h3>Matheo</h3>
        <p className="email">matheo24@gmail.com</p>
      </div>
      <div className="liked-section">
        <p>Liked Songs & Playlists</p>
      </div>
      
    </div>
  )
}

export default Profile
