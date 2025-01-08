"use client"

// app/page.js
import styles from './page.module.css';
import { Calendar, MapPin, Heart, Gift, CreditCard, Copy, QrCode } from 'lucide-react';
import MusicWidget from '@/components/MusicWidget';
import { useState } from 'react';
import Image from 'next/image';
import Scripture from '@/components/Scripture';
import GiftSection from '@/components/GiftSection';
import WishesSection from '@/components/WishesSection';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.date}>Januari 19, 2025</span>
            <div className={styles.divider}></div>
            <h1 className={styles.names}>
              <span className={styles.nameSpan}>Franky Edward Samaloisa/Manullang</span>
              <span className={styles.and}>&</span>
              <span className={styles.nameSpan}>Juli Meri Eni Sababalat, S.Pd</span>
            </h1>
            <div className={styles.divider}></div>
            <br></br>
            <p className={styles.invitation}>
              Dengan Hormat dan Dengan penuh rasa syukur atas kasih Tuhan Yesus&nbsp;
              <br className={styles.breakMobile} />
              kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri&nbsp;
              <br className={styles.breakMobile} />
              Pernikahan putra putri kami
            </p>
          </div>
        </div>
      </section>

      <section className={styles.ceremonySection}>
        <div className={styles.ceremonyContent}>
          <h2 className={styles.sectionTitle}>Our Special Day</h2>
          
          <div className={styles.timelineContainer}>
            <div className={styles.eventCard}>
              <h3>Pemberkatan</h3>
              <time>10:00 WIB - Selesai</time>
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
              <h3>Resepsi</h3>
              <time>13:00 WIB - Selesai</time>
              <div className={styles.venueInfo}>
                <MapPin size={16} />
                <span>Rumah Keluarga</span>
                <p>Pdt. Sarmen Steven Samaloisa/Manullang</p>
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
      <WishesSection />
      <GiftSection />
      <Scripture />
      <MusicWidget />
    </div>
  );
}