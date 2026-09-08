'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../app/styles/InvitationCover.module.css';

export default function InvitationCover({ onOpen, exiting, interactive = true }) {
  /*
    Read on the client rather than with useSearchParams: this sits on the
    statically rendered home page, and useSearchParams would opt the whole
    page out of static rendering. The intro plays first, so the name is in
    place well before the cover is on screen.
  */
  const [name, setName] = useState('Guest');

  useEffect(() => {
    const n = new URLSearchParams(window.location.search).get('n');
    if (n && n.trim() !== '') setName(n.trim());
  }, []);

  return (
    <div className={`${styles.cover} ${exiting ? styles.exiting : ''}`}>
      <Image
        src="/asset/couple-adat.jpg"
        alt="Herkanusya dan Meri Elina dalam busana adat"
        fill
        priority
        sizes="100vw"
        className={styles.coverPhoto}
      />
      <div className={styles.scrim} />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>The Wedding Of</span>

        <h1 className={styles.names}>
          <span>Worili Herkanusya Kadalolor, S.I.P</span>
          <span className={styles.amp}>&amp;</span>
          <span>Meri Elina Samaloisa, S.I.P</span>
        </h1>

        <div className={styles.rule} />
        <span className={styles.date}>04 Oktober 2026</span>

        <div className={styles.greet}>
          <span className={styles.dear}>Kepada Yth,</span>
          <span className={styles.recipientName}>{name}</span>
        </div>

        {/* Not reachable by keyboard while the opening still covers it. */}
        <button
          onClick={onOpen}
          className={styles.openButton}
          aria-label="Buka Undangan"
          tabIndex={interactive ? 0 : -1}
        >
          <span>Buka Undangan</span>
        </button>
      </div>
    </div>
  );
}
