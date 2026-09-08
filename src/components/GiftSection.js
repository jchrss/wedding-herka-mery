'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../app/styles/GiftSection.module.css';

const ACCOUNT = '791901014477538';

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button
      type="button"
      className={styles.copy}
      onClick={handleCopy}
      aria-label="Salin nomor rekening"
    >
      {copied ? 'Tersalin' : 'Salin'}
    </button>
  );
}

const GiftSection = () => {
  return (
    <section className={styles.giftSection}>
      <div className={styles.stage}>
        <span className={styles.eyebrow}>Tanda Kasih</span>
        <h2 className={styles.sectionTitle}>Wedding Gift</h2>

        <p className={styles.lead}>
          Doa restu Anda adalah hadiah terindah bagi kami.
          <br />
          Namun bila berkenan memberi tanda kasih,
          <br />
          dapat melalui rekening berikut.
        </p>

        <h3 className={styles.heading}>Bank Transfer</h3>
        <div className={styles.bank}>
          <Image
            src="/asset/bri-logo.png"
            alt="Bank BRI"
            width={204}
            height={80}
            className={styles.bankLogo}
          />
          {/*
            iOS linkifies bare digit runs as phone numbers, which tints and
            underlines the account and offers to dial it. Copying belongs to the
            button below, so the inserted link is neutralised in the CSS.
          */}
          <p className={styles.number}>{ACCOUNT}</p>
          <p className={styles.holder}>Meri Elina Samaloisa</p>
          <CopyButton text={ACCOUNT} />
        </div>

        <p className={styles.closing}>
          Terima kasih atas kasih dan perhatian Anda
          <br />
          bagi perjalanan baru kami.
        </p>
      </div>
    </section>
  );
};

export default GiftSection;
