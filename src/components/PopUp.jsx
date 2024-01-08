import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "./PopUp.module.css";
import Button from "./Button";
const PopUp = ({ isOpen, onClose }) => {
  return createPortal(
    <div>
      {isOpen && (
        <div className={styles.background}>
          <div className={`${styles.modal} ${!isOpen ? styles.hidden : ""}`}>
            <h4 className={styles.modal__title}>
              با تشکر از شما بابت شرکت در نظر سنجی
            </h4>
            <Button label={"بستن"} clickHandler={onClose}></Button>
          </div>
        </div>
      )}
    </div>,
    document.getElementById("modal")
  );
};

export default PopUp;
