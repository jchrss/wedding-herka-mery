import React from 'react';
import styles from '../app/styles/Scripture.module.css';
import Image from 'next/image';

const Scripture = () => {
  return (
    <section className={styles.scriptureSection}>
      <div className={styles.watercolorBg} />
      <Image 
        src="/asset/leaf-decoration.png" 
        alt="" 
        className={styles.leafLeft}
        width={150}
        height={200}
      />
      <Image 
        src="/asset/leaf-decoration.png" 
        alt="" 
        className={styles.leafRight}
        width={150}
        height={200}
      />
      
      <div className={styles.scriptureContainer}>
        <div className={styles.doveContainer}>
          <Image 
            src="/asset/doves-rings.png"
            alt="Doves with wedding rings"
            width={200}
            height={80}
            layout="responsive"
          />
        </div>

        <div className={styles.quoteContainer}>
          {/* First Quote */}
          <div>
            <p className={styles.quote}>
              &quot;Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.&quot;
            </p>
            <p className={styles.reference}>
              Matius 19:6 (TB)
            </p>
          </div>

          {/* Personal Reflection */}
          <div className={styles.reflection}>
            <p className={styles.reflectionText}>
              Setiap orang memiliki rancangan dalam hidupnya,
              tetapi rancangan TUHAN jauh lebih indah
              dari apa yang kita rancangan.
            </p>
            <p className={styles.reflectionText}>
              Sungguh menemukan dirimu bukanlah suatu kebetulan
              melainkan Anugerah TUHAN yang terindah
              dan Dia yang telah mempersatukan kita,
              untuk mengarungi bahtera rumah tangga
              yang akan selalu melengkapi, menopang,
              serta mengasihi didalam Kristus
              dan menjadi berkat bagi orang lain untuk mencapai
              panggilan hidup kita.
            </p>
          </div>

          {/* Second Quote */}
          <div>
            <p className={styles.quote}>
              &quot;Sebab rancangan-Ku bukanlah rancanganmu, dan jalanmu bukanlah jalan-Ku, demikianlah firman TUHAN. Seperti tingginya langit dari bumi, demikianlah tingginya jalan-Ku dari jalanmu dan rancangan-Ku dari rancanganmu.&quot;
            </p>
            <p className={styles.reference}>
              Yesaya 55:8-9 (TB)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scripture;