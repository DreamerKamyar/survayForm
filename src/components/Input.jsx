import React from "react";
import styles from "./Input.module.css";
const Input = ({ id, label, setActive, isActive }) => {
  const inputActivehandler = (event) => {
    console.log(event.target);
    setActive(parseFloat(event.target.id));
  };

  return (
    <div className={styles.radio__item} onClick={inputActivehandler}>
      <input name={`${id}radio`} type="radio" />
      <label
        htmlFor={`${id}`}
        id={id}
        className={`${styles.label} ${
          isActive === parseFloat(id) ? styles.active : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
