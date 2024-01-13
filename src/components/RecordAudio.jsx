import React from "react";
import { useState, useRef } from "react";
import styles from "./RecordAudio.module.css";
import Button from "./Button";
const RecordAudio = () => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);

  const mimeType = "audio/webm";
  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err);
      }
    } else {
      alert("the mediaRecorder api is not supported in your browser");
    }
  };
  const startRecording = async () => {
    setRecordingStatus("recording");
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { type: mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };
  const stopRecording = () => {
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
    };
  };

  const sendAudioHandler = () => {
    console.log("sending autio");
  };
  return (
    <div className={styles.audio__container}>
      <h4 className={styles.audio__title}>
        صدای خودرا ضبط کرده و برای ما بفرستید
      </h4>
      <main className={styles.audio__controls}>
        <div>
          {!permission ? (
            <Button
              clickHandler={getMicrophonePermission}
              label={"اجازه ضبط"}
              className={styles.test}
              type="button"
            >
              Get Microphone
            </Button>
          ) : null}
          {permission && recordingStatus === "inactive" ? (
            <Button clickHandler={startRecording} label={"شروع "} type="button">
              Start Recording
            </Button>
          ) : null}
          {recordingStatus === "recording" ? (
            <Button
              clickHandler={stopRecording}
              label={"توقف"}
              type="button"
            ></Button>
          ) : null}
        </div>
        {audio ? (
          <div className={styles.audio__result}>
            <audio src={audio} controls></audio>
            <Button label={"ارسال"} clickHandler={sendAudioHandler}></Button>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default RecordAudio;
