'use client';
import { useEffect, useState, useRef } from 'react';
import { Music2, Pause } from 'lucide-react';
import styles from './musicWidget.module.css';

export default function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.muted = false; // Unmute the audio when playing
        audioRef.current.play().catch((error) => {
          console.warn("Playback failed:", error);
        });
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true; // Ensure the audio is muted initially
    }
  }, []);

  return (
    <div className={styles.musicWidget}>
      <button
        onClick={toggleMusic}
        className={`${styles.musicButton} ${isPlaying ? styles.spinning : ''}`}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className={styles.icon} size={20} />
        ) : (
          <Music2 className={styles.icon} size={20} />
        )}
      </button>
      <audio
        ref={audioRef}
        src="/Music.mp3" // Ensure the file is in the public folder
        loop
      />
    </div>
  );
}
