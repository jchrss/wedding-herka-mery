"use client"

import { useState } from 'react';
import Image from 'next/image';
import { CreditCard, Copy, QrCode } from 'lucide-react';
import styles from '../app/styles/GiftSection.module.css';

const GiftSection = () => {
  const [copiedAccount, setCopiedAccount] = useState('');
  
  const accountDetails = [
    {
      name: "Franky Edward Samaloisa",
      bank: "Bank Central Asia",
      accountNumber: "7510860645",
      qris: "/asset/qris.jpg"
    },
    {
      name: "Juli Meri Eni Sababalat",
      bank: "Bank Rakyat Indonesia",
      accountNumber: "791901003540534",
      qris: "/asset/qris2.jpg"
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
        <h2 className={styles.sectionTitle}>Kado Pernikahan</h2>
        <p className={styles.giftMessage}>
          Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih
          untuk kami, dapat melalui:
        </p>
        
        {accountDetails.map((account, index) => (
          <div key={account.accountNumber} className={styles.giftCard}>
            <div className={styles.bankSection}>
              <div className={styles.sectionHeader}>
                <CreditCard size={24} color="#A69480" />
                <h3>Bank Transfer</h3>
              </div>
              <div className={styles.bankDetails}>
                <div className={styles.bankInfo}>
                  <p><strong>Name:</strong> {account.name}</p>
                </div>
                <div className={styles.bankInfo}>
                  <p><strong>Bank:</strong> {account.bank}</p>
                </div>
                <div className={styles.bankInfo}>
                  <p><strong>Account:</strong> {account.accountNumber}</p>
                  <button
                    onClick={() => handleCopy(account.accountNumber)}
                    className={styles.copyButton}
                    title="Copy account number"
                  >
                    <Copy size={16} />
                    Copy
                    {copiedAccount === account.accountNumber && (
                      <span className={styles.copiedTooltip}>Copied!</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            <div className={styles.divider}></div>
            
            <div className={styles.qrisSection}>
              <div className={styles.sectionHeader}>
                <QrCode size={24} color="#A69480" />
                <h3>QRIS</h3>
              </div>
              <div className={styles.qrisContainer}>
                <Image 
                  src={account.qris} 
                  alt={`QRIS Payment Code for ${account.name}`}
                  className={styles.qrisImage}
                  width={500}
                  height={500}
                />
                <p className={styles.qrisName}>{account.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GiftSection;