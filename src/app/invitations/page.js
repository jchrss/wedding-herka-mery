'use client';
import React, { Suspense, useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './receiver.module.css';
import { useMusicContext } from '../contexts/MusicContext';
import OpeningIntro from '@/components/OpeningIntro';

// Separate component for the content that uses useSearchParams
function InvitationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setShouldPlayMusic } = useMusicContext();
  const [showIntro, setShowIntro] = useState(true);

  // Get the name from the query parameter 'n'
  const getReceiverName = () => {
    const name = searchParams.get('n');
    if (!name || name.trim() === '') return 'Bapak/Ibu/Sdr/i';
    return decodeURIComponent(name);
  };

  const decodedName = getReceiverName();

  const handleOpenInvitation = () => {
    setShouldPlayMusic(true);
    router.push('/');
  };

  if (showIntro) {
    return <OpeningIntro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className={styles.invitationCard}>
      <div className={styles.imageSection}>
        <div className={styles.imageFrame}>
          <Image
            src="/asset/couple-formal.jpg"
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
            <span className={styles.name}>Herka</span>
            <span className={styles.separator}>&</span>
            <span className={styles.name}>Meri</span>
          </div>
        </div>

        <div className={styles.invitation}>
          <div className={styles.recipientSection}>
            <span className={styles.dear}>Kepada Yth,</span>
            <h2 className={styles.recipientName}>{decodedName}</h2>
          </div>

          <p className={styles.message}>
            Dengan penuh sukacita, kami mengundang Anda untuk hadir dan memberkati hari pernikahan kami
          </p>

          <button
            onClick={handleOpenInvitation}
            className={styles.openButton}
            aria-label="Open Wedding Invitation"
          >
            Buka Undangan
          </button>

          <p className={styles.note}>
            *Mohon bawa undangan ini saat hadir
          </p>
        </div>
      </div>
    </div>
  );
}

// Loading component
function LoadingInvitation() {
  return (
    <div className={styles.invitationCard}>
      <div className={styles.loading}>Loading invitation...</div>
    </div>
  );
}

// Main page component
export default function ReceiverPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.backgroundOverlay} />

      <main className={styles.mainContent}>
        <Suspense fallback={<LoadingInvitation />}>
          <InvitationContent />
        </Suspense>
      </main>
    </div>
  );
}
