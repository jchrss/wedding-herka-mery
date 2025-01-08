'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './receiver.module.css';
import { useMusicContext } from '../../contexts/MusicContext';

export default function ReceiverPage({ params }) {
  const unwrappedParams = React.use(params);
  const { receiver } = unwrappedParams;
  const decodedName = decodeURIComponent(receiver);
  const router = useRouter();
  const { setShouldPlayMusic } = useMusicContext();

  const handleOpenInvitation = () => {
    setShouldPlayMusic(true);
    router.push('/');
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.backgroundOverlay} />
      
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src="/asset/1.jpg"
            alt="Wedding"
            width={200}
            height={200}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.mainTitle}>The Wedding Of</h1>
          
          <div className={styles.names}>
            <span className={styles.brideName}>Franky</span>
            <span className={styles.ampersand}>&</span>
            <span className={styles.groomName}>Juli</span>
          </div>

          <div className={styles.invitationText}>
            <h2 className={styles.dear}>Dear,</h2>
            <h3 className={styles.recipientName}>{decodedName}</h3>
            
            <p className={styles.message}>
              We invite you to share in our joy and request your presence at our wedding ceremony
            </p>
          </div>

          <button onClick={handleOpenInvitation} className={styles.openButton}>
            Open Invitation
          </button>

          <p className={styles.footnote}>
            *Please bring this invitation with you
          </p>
        </div>
      </div>
    </main>
  );
}