import React from "react";
import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom";
const LinkButton = ({ link, label, style }) => {
  return (
    <Link to={link} style={style} className={styles.link__link}>
      {label}
    </Link>
  );
};

export default LinkButton;
