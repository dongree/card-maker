import React, { memo } from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = memo(({ card }) => {
  const { name, nationality, age, message, theme, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img src={url} alt="profile" className={styles.image} />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.club}>{theme}</p>
        <p className={styles.nationality}>Nationality : {nationality}</p>
        <p className={styles.age}>Age : {age}</p>
        <p className={styles.message}>{message}</p>
      </div>
      <img src={getClubImage(theme)} alt="club" className={styles.clubImage} />
    </li>
  );
});

function getClubImage(theme) {
  switch (theme) {
    case 'Arsenal':
      return '/images/arsenal.png';
    case 'Chelsea':
      return '/images/chelsea.png';
    case 'Liverpool':
      return '/images/liverpool.png';
    case 'ManUtd':
      return '/images/manutd.png';
    case 'ManCity':
      return '/images/mancity.png';
    case 'Tottenham':
      return '/images/tottenham.png';
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

function getStyles(theme) {
  switch (theme) {
    case 'Arsenal':
      return styles.arsenal;
    case 'Chelsea':
      return styles.chelsea;
    case 'Liverpool':
      return styles.liverpool;
    case 'ManUtd':
      return styles.manutd;
    case 'ManCity':
      return styles.mancity;
    case 'Tottenham':
      return styles.tottenham;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
