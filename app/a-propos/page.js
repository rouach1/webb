import Image from "next/image";
import Link from "next/link";
import CartSidebar from "../components/CartSidebar"; // adjust path if needed
import styles from "./a-propos.module.css";

const cartItems = [
  { name: "Filtre à huile", quantity: 2, price: 30 },
  // Add your other cart items here if needed
];

export default function AProposPage() {
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
            <Image
              src="/GPA/search.jpg"
              alt="search icon"
              width={18}
              height={18}
              className={styles.searchIcon}
            />
            <input
              type="search"
              placeholder="Rechercher..."
              className={styles.searchInput}
            />
          </div>
          <CartSidebar cartItems={cartItems} />
        </div>
      </header>

    <main className={styles.main}>
      <section className={styles.intro}>
        <h1 className={styles.title}>Bienvenue chez GPA</h1>
        <p className={styles.text}>
          Depuis plus de 20 ans, GPA est un acteur majeur dans la distribution de pièces
          détachées pour poids lourds en Tunisie. Notre mission est simple : offrir des
          produits fiables, un service rapide et une expertise reconnue.
        </p>
      </section>

      <section className={styles.brands}>
        <h2 className={styles.subtitle}>Nos spécialités</h2>
        <p className={styles.text}>
          Nous fournissons des pièces de rechange pour les marques les plus réputées :
          <strong> Volvo, Scania, Mercedes-Benz, MAN, DAF, Iveco</strong> et
          <strong> Renault Trucks</strong>.
        </p>
      </section>

      <section className={styles.advantages}>
        <h2 className={styles.subtitle}>Pourquoi choisir GPA ?</h2>
        <ul className={styles.list}>
          <li>📦 Plus de 2000 références disponibles immédiatement</li>
          <li>🚚 Livraison rapide partout en Tunisie</li>
          <li>🛠 Service après-vente professionnel</li>
          <li>🤝 Partenaire de confiance pour les garages et flottes</li>
          <li>💰 Des prix justes et transparents</li>
        </ul>
      </section>

      <section className={styles.commitment}>
        <h2 className={styles.subtitle}>Notre engagement</h2>
        <p className={styles.text}>
          Chez GPA, chaque client compte. Nous mettons un point d’honneur à garantir la
          satisfaction de nos partenaires, en proposant un accompagnement technique,
          des conseils personnalisés et une relation basée sur la confiance.
        </p>
      </section>
    </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h4>HeavyParts</h4>
            <p>Votre spécialiste en pièces détachées pour véhicules lourds depuis 2003.</p>
          </div>
          <div className={styles.footerColumn}>
            <h4>Navigation</h4>
            {/* Wrap footer nav items in ul */}
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
    </>
  );
}

