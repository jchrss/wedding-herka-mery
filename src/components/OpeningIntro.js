'use client';

import { useEffect, useState } from 'react';
import styles from '../app/styles/OpeningIntro.module.css';

export default function OpeningIntro({ onComplete }) {
  const [exiting, setExiting] = useState(false);

  const finish = () => {
    if (exiting) return;
    setExiting(true);
    setTimeout(onComplete, 650);
  };

  useEffect(() => {
    const timer = setTimeout(finish, 3400);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`${styles.intro} ${exiting ? styles.exiting : ''}`}
      onClick={finish}
      role="button"
      tabIndex={0}
      aria-label="Lewati animasi pembuka"
    >
      <div className={styles.grain} />
      <div className={styles.frame}>
        <span className={styles.eyebrow}>The Wedding Of</span>
        <div className={styles.lineTop} />

        <div className={styles.monogram}>
          <span className={styles.letter} style={{ animationDelay: '0.5s' }}>H</span>
          <span className={styles.amp} style={{ animationDelay: '0.85s' }}>&amp;</span>
          <span className={styles.letter} style={{ animationDelay: '1.05s' }}>M</span>
        </div>

        <div className={styles.lineBottom} />
        <span className={styles.subtext}>Herkanusya &amp; Meri Elina</span>
        <span className={styles.hint}>Ketuk untuk melanjutkan</span>
      </div>
    </div>
  );
}
