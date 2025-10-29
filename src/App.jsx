import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import SongCard from "./components/SongCard";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import sample1 from "./assets/sample1.mp3";
import sample2 from "./assets/sample2.mp3";
import sample3 from "./assets/sample3.mp3";
import "./index.css";
import Displaypage from "./components/Displaypage";
import Signup from "./components/signup";
import Login from "./components/Login";
import Setting from "./components/setting";
import Profile from "./components/Profile";
import { FaPowerOff } from "react-icons/fa";
const playlist = [
  {
    title: "Lost in Echoes",
    artist: "Aurora",
    image: "/sample.jpg",
    src: sample1,
  },
  {
    title: "Starlit Skies",
    artist: "Nova",
    image: "/sample.jpg",
    src: sample2,
  },
  {
    title: "DreamWalker",
    artist: "Eclipse",
    image: "/sample.jpg",
    src: sample3,
  },
];
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Displaypage/>}></Route>
          <Route path="/Log in" element={<Login/>}></Route>
          <Route path="/Sign up for free" element={<Signup/>}></Route>
          <Route path="/Continue as Guest" element={<Navbar/>}></Route>
          <Route path="/Setting" element={<Setting/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
          <Route path="/Listen Now" element={
            <div className="songs-section">
            <div className="songs-links">
            <a href="#">All</a>
            <a href="#">Favorite</a>
            <a href="#">Downloads</a>
            </div>
            <div className="songs-grid">
                {playlist.map((song, i) => (
                <SongCard key={i} {...song} />
                ))}
            </div>
            <MusicPlayer playlist={playlist} />
          </div>
          }
          >
          </Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
