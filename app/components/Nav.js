'use client';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import styles from './style.module.css';
import { Link } from 'next-view-transitions';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.wrapper}>
        <ThemeSwitch className={styles.name} />
        <span className={styles.arrowNav}></span>
        <p className={styles.title}>Software Engineer</p>
        <div className={styles.homeButton}>
          <span className={styles.arrow}></span>
          <Link href="/" passHref>
            <p className={styles.home}>HOME</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
