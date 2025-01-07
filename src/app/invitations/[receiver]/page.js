'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from '../../styles/receiver.module.css';
import { useMusicContext } from '../../contexts/MusicContext';

export default function ReceiverPage({ params }) {
  const { receiver } = params;
  const decodedName = decodeURIComponent(receiver);
  const router = useRouter();
  const { setShouldPlayMusic } = useMusicContext();

  const handleOpenInvitation = () => {
    setShouldPlayMusic(true);
    router.push('/');
  };

  return (
    <main className={styles.container}>
      <div className={styles.backgroundOverlay} />
      
      <div className={styles.contentContainer}>
        <div className={styles.headerImage}>
          <Image
            src="/asset/1.jpg"
            alt="Wedding"
            width={150}
            height={150}
            className={styles.circleImage}
            priority
          />
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>The Wedding Of</h1>
          
          <div className={styles.coupleNames}>
            <span>John</span>
            <span>&</span>
            <span>Jane</span>
          </div>

          <h2 className={styles.subtitle}>Dear,</h2>
          <h3 className={styles.guestName}>{decodedName}</h3>
          
          <p className={styles.message}>
            We invite you to share in our joy and request your presence at our wedding ceremony
          </p>
        </div>

        <button onClick={handleOpenInvitation} className={styles.button}>
          Open Invitation
        </button>

        <p className={styles.note}>
          *Please bring this invitation with you
        </p>
      </div>
    </main>
  );
}