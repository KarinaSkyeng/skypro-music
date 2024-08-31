"use client";

import Image from "next/image";
import styles from "./nav.module.css";
import React, { useState } from 'react';

export const Nav: React.FC = () => {
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image className={styles.logoImage} src="/img/logo.png" alt="logo" width={250} height={170} />
      </div>
      <div className={styles.navBurger} onClick={toggleMenu}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div className={`${styles.navMenu} ${isMenuVisible ? styles.showMenu : ''}`}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>Главное</a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>Мой плейлист</a>
          </li>
          <li className={styles.menuItem}>
            <a href="../signin.html" className={styles.menuLink}>Войти</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
