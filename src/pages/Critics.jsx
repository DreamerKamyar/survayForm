import React from "react";
import styles from "./Critics.module.css";
import Button from "../components/Button";
import { useState } from "react";
const Critics = () => {
  const [textInput, setTextInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted:", textInput);
  };
  return (
    <div className={styles.ciritcs__container}>
      <form onSubmit={handleSubmit} className={styles.form__container}>
        <div className={styles.paper}>
          <div className={styles.hole__contianer}>
            <div className={styles.holes}></div>
          </div>
          <textarea
            placeholder="نظرات و پیشنهادات خودرا بنویسید و ان را برای ما ارسال کنید "
            onChange={(event) => setTextInput(event.target.value)}
          ></textarea>
        </div>
        <button type="submit" className={styles.form__btn}>
          ارسال نظرات
        </button>
      </form>
      <Button
        link={"/"}
        label={"go back"}
        style={{
          fontSize: "1.1rem",
          padding: "0.5rem 2rem",
          position: "fixed",
          top: "4%",
          left: "min(6% , 50px)",
        }}
      ></Button>
    </div>
  );
};

export default Critics;
