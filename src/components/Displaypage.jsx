import React from 'react'
import { IoMusicalNote } from "react-icons/io5";
import "./Displaypage.css"
function Displaypage() {
  return (
    <div className="display-container">
    <div className="musiclogo">
      <IoMusicalNote />
    </div>
    <div className="text">  
      <h1>
        Millions of songs <br /> Free on Musicverse
      </h1>
    </div>
      <div className="btn">
        <button className="btn1">
          Sign up for free
        </button>
        <button className="btn2">
          Log in
        </button>
      </div>
   
    </div>
  )
}

export default Displaypage
