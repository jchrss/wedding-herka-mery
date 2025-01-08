// FamilySection.js
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import styles from '../app/styles/FamilySection.module.css';

const FamilySection = () => {
  const coupleDetails = {
    couple: {
      image: "/asset/2.jpg",
    },
    groom: {
      name: "Franky Edward Samaloisa/Manullang",
      nickname: "Franky",
      parents: {
        father: "Pdt. Sarmen Steven Samaloisa/Manullang",
        mother: "Ny. Mastauliyani Br.Marbun"
      },
      instagram: "@groomhandle"
    },
    bride: {
      name: "Juli Meri Eni Sababalat, S.Pd",
      nickname: "Juli",
      parents: {
        father: "Horas Sababalat",
        mother: "Ny. Nonnik Sapalakkai"
      },
      instagram: "@bridehandle"
    }
  };

  return (
    <section className={styles.familySection}>
      <div className={styles.watercolorBg} />
      
      <div className={styles.container}>
        <div className={styles.coupleImageContainer}>
          <Image 
            src={coupleDetails.couple.image}
            alt="The Happy Couple"
            fill
            className={styles.coupleImage}
            priority
          />
        </div>

        <div className={styles.coupleGrid}>
          {/* Groom's Side */}
          <div className={styles.personCard}>
            <h2 className={styles.nickname}>
              {coupleDetails.groom.nickname}
            </h2>
            <div className={styles.separator} />
            <h3 className={styles.fullName}>
              {coupleDetails.groom.name}
            </h3>
            
            <div className={styles.parentInfo}>
              <p className={styles.label}>
                The Son of:
              </p>
              <div className={styles.parents}>
                <p>{coupleDetails.groom.parents.father}</p>
                <span>&</span>
                <p>{coupleDetails.groom.parents.mother}</p>
              </div>
              <a 
                href={`https://instagram.com/${coupleDetails.groom.instagram}`}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Bride's Side */}
          <div className={styles.personCard}>
            <h2 className={styles.nickname}>
              {coupleDetails.bride.nickname}
            </h2>
            <div className={styles.separator} />
            <h3 className={styles.fullName}>
              {coupleDetails.bride.name}
            </h3>
            
            <div className={styles.parentInfo}>
              <p className={styles.label}>
                The Daughter of:
              </p>
              <div className={styles.parents}>
                <p>{coupleDetails.bride.parents.father}</p>
                <span>&</span>
                <p>{coupleDetails.bride.parents.mother}</p>
              </div>
              <a 
                href={`https://instagram.com/${coupleDetails.bride.instagram}`}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;