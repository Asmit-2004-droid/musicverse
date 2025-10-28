import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SongCard from "./components/SongCard";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import sample1 from "./assets/sample1.mp3";
import sample2 from "./assets/sample2.mp3";
import sample3 from "./assets/sample3.mp3";
import "./index.css";

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
      <Navbar />
      <Hero />
      <section className="songs-section">
        <h2>Top Tracks</h2>
        <div className="songs-grid">
          {playlist.map((song, i) => (
            <SongCard key={i} {...song} />
          ))}
        </div>
      </section>

      <MusicPlayer playlist={playlist} />
      <Footer />
    </div>
  );
}

export default App;
