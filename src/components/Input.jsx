import React from "react";
import styles from "./Input.module.css";
const Input = ({ id, label }) => {
  return (
    <div className={styles.radio__item}>
      <input name={`${id}radio`} id={`${id}${label}`} type="radio" />
      <label htmlFor={`${id}${label}`}>{label}</label>
    </div>
  );
};

export default Input;
