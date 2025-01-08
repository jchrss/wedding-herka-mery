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
            <h3>Pemberkatan</h3>
            <time>Minggu, 19 Januari 2025 | 10:00 WIB - Selesai</time>
            <div className={styles.venueInfo}>
              <span>
                <MapPin size={18} color="#8B7355" />
                GPdI Rehobot Bosua
              </span>
              <p>Jl. Bosua Sipora Mentawai, Sumatera Barat</p>
            </div>
            <button className={styles.actionButton}>
              <MapPin size={18} />
              View Map
            </button>
          </div>

          <div className={styles.eventCard}>
            <h3>Resepsi</h3>
            <time>Minggu 19 Januari 2025 | 13:00 WIB - Selesai</time>
            <div className={styles.venueInfo}>
              <span>
                <MapPin size={18} color="#8B7355" />
                Rumah Keluarga
              </span>
              <p>Pdt. Sarmen Steven Samaloisa/Manullang</p>
            </div>
            <button className={styles.actionButton}>
              <MapPin size={18} />
              View Map
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VenueSection