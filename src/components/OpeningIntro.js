'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../app/styles/OpeningIntro.module.css';

/*
  Plays once on load and hands over on its own -- there is nothing to tap.
*/
export default function OpeningIntro({ onComplete }) {
  const [exiting, setExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const fade = setTimeout(() => setExiting(true), 3000);
    const done = setTimeout(() => onCompleteRef.current(), 3650);
    return () => {
      clearTimeout(fade);
      clearTimeout(done);
    };
  }, []);

  return (
    <div className={`${styles.intro} ${exiting ? styles.exiting : ''}`} aria-hidden="true">
      <div className={styles.grain} />
      <div className={styles.frame}>
        <span className={styles.eyebrow}>The Wedding Of</span>
        <div className={styles.lineTop} />

        {/* Overlapping HM monogram */}
        <div className={styles.monogram}>
          <span className={styles.letter}>H</span>
          <span className={styles.letter}>M</span>
        </div>

        <div className={styles.lineBottom} />
        <span className={styles.subtext}>Herkanusya &amp; Meri Elina</span>
      </div>
    </div>
  );
}
