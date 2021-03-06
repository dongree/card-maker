import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onLogout }) => (
  <header className={styles.header}>
    {onLogout && (
      <button className={styles.logout} onClick={onLogout}>
        Logout
      </button>
    )}
    <img
      src="./images/premier_league_logo.png"
      alt="logo"
      className={styles.logo}
    />
    <h1 className={styles.title}>EPL Card Maker</h1>
  </header>
));

export default Header;
