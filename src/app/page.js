import Image from 'next/image';
import styles from './page.module.css';
import MusicWidget from '@/components/MusicWidget';
import Scripture from '@/components/Scripture';
import GiftSection from '@/components/GiftSection';
import WishesSection from '@/components/WishesSection';
import VenueSection from '@/components/VenueSection';
import FamilySection from '@/components/FamilySection';
import ScrollObserver from '@/components/ScrollObserver';

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
              Pernikahan kami
            </p>
          </div>
        </div>
      </section>

      <ScrollObserver>
        <FamilySection />
      </ScrollObserver>

      <ScrollObserver>
        <VenueSection />
      </ScrollObserver>

      <ScrollObserver>
        <WishesSection />
      </ScrollObserver>

      <ScrollObserver>
        <GiftSection />
      </ScrollObserver>

      <ScrollObserver>
        <Scripture />
      </ScrollObserver>
      
      <MusicWidget />
      
      <footer className={`${styles.footer} text-xs text-gray-500`}>
        Powered by{' '}
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