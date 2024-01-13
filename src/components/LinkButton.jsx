import React from "react";
import styles from "./LinkButton.module.css";

const LinkButton = ({ link, label, style }) => {
  return (
    <a style={style} className={styles.link__link}>
      {label}
    </a>
  );
};

export default LinkButton;
