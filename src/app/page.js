import styles from './page.module.css';
import MusicWidget from '@/components/MusicWidget';
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
            <span className={styles.eyebrow}>The Wedding Of</span>
            <h1 className={styles.names}>
              <span className={styles.nameSpan}>Herkanusya Kadalolor</span>
              <span className={styles.and}>&amp;</span>
              <span className={styles.nameSpan}>Meri Elina Samaloisa</span>
            </h1>
            <div className={styles.divider}></div>
            <span className={styles.date}>Oktober 04, 2026</span>
            <p className={styles.invitation}>
              Dengan hormat dan penuh syukur atas kasih Tuhan Yesus,&nbsp;
              <br className={styles.breakMobile} />
              kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri&nbsp;
              <br className={styles.breakMobile} />
              pernikahan kami
            </p>
          </div>
          <div className={styles.scrollCue}>
            <span />
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

      <MusicWidget />
    </div>
  );
}
