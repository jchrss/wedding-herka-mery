"use client"

import styles from '../app/styles/VenueSection.module.css'
import { MapPin } from 'lucide-react'

const VenueSection = () => {
  return (
    <section className={styles.ceremonySection}>
      <div className={styles.ceremonyContent}>
        <h2 className={styles.sectionTitle}>Our Special Day</h2>

        <div className={styles.timelineContainer}>
          <div className={styles.eventCard}>
            <h3>Pemberkatan Nikah</h3>
            <time>Minggu, 4 Oktober 2026 | 10:00 - 12:00 WIB</time>
            <div className={styles.venueInfo}>
              <span>
                <MapPin size={18} color="#8B7355" />
                GBI Sola Gracia Bosua
              </span>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=GBI+Sola+Gracia+Bosua"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
            >
              <MapPin size={18} />
              View Map
            </a>
          </div>

          <div className={styles.eventCard}>
            <h3>Resepsi Pernikahan</h3>
            <time>Minggu, 4 Oktober 2026 | 13:00 WIB - Selesai</time>
            <div className={styles.venueInfo}>
              <span>
                <MapPin size={18} color="#8B7355" />
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
              <MapPin size={18} />
              View Map
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VenueSection
