// Create a new file: components/ScrollObserver.js
'use client';
import { useEffect, useRef } from 'react';
import styles from '../app/page.module.css';

export default function ScrollObserver({ children, threshold = 0.1 }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.sectionVisible);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [threshold]);

  return (
    <div ref={sectionRef} className={styles.sectionHidden}>
      {children}
    </div>
  );
}