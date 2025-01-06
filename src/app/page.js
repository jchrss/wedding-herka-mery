"use client"

// app/page.js
import styles from './page.module.css';
import { Calendar, MapPin, Heart, Gift, CreditCard, Copy } from 'lucide-react';
import MusicWidget from '@/components/MusicWidget';
import { useState } from 'react';

const GiftSection = () => {
  const [copiedAccount, setCopiedAccount] = useState('');
  
  const accounts = [
    {
      name: "Franky Edward Samaloisa",
      bank: "Bank Central Asia",
      accountNumber: "7510860645",
      type: "Bank Account"
    }
  ];

  const handleCopy = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedAccount(accountNumber);
    setTimeout(() => setCopiedAccount(''), 2000);
  };

  return (
    <section className={styles.giftSection}>
      <div className={styles.giftContent}>
        <h2 className={styles.sectionTitle}>Wedding Gifts</h2>
        <p className={styles.giftMessage}>
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
          we have provided our banking details below.
        </p>
        
        <div className={styles.accountsContainer}>
          {accounts.map((account, index) => (
            <div key={index} className={styles.accountCard}>
              <div className={styles.accountHeader}>
                <CreditCard size={24} />
                <h3>{account.type}</h3>
              </div>
              <div className={styles.accountDetails}>
                <p><strong>Name:</strong> {account.name}</p>
                <p><strong>Bank:</strong> {account.bank}</p>
                <div className={styles.accountNumber}>
                  <p><strong>Account:</strong> {account.accountNumber}</p>
                  <button
                    onClick={() => handleCopy(account.accountNumber)}
                    className={styles.copyButton}
                    title="Copy account number"
                  >
                    <Copy size={16} />
                    {copiedAccount === account.accountNumber && (
                      <span className={styles.copiedTooltip}>Copied!</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.date}>August 15, 2025</span>
            <div className={styles.divider}></div>
            <h1 className={styles.names}>
              <span className={styles.nameSpan}>Franky Edwardo Samaloisa Manullang</span>
              <span className={styles.and}>&</span>
              <span className={styles.nameSpan}>Juli Meri Eni Sababalat, S.Pd</span>
            </h1>
            <div className={styles.divider}></div>
            <p className={styles.invitation}>
              Request the pleasure of your company 
              <br className={styles.breakMobile} />
              at our wedding celebration
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ceremonySection}>
        <div className={styles.ceremonyContent}>
          <h2 className={styles.sectionTitle}>Our Special Day</h2>
          
          <div className={styles.timelineContainer}>
            <div className={styles.eventCard}>
              <h3>Holy Prayer</h3>
              <time>10:00 WIB</time>
              <p>Join us in seeking blessings for our new journey</p>
              <div className={styles.venueInfo}>
                <MapPin size={16} />
                <span>GPdI Rehobot Bosua</span>
                <p>Mentawai Islands Regency, West Sumatra 25932</p>
              </div>
              <div className={styles.actionButtons}>
                <button className={styles.actionButton}>
                  <MapPin size={16} />
                  View Map
                </button>
                <button className={styles.actionButton}>
                  <Calendar size={16} />
                  Add to Calendar
                </button>
              </div>
            </div>

            <div className={styles.eventCard}>
              <h3>Reception</h3>
              <time>13:00 WIB</time>
              <p>Celebrate with us over lunch and dancing</p>
              <div className={styles.venueInfo}>
                <MapPin size={16} />
                <span>The Plaza Garden</span>
                <p>789 Joy Boulevard, New York</p>
              </div>
              <div className={styles.actionButtons}>
                <button className={styles.actionButton}>
                  <MapPin size={16} />
                  View Map
                </button>
                <button className={styles.actionButton}>
                  <Calendar size={16} />
                  Add to Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GiftSection />
      <MusicWidget />
    </div>
  );
}