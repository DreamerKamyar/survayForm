import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";
const Button = ({ link, label }) => {
  return (
    <Link to={link} className={styles.link__link}>
      {label}
    </Link>
  );
};

export default Button;
