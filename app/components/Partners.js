"use client";

import { useState, useEffect } from "react";
import styles from "./Partners.module.css";
import Image from "next/image";


const partners = [
  "/GPA/dacia.png",
  "/GPA/fiat.jpg",
  "/GPA/golf.jpg",
  "/GPA/huanda.png",
  "/GPA/mercedes.jpg",
  "/GPA/reno.jpg",
  "/GPA/skoda.png",
  "/GPA/volvo.jpg",
];

export default function Partners() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex + 1 >= partners.length ? 0 : prevIndex + 1
      );
    }, 1000); // slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const visiblePartners = partners.slice(startIndex, startIndex + visibleCount);

  // handle wrap-around
  const displayPartners =
    visiblePartners.length < visibleCount
      ? [...visiblePartners, ...partners.slice(0, visibleCount - visiblePartners.length)]
      : visiblePartners;

  return (
    <section className={styles.partnersSection}>
      <h2 className={styles.title}>NOS PARTENAIRES</h2>
      <div className={styles.slider}>
        {displayPartners.map((src) => (
          <Image
          
          src={src}
          alt={`logo`}
          width={100}
          height={60}
          className={styles.partnerImage}
          />
        ))}

      </div>
    </section>
  );
}

