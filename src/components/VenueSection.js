"use client"

import styles from '../app/styles/VenueSection.module.css'
import { MapPin } from 'lucide-react'

const VenueSection = () => {
  return (
    <section className={styles.ceremonySection}>
      <div className={styles.ceremonyContent}>
        <span className={styles.eyebrow}>Save The Date</span>
        <h2 className={styles.sectionTitle}>Our Special Day</h2>

        <div className={styles.timelineContainer}>
          <div className={styles.cardShell}>
            <div className={styles.eventCard}>
              <h3>Pemberkatan Nikah</h3>
              <time>Minggu, 4 Oktober 2026 | 10:00 - 12:00 WIB</time>
              <div className={styles.venueInfo}>
                <span>
                  <MapPin size={18} strokeWidth={1.5} color="#A9825A" />
                  GBI Sola Gracia Bosua
                </span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=GBI+Sola+Gracia+Bosua"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
              >
                <MapPin size={16} strokeWidth={1.5} />
                View Map
              </a>
            </div>
          </div>

          <div className={styles.cardShell}>
            <div className={styles.eventCard}>
              <h3>Resepsi Pernikahan</h3>
              <time>Minggu, 4 Oktober 2026 | 13:00 WIB - Selesai</time>
              <div className={styles.venueInfo}>
                <span>
                  <MapPin size={18} strokeWidth={1.5} color="#A9825A" />
                  Kediaman Mempelai Perempuan
                </span>
                <p>Di rumah Pdt. Sarmen Steven Samaloisa</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bosua+Sumatera+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
              >
                <MapPin size={16} strokeWidth={1.5} />
                View Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VenueSection
