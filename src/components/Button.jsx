import React from "react";
import styles from "./Button.module.css";
const Button = ({ label, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={styles.btn}>
      {label}
    </button>
  );
};

export default Button;
