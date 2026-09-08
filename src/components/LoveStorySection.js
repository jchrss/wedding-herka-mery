import Image from 'next/image';
import styles from '../app/styles/LoveStorySection.module.css';

const story = [
  {
    year: '2019',
    image: '/asset/story-2019.jpg',
    paragraphs: [
      ['STPMD Yogyakarta. Sosialisasi internal kampus.', 'Aku panitia. Dia maba.', 'Berpapasan tanpa sapa.', 'Cuek. Biasa.', 'Dua garis sejajar yang tak pernah terbayang akan bertemu.'],
      ['Dua makrab di tahun yang sama mempertemukan.', 'Entah kebetulan atau skenario langit.', 'Dari asing, jadi dekat.', 'Dari cuek, jadi lihat—dengan cara berbeda.', 'Tatapan kosong berubah bisik.', 'Senyum basa-basi berubah hangat.'],
      ['Kami sadar:', '"Asam di gunung, asin di laut, bertemu dalam satu belanga."', 'Bukan pertemuan biasa. Ini takdir.', 'Dua kepala keras belajar lembut.', 'Dua hati ragu mulai percaya.'],
    ],
  },
  {
    year: '2020',
    image: '/asset/story-2020.jpg',
    paragraphs: [
      ['PDKT berbulan-bulan. Sampai berganti tahun.', 'Sabar diuji. Rasa ditempa.', 'Pesan. Tawa. Rindu.', 'Semua jadi batu loncatan menuju ikatan.'],
      ['11 Januari—status berganti.', 'Bukan teman. Tapi pacar.', 'Satu kata. Mengubah segalanya.'],
    ],
  },
  {
    year: '2021 — 2022',
    image: null,
    paragraphs: [
      ['Dua tahun berlalu dengan tenang.', 'Kami sibuk dengan dunianya masing-masing.', 'Tapi tetap saling di ujung doa.', 'Lancar. Tanpa masalah.', 'Cukup saling percaya dan memberi ruang.'],
    ],
  },
  {
    year: '2023',
    image: '/asset/story-2023.jpg',
    paragraphs: [
      ['Wisudah mempertemukan dua keluarga.', 'Semi lamaran. Komitmen serius antar dua rumah.'],
    ],
  },
  {
    year: '2024 — 2025',
    image: '/asset/story-2024.jpg',
    paragraphs: [
      ['Jarak memisahkan.', 'Long distance relationship.', 'Rindu jadi makanan sehari-hari.', 'Percaya jadi pondasi.'],
    ],
  },
  {
    year: '2026',
    label: 'Menikah',
    image: '/asset/couple-formal.jpg',
    paragraphs: [
      ['Lama? Ya.', 'Tapi kami masih di sini.', 'Hampir 7 tahun.'],
      ['Cinta tak selalu tentang awal yang indah.', 'Tapi tentang bertahan saat badai datang.', 'Dan kami buktikan—', 'kami akan resmi menjadi satu menjadi suami dan istri.', 'Dalam ikatan suci yang diberkati.'],
    ],
  },
];

const LoveStorySection = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyHeader}>
        <span className={styles.eyebrow}>Story Mereka</span>
        <h2 className={styles.sectionTitle}>Perjalanan Kasih Kami</h2>
      </div>

      <div className={styles.timeline}>
        {story.map((entry, index) => (
          <div
            key={entry.year}
            className={`${styles.timelineItem} ${index % 2 === 1 ? styles.reverse : ''}`}
          >
            <div className={styles.timelineMarker}>
              <span className={styles.timelineDot} />
              {index !== story.length - 1 && <span className={styles.timelineLine} />}
            </div>

            <div className={styles.timelineCard}>
              {entry.image && (
                <div className={styles.timelineImage}>
                  <Image
                    src={entry.image}
                    alt={`Kenangan tahun ${entry.year}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <div className={styles.timelineText}>
                <h3 className={styles.timelineYear}>
                  {entry.year}
                  {entry.label && <span className={styles.timelineLabel}> ({entry.label})</span>}
                </h3>
                {entry.paragraphs.map((lines, pIndex) => (
                  <p key={pIndex} className={styles.timelineParagraph}>
                    {lines.map((line, lIndex) => (
                      <span key={lIndex}>
                        {line}
                        {lIndex !== lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoveStorySection;
