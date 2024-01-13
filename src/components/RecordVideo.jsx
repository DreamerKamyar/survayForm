import { useState, useRef } from "react";
import styles from "./RecordAudio.module.css";
import Button from "./Button";
const RecordVideo = () => {
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const liveVideoFeed = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [videoChunks, setVideoChunks] = useState([]);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const mimeType = "video/webm";

  const getCameraPermission = async () => {
    setRecordedVideo(null);
    if ("MediaRecorder" in window) {
      try {
        const videoConstraints = {
          audio: false,
          video: true,
        };
        const audioConstraints = { audio: true };
        // create audio and video streams separately
        const audioStream = await navigator.mediaDevices.getUserMedia(
          audioConstraints
        );
        const videoStream = await navigator.mediaDevices.getUserMedia(
          videoConstraints
        );
        setPermission(true);
        //combine both audio and video streams
        const combinedStream = new MediaStream([
          ...videoStream.getVideoTracks(),
          ...audioStream.getAudioTracks(),
        ]);
        setStream(combinedStream);
        //set videostream to live feed player
        liveVideoFeed.current.srcObject = videoStream;
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localVideoChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localVideoChunks.push(event.data);
    };
    setVideoChunks(localVideoChunks);
  };

  const stopRecording = () => {
    setPermission(false);
    setRecordingStatus("inactive");
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const videoBlob = new Blob(videoChunks, { type: mimeType });
      const videoUrl = URL.createObjectURL(videoBlob);
      setRecordedVideo(videoUrl);
      setVideoChunks([]);
    };
  };
  const sendAudioHandler = () => {
    console.log("sending autio");
  };
  return (
    <div className={styles.audio__container}>
      <h4 className={styles.audio__title}>
        ویدیو خود را ضبط کرده و برای ما بفرستید
      </h4>
      <main className={styles.audio__controls}>
        <div>
          {!permission ? (
            <Button
              clickHandler={getCameraPermission}
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
        {recordedVideo ? (
          <div className={styles.audio__result}>
            <video src={recordedVideo} controls></video>
            <Button label={"ارسال"} clickHandler={sendAudioHandler}></Button>
          </div>
        ) : null}
      </main>
    </div>
  );
};
export default RecordVideo;
