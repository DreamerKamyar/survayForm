import React from "react";
import { useState } from "react";
import Button from "./Button";
import styles from "./SendComponent.module.css";
import PopUp from "./PopUp";
const SendComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={styles.container}>
      <Button label={"ارسال نظرات"} clickHandler={openModalHandler}></Button>
      {isModalOpen && (
        <PopUp isOpen={isModalOpen} onClose={openModalHandler}></PopUp>
      )}
    </div>
  );
};

export default SendComponent;
