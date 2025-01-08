'use client';
import { useEffect, useState, useRef } from 'react';
import { Music2, Pause } from 'lucide-react';
import styles from '../app/styles/musicWidget.module.css';
import { useMusicContext } from '../app/contexts/MusicContext';

export default function MusicWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { shouldPlayMusic, setShouldPlayMusic } = useMusicContext();

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setShouldPlayMusic(false);
      } else {
        audioRef.current.muted = false;
        audioRef.current.volume = 0.8; // Set volume to 80%
        audioRef.current.play().catch((error) => {
          console.warn("Playback failed:", error);
        });
        setIsPlaying(true);
        setShouldPlayMusic(true);
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.volume = 0.8; // Set volume to 80% when component mounts
    }
  }, []);

  useEffect(() => {
    if (shouldPlayMusic && audioRef.current && !isPlaying) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.8; // Set volume to 80% when auto-playing
      audioRef.current.play().catch((error) => {
        console.warn("Playback failed:", error);
      });
      setIsPlaying(true);
    }
  }, [shouldPlayMusic, isPlaying]);

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
        src="/Music.mp3"
        loop
      />
    </div>
  );
}