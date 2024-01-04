import React from "react";
import { useState } from "react";
import RecordAudio from "./RecordAudio";
import RecordVideo from "./RecordVideo";
import styles from "./RecordAudioVideoPanel.module.css";
import Button from "./Button";
const RecordAudioVideoPanel = () => {
  let [recordOption, setRecordOption] = useState("video");
  const toggleRecordOption = (type) => {
    return () => {
      setRecordOption(type);
    };
  };
  return (
    <div className={styles.panel__container}>
      <h4 className={styles.panel__title}>
        برای ما صدای و ویدیو خود را بفرستید
      </h4>
      <div className={styles.panel__btns}>
        <Button
          clickHandler={toggleRecordOption("video")}
          label={"ضبط ویدیو"}
        ></Button>
        <Button clickHandler={toggleRecordOption("audio")} label={" ضبط صدا"}>
          Record Audio
        </Button>
      </div>
      <div className={styles.panel__result}>
        {recordOption === "video" ? <RecordVideo /> : <RecordAudio />}
      </div>
    </div>
  );
};

export default RecordAudioVideoPanel;
