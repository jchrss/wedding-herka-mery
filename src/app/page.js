import Image from 'next/image';
import styles from './page.module.css';
import MusicWidget from '@/components/MusicWidget';
import Scripture from '@/components/Scripture';
import WishesSection from '@/components/WishesSection';
import VenueSection from '@/components/VenueSection';
import FamilySection from '@/components/FamilySection';
import LoveStorySection from '@/components/LoveStorySection';
import ScrollObserver from '@/components/ScrollObserver';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <span className={styles.date}>Oktober 04, 2026</span>
            <div className={styles.divider}></div>
            <h1 className={styles.names}>
              <span className={styles.nameSpan}>Herkanusya Kadalolor, S.I.P</span>
              <span className={styles.and}>&</span>
              <span className={styles.nameSpan}>Meri Elina Samaloisa, S.I.P</span>
            </h1>
            <div className={styles.divider}></div>
            <br></br>
            <p className={styles.invitation}>
              Dengan Hormat dan Dengan penuh rasa syukur atas kasih Tuhan Yesus&nbsp;
              <br className={styles.breakMobile} />
              kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri&nbsp;
              <br className={styles.breakMobile} />
              Pernikahan kami
            </p>
          </div>
        </div>
      </section>

      <ScrollObserver>
        <FamilySection />
      </ScrollObserver>

      <ScrollObserver>
        <LoveStorySection />
      </ScrollObserver>

      <ScrollObserver>
        <VenueSection />
      </ScrollObserver>

      <ScrollObserver>
        <WishesSection />
      </ScrollObserver>

      <ScrollObserver>
        <Scripture />
      </ScrollObserver>
      
      <MusicWidget />
      
      <footer className={`${styles.footer} text-xs text-gray-500`}>
        Designed by{' '}
        <Image 
          src="/favico.ico" 
          alt="favicon" 
          width={20} 
          height={20} 
          className="inline-block mx-1"
        />{' '}
        Ourstories
      </footer>
    </div>
  );
}