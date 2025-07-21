"use client"; // <-- This must be the very first line

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CartSidebar.module.css';

// your component code...

const CartSidebar = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  const cartItemCount = cartItems.length;

  return (
    <>
      {/* Cart Icon */}
      <div className={styles.cart} onClick={toggleCart}>
        <Image src="/GPA/carrttt.png" alt="Panier" width={30} height={30} />
        {cartItemCount > 0 && <span className={styles.cartCount}>{cartItemCount}</span>}
      </div>

      {/* Overlay + Sidebar */}
      <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`} onClick={toggleCart}></div>

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <h2>Mon Panier</h2>
          <button className={styles.closeButton} onClick={toggleCart}>×</button>
        </div>
        <div className={styles.cartContent}>
          {cartItems.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className={styles.cartItem}>
                <span>{item.name}</span>
                <span>{item.quantity} x {item.price} DT</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
