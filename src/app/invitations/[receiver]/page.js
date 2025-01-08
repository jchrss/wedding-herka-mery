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
    <div className={styles.pageContainer}>
      <div className={styles.backgroundOverlay} />
      
      <main className={styles.mainContent}>
        <div className={styles.invitationCard}>
          <div className={styles.imageSection}>
            <div className={styles.imageFrame}>
              <Image
                src="/asset/1.jpg"
                alt="Wedding"
                width={150}
                height={150}
                className={styles.coupleImage}
                priority
              />
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={styles.header}>
              <h1 className={styles.title}>The Wedding Of</h1>
              
              <div className={styles.coupleNames}>
                <span className={styles.name}>Franky</span>
                <span className={styles.separator}>&</span>
                <span className={styles.name}>Juli</span>
              </div>
            </div>

            <div className={styles.invitation}>
              <div className={styles.recipientSection}>
                <span className={styles.dear}>Dear,</span>
                <h2 className={styles.recipientName}>{decodedName}</h2>
              </div>
              
              <p className={styles.message}>
                We invite you to share in our joy and request your presence at our wedding ceremony
              </p>

              <button 
                onClick={handleOpenInvitation} 
                className={styles.openButton}
                aria-label="Open Wedding Invitation"
              >
                Open Invitation
              </button>

              <p className={styles.note}>
                *Please bring this invitation with you
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}