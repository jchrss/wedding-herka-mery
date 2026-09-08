"use client"

import { useState, useEffect } from 'react'
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import styles from '../app/styles/WishesSection.module.css'
import { MessageSquare, Send } from 'lucide-react'
import { db, WISHES_COLLECTION } from '../app/lib/firebase'

const WishesSection = () => {
  const [wishes, setWishes] = useState([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    nama: '',
    ucapan: '',
    kehadiran: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Live so a guest sees their own wish, and later ones, without reloading.
  useEffect(() => {
    const wishesQuery = query(
      collection(db, WISHES_COLLECTION),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(
      wishesQuery,
      (snapshot) => {
        setWishes(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        setLoading(false)
      },
      (error) => {
        console.error('Error loading wishes:', error)
        setLoading(false)
      }
    )

    return unsubscribe
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      await addDoc(collection(db, WISHES_COLLECTION), {
        nama: formData.nama,
        ucapan: formData.ucapan,
        kehadiran: formData.kehadiran,
        createdAt: serverTimestamp()
      })

      setSubmitStatus('success')
      setFormData({
        nama: '',
        ucapan: '',
        kehadiran: ''
      })
    } catch (error) {
      console.error('Error submitting wish:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  /*
    serverTimestamp() resolves on the server, so the local echo of a wish that
    was just sent carries a null createdAt for a moment.
  */
  const formatDate = (createdAt) => {
    const date = createdAt?.toDate ? createdAt.toDate() : null
    if (!date) return 'Baru saja'
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section className={styles.wishesSection}>
      <div className={styles.wishesContent}>
        <span className={styles.eyebrow}>Doa Restu</span>
        <h2 className={styles.sectionTitle}>Ucapan &amp; Doa</h2>

        <div className={styles.wishesContainer}>
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit} className={styles.wishForm}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama"
                  value={formData.nama}
                  onChange={(e) => setFormData({...formData, nama: e.target.value})}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="ucapan"
                  placeholder="Tulis ucapan dan doa..."
                  value={formData.ucapan}
                  onChange={(e) => setFormData({...formData, ucapan: e.target.value})}
                  required
                  className={styles.textarea}
                />
              </div>

              <div className={styles.formGroup}>
                <select
                  name="kehadiran"
                  value={formData.kehadiran}
                  onChange={(e) => setFormData({...formData, kehadiran: e.target.value})}
                  required
                  className={styles.select}
                >
                  <option value="">Konfirmasi Kehadiran</option>
                  <option value="Hadir">Hadir</option>
                  <option value="Tidak Hadir">Tidak Hadir</option>
                </select>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                <Send size={16} strokeWidth={1.5} />
                {isSubmitting ? 'Mengirim...' : 'Kirim'}
              </button>

              {submitStatus === 'success' && (
                <p className={styles.successMessage}>Terima kasih atas ucapan Anda!</p>
              )}
              {submitStatus === 'error' && (
                <p className={styles.errorMessage}>Gagal mengirim ucapan. Silakan coba lagi.</p>
              )}
            </form>
          </div>

          <div className={styles.wishesDisplay}>
            <div className={styles.wishesHeader}>
              <MessageSquare size={22} strokeWidth={1.5} />
              <h3>Ucapan ({wishes.length})</h3>
            </div>
            <div className={styles.wishesList}>
              {loading && <p className={styles.wishMessage}>Memuat ucapan...</p>}
              {!loading && wishes.length === 0 && (
                <p className={styles.wishMessage}>
                  Belum ada ucapan. Jadilah yang pertama memberi doa restu.
                </p>
              )}
              {wishes.map((wish) => (
                <div key={wish.id} className={styles.wishCard}>
                  <div className={styles.wishHeader}>
                    <h4>{wish.nama}</h4>
                  </div>
                  <p className={styles.wishMessage}>{wish.ucapan}</p>
                  <span className={styles.wishDate}>{formatDate(wish.createdAt)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WishesSection
