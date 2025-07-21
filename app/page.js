import Image from "next/image";
import styles from "./page.module.css";
import Partners from "./components/Partners";
import CartSidebar from "../app/components/CartSidebar";
import Link from 'next/link';


export default function Home() {
  const cartItemCount = 3;
    const cartItems = [
    { name: "Filtre à huile", quantity: 2, price: 30 },
    { name: "Disque de frein", quantity: 1, price: 80 }
  ];

  return (
    <>
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Image src="/GPA/gpalogo.png" alt="GPA Logo" width={70} height={50} />
      </div>
      <nav className={styles.centerNav}>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/catalogue">Catalogue</Link></li>
        <li><Link href="/a-propos">À propos</Link></li>
        <li><Link href="/contact">Contact</Link></li>

        </nav>

      <div className={styles.rightSection}>
        <div className={styles.searchContainer}>
          <Image src="/GPA/search.jpg" alt="search icon" width={18} height={18} className={styles.searchIcon} />
          <input type="search" placeholder="Rechercher..." className={styles.searchInput} />
        </div>
    <CartSidebar cartItems={cartItems} />

     </div>
   </header>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.overlay}>
            <div className={styles.heroContent}>
              <h1>
                Pièces Automobiles Lourdes
              </h1>
              <p>Votre partenaire de confiance pour toutes vos pièces de camions lourds. Qualité professionnelle, livraison rapide.</p>
              <button className={styles.cta}>Voir le catalogue</button>
            </div>
          </div>
        </section>

        <section className={styles.engagements}>
          <div className={styles.engagementsList}>
            <div className={styles.engagementCard}>
              <Image src="/GPA/liv.png" alt="Livraison" width={50} height={50} />
              <h3>Livraison Rapide</h3>
              <p>Livraison express pour vos pièces urgentes</p>
            </div>
            <div className={styles.engagementCard}>
              <Image src="/GPA/q2.png" alt="Qualité" width={50} height={50} />
              <h3>Qualité Garantie</h3>
              <p>Pièces certifiées et garanties constructeur</p>
            </div>
            <div className={styles.engagementCard}>
              <Image src="/GPA/24.png" alt="Service" width={50} height={50} />
              <h3>Service 24/7</h3>
              <p>Support technique disponible en permanence</p>
            </div>
          </div>
        </section>

        <section className={styles.helpSection}>
          <h2>Besoin d'aide pour trouver la bonne pièce ?</h2>
          <p>Notre équipe d'experts est là pour vous conseiller et vous aider à trouver exactement ce dont vous avez besoin.</p>
          <div className={styles.ctaGroup}>
            <button className={styles.cta}>Nous appeler</button>
            <button className={styles.ctaDisabled}>Demander un devis</button>
          </div>
        </section>
        <Partners />

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerColumn}>
              <h4>HeavyParts</h4>
              <p>Votre spécialiste en pièces détachées pour véhicules lourds depuis 2003.</p>
            </div>
            <div className={styles.footerColumn}>
              <h4>Navigation</h4>
              <ul>
                <li>Accueil</li>
                <li>Catalogue</li>
                <li>À propos</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>Catégories</h4>
              <ul>
                <li>Moteur</li>
                <li>Freinage</li>
                <li>Transmission</li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>Contact</h4>
              <p>+33 4 78 XX XX XX</p>
              <p>contact@heavyparts.fr</p>
              <p>123 Rue de l'Industrie, 69000 Lyon</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2024 HeavyParts. Tous droits réservés.</p>
          </div>
        </footer>
      </div>
     </>
  
  );
}


