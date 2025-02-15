import React from "react";
import styles from "./card.module.css"; // Import CSS for styling

const Card = ({ img, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
