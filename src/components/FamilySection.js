import Image from 'next/image';
import styles from '../app/styles/FamilySection.module.css';

const FamilySection = () => {
  const coupleDetails = {
    couple: {
      image: "/asset/couple-close.jpg",
    },
    groom: {
      name: "Worili Herkanusya Kadalolor, S.I.P",
      nickname: "Herka",
      birthOrder: "Anak Ke-4",
      parents: {
        father: { name: "Bapak Emeritus Karel Kadalolor", passedAway: false },
        mother: { name: "Ibu Yermina M. Larwuy", passedAway: false }
      }
    },
    bride: {
      name: "Meri Elina Samaloisa, S.I.P",
      nickname: "Meri",
      birthOrder: "Anak Ke-4",
      parents: {
        father: { name: "Bapak Maruli Samaloisa", passedAway: false },
        mother: { name: "Ibu Token", passedAway: true }
      }
    }
  };

  const renderParentName = (parent) => {
    return parent.passedAway ? (
      <>
        {parent.name} <span>(</span><span>&#10014;</span><span>)</span>
      </>
    ) : (
      parent.name
    );
  };

  return (
    <section className={styles.familySection}>
      <div className={styles.watercolorBg} />

      <div className={styles.imageSection}>
        <Image
          src={coupleDetails.couple.image}
          alt="The Happy Couple"
          fill
          className={styles.coupleImage}
          priority
          sizes="100vw"
        />
      </div>

      <div className={styles.contentSection}>
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
              <span>{coupleDetails.groom.birthOrder} dari pasangan</span>
              <span>{coupleDetails.bride.birthOrder} dari pasangan</span>
            </div>

            {/* Parents Grid */}
            <div className={styles.parentRow}>
              <div className={styles.parentInfo}>
                <p>{renderParentName(coupleDetails.groom.parents.father)}</p>
                <span className={styles.andSymbol}>&</span>
                <p>{renderParentName(coupleDetails.groom.parents.mother)}</p>
              </div>
              <div className={styles.parentInfo}>
                <p>{renderParentName(coupleDetails.bride.parents.father)}</p>
                <span className={styles.andSymbol}>&</span>
                <p>{renderParentName(coupleDetails.bride.parents.mother)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;
