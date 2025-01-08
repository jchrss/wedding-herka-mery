// GiftSection.js
"use client"

import { useState } from 'react';
import Image from 'next/image';
import { CreditCard, Copy, QrCode } from 'lucide-react';
import styles from '../app/styles/GiftSection.module.css';

const GiftSection = () => {
  const [copiedAccount, setCopiedAccount] = useState('');
  
  const accountDetails = {
    name: "Franky Edward Samaloisa",
    bank: "Bank Central Asia",
    accountNumber: "7510860645",
    qrisImage: "/asset/qris.jpg"
  };

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
          we have provided our banking details and QRIS code below.
        </p>
        
        <div className={styles.giftCard}>
          <div className={styles.bankSection}>
            <div className={styles.sectionHeader}>
              <CreditCard size={24} />
              <h3>Bank Transfer</h3>
            </div>
            <div className={styles.bankDetails}>
              <p><strong>Name:</strong> {accountDetails.name}</p>
              <p><strong>Bank:</strong> {accountDetails.bank}</p>
              <div className={styles.accountNumber}>
                <p><strong>Account:</strong> {accountDetails.accountNumber}</p>
                <button
                  onClick={() => handleCopy(accountDetails.accountNumber)}
                  className={styles.copyButton}
                  title="Copy account number"
                >
                  <Copy size={16} />
                  {copiedAccount === accountDetails.accountNumber && (
                    <span className={styles.copiedTooltip}>Copied!</span>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.qrisSection}>
            <div className={styles.sectionHeader}>
              <QrCode size={24} />
              <h3>QRIS</h3>
            </div>
            <div className={styles.qrisContainer}>
              <Image 
                src={accountDetails.qrisImage} 
                alt="QRIS Payment Code"
                className={styles.qrisImage}
                width={500}
                height={500}
              />
              <p className={styles.qrisName}>Scan to send gift</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;