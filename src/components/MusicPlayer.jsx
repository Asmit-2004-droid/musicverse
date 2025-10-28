import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import "./MusicPlayer.css";

function MusicPlayer({ playlist }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const currentTrack = playlist[currentTrackIndex];

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setProgress(0);
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setProgress(0);
    setCurrentTrackIndex((prev) =>
      prev === 0 ? playlist.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  const handleProgress = () => {
    const audio = audioRef.current;
    const percent = (audio.currentTime / audio.duration) * 100;
    setProgress(percent || 0);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(e.target.value);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", handleProgress);
    audio.addEventListener("ended", nextTrack);
    return () => {
      audio.removeEventListener("timeupdate", handleProgress);
      audio.removeEventListener("ended", nextTrack);
    };
  }, []);

  return (
    <div className="music-player">
      <img src={currentTrack.image} alt={currentTrack.title} className="track-img" />

      <div className="track-info">
        <h4>{currentTrack.title}</h4>
        <p>{currentTrack.artist}</p>
      </div>

      <audio ref={audioRef} src={currentTrack.src}></audio>

      <div className="controls">
        <button onClick={prevTrack} className="control-btn">
          <FaBackward />
        </button>

        <button onClick={togglePlay} className="play-btn">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button onClick={nextTrack} className="control-btn">
          <FaForward />
        </button>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="seek-bar"
        />
      </div>
    </div>
  );
}

export default MusicPlayer;
