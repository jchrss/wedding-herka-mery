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
    <div className={styles.cover}>
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
          <span className={styles.recipientName}>{decodedName}</span>
        </div>

        <button
          onClick={handleOpenInvitation}
          className={styles.openButton}
          aria-label="Buka Undangan"
        >
          <span>Buka Undangan</span>
        </button>

        <p className={styles.note}>*Mohon bawa undangan ini saat hadir</p>
      </div>
    </div>
  );
}

// Loading component
function LoadingInvitation() {
  return <div className={styles.loading}>Loading invitation...</div>;
}

// Main page component
export default function ReceiverPage() {
  return (
    <Suspense fallback={<LoadingInvitation />}>
      <InvitationContent />
    </Suspense>
  );
}
