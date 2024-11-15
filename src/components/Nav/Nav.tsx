"use client";

import Image from "next/image";
import styles from "./nav.module.css";
import React, { useState } from 'react';
import { useAppSelector } from "@/store/store";
import Link from "next/link";

export const Nav: React.FC = () => {
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);
  const isAuth = useAppSelector((state) => state.user.user);

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
      {isMenuVisible && (
        <div className={`${styles.navMenu} ${isMenuVisible ? styles.showMenu : ''}`}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href="/tracks" className={styles.menuLink}>Главное</Link>
          </li>
          {isAuth && (
            <li className={styles.menuItem}>
            <Link href="/tracks/favorite" className={styles.menuLink}>Мой плейлист</Link>
          </li>
          )}
          {!isAuth && (
             <li className={styles.menuItem}>
             <Link href="/SignIn" className={styles.menuLink}>Войти</Link>
           </li>
          )}        
        </ul>
      </div>
       )}
    </nav>
  );
};
