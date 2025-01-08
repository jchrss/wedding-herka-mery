"use client"

import { useState, useEffect } from 'react'
import styles from '../app/styles/WishesSection.module.css'
import { MessageSquare, Send } from 'lucide-react'
import { supabase } from '../app/lib/supabase'

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

  useEffect(() => {
    loadWishes()
    setupRealtimeSubscription()
  }, [])

  const loadWishes = async () => {
    try {
      const { data, error } = await supabase
        .from('wishes')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setWishes(data)
    } catch (error) {
      console.error('Error loading wishes:', error)
    } finally {
      setLoading(false)
    }
  }

  const setupRealtimeSubscription = () => {
    const channel = supabase
      .channel('wishes_db_changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'wishes'
        },
        (payload) => {
          setWishes(currentWishes => [payload.new, ...currentWishes])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      const { data, error } = await supabase
        .from('wishes')
        .insert([{
          nama: formData.nama,
          ucapan: formData.ucapan,
          kehadiran: formData.kehadiran
        }])
        .select()
        .single()

      if (error) throw error

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

  if (loading) {
    return <div className={styles.loading}>Loading wishes...</div>
  }

  return (
    <section className={styles.wishesSection}>
      <div className={styles.wishesContent}>
        <h2 className={styles.sectionTitle}>Ucapan & Doa</h2>
        
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
                <Send size={16} />
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
              <MessageSquare size={24} />
              <h3>Ucapan ({wishes.length})</h3>
            </div>
            <div className={styles.wishesList}>
              {wishes.map((wish) => (
                <div key={wish.id} className={styles.wishCard}>
                  <div className={styles.wishHeader}>
                    <h4>{wish.nama}</h4>
                  </div>
                  <p className={styles.wishMessage}>{wish.ucapan}</p>
                  <span className={styles.wishDate}>
                    {new Date(wish.created_at).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
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