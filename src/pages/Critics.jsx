import React from "react";
import styles from "./Critics.module.css";
import LinkButton from "../components/LinkButton";
import { useState } from "react";
import RecordAudioVideoPanel from "../components/RecordAudioVideoPanel";
import Button from "../components/Button";
import { motion } from "framer-motion";
import PopUp from "../components/PopUp";
const Critics = () => {
  const [textInput, setTextInput] = useState("");
  const [isRecordingPanelOpen, setIsRecordingPanelOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
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
    <motion.div
      className={styles.ciritcs__container}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{
        duration: 0.5,
      }}
    >
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
          <Button
            type="submit"
            label={"ارسال نظرات"}
            clickHandler={openModalHandler}
          ></Button>
          <Button clickHandler={openRecordingPanelHandler} label={"ظبط فیلم"}>
            open Recording
          </Button>
        </div>
      </form>

      {isModalOpen && (
        <PopUp isOpen={isModalOpen} onClose={openModalHandler}></PopUp>
      )}
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
    </motion.div>
  );
};

export default Critics;
