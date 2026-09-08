import Image from 'next/image';
import styles from '../app/styles/GallerySection.module.css';

/*
  Natural aspect ratios are kept rather than square-cropped -- the studio
  portraits are 2:3 and the candid frames 3:2, and cropping them to a uniform
  grid cuts faces out of the wider ones.
*/
const PHOTOS = [
  { src: '/asset/gallery-1.jpg', width: 1600, height: 1066, alt: 'Herka dan Meri bergandengan tangan' },
  { src: '/asset/gallery-3.jpg', width: 854, height: 1280, alt: 'Herka dan Meri dalam busana biru' },
  { src: '/asset/gallery-4.jpg', width: 854, height: 1280, alt: 'Herka dan Meri dalam busana adat' },
  { src: '/asset/gallery-2.jpg', width: 1600, height: 1066, alt: 'Herka dan Meri saling tersenyum' },
  { src: '/asset/gallery-5.jpg', width: 854, height: 1280, alt: 'Herka dan Meri dalam busana adat' },
  { src: '/asset/couple-red.jpg', width: 2730, height: 4095, alt: 'Herka dan Meri berbusana putih' },
];

const GallerySection = () => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Moments</span>
        <h2 className={styles.sectionTitle}>Our Gallery</h2>
      </div>

      <div className={styles.grid}>
        {PHOTOS.map((photo) => (
          <figure key={photo.src} className={styles.item}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 320px"
              className={styles.photo}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
