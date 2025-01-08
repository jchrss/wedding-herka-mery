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
          <div className={styles.imageWrapper}>
            <Image 
              src={coupleDetails.couple.image}
              alt="The Happy Couple"
              fill
              className={styles.coupleImage}
              priority
              sizes="(max-width: 768px) 100vw, 1000px"
            />
          </div>
        </div>

        <div className={styles.coupleGrid}>
          {/* Names Section */}
          <div className={styles.namesContainer}>
            {/* Groom's Name */}
            <div className={styles.nameSection}>
              <h2 className={styles.nickname}>
                {coupleDetails.groom.nickname}
              </h2>
              <div className={styles.separator} />
              <h3 className={styles.fullName}>
                {coupleDetails.groom.name}
              </h3>
            </div>

            {/* Bride's Name */}
            <div className={styles.nameSection}>
              <h2 className={styles.nickname}>
                {coupleDetails.bride.nickname}
              </h2>
              <div className={styles.separator} />
              <h3 className={styles.fullName}>
                {coupleDetails.bride.name}
              </h3>
            </div>
          </div>

          {/* Parents Information Section */}
          <div className={styles.parentsContainer}>
            {/* Parents Labels */}
            <div className={styles.parentLabels}>
              <span>The Son of:</span>
              <span>The Daughter of:</span>
            </div>
            
            {/* Fathers */}
            <div className={styles.parentRow}>
              <div className={styles.parentInfo}>
                <p>{coupleDetails.groom.parents.father}</p>
              </div>
              <div className={styles.parentInfo}>
                <p>{coupleDetails.bride.parents.father}</p>
              </div>
            </div>

            {/* Separator */}
            <div className={styles.parentRow}>
              <div className={styles.parentInfo}>
                <span className={styles.andSymbol}>&</span>
              </div>
              <div className={styles.parentInfo}>
                <span className={styles.andSymbol}>&</span>
              </div>
            </div>

            {/* Mothers */}
            <div className={styles.parentRow}>
              <div className={styles.parentInfo}>
                <p>{coupleDetails.groom.parents.mother}</p>
              </div>
              <div className={styles.parentInfo}>
                <p>{coupleDetails.bride.parents.mother}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialLinksContainer}>
              <a 
                href={`https://instagram.com/${coupleDetails.groom.instagram}`}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </a>
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