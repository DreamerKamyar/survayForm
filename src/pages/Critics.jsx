import React from "react";
import styles from "./Critics.module.css";
import LinkButton from "../components/LinkButton";
import { useState } from "react";
import RecordAudioVideoPanel from "../components/RecordAudioVideoPanel";
import Button from "../components/Button";
const Critics = () => {
  const [textInput, setTextInput] = useState("");
  const [isRecordingPanelOpen, setIsRecordingPanelOpen] = useState(false);

  const openRecordingPanelHandler = (event) => {
    if (event.target.closest(".panel")) {
      return;
    }
    console.log("test", event.target);
    setIsRecordingPanelOpen(!isRecordingPanelOpen);
  };

  const closePanel = () => {
    setIsRecordingPanelOpen(false);
  };

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
        <div className={styles.form__btns}>
          <Button type="submit" label={"ارسال نظرات"}></Button>
          <Button clickHandler={openRecordingPanelHandler} label={"ظبط فیلم"}>
            open Recording
          </Button>
        </div>
      </form>
      <LinkButton
        link={"/"}
        label={"برگشت"}
        style={{
          fontSize: "1.1rem",
          padding: "0.5rem 2rem",
          position: "fixed",
          top: "4%",
          left: "min(6% , 50px)",
          zIndex: "2000",
        }}
      ></LinkButton>

      {isRecordingPanelOpen ? (
        <div
          className={styles.panel__background}
          onClick={openRecordingPanelHandler}
        >
          <div className={`${styles.panel__container} panel`}>
            <span className={styles.close__btn} onClick={closePanel}></span>
            <RecordAudioVideoPanel></RecordAudioVideoPanel>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Critics;
