'use client';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import styles from './style.module.css';
import { TransitionLink } from './TransitionLink';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.wrapper}>
        <ThemeSwitch className={styles.name} />
        <span className={styles.arrowNav}></span>
        <p className={styles.title}>Software Engineer</p>
        <div className={styles.homeButton}>
          <span className={styles.arrow}></span>
          <TransitionLink href="/" overlayText="Home" passHref>
            <p className={styles.home}>HOME</p>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
