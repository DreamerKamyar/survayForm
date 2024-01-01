import React from "react";
import styles from "./Main.module.css";
import nailImage from "../assets/images/nail-image.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const Main = () => {
  return (
    <section className={styles.main__container}>
      <div className={styles.nailimgae__container}>
        <img src={nailImage} alt="" className={styles.nailImage__img} />
      </div>
      <div>
        <p className={styles.main__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sapiente
          vel quasi. Doloremque, aliquam velit!
        </p>
        <div className={styles.link__container}>
          <Button link={"survay"} label={"survay"}></Button>
          <Button link={"critics"} label={"critics"}></Button>
        </div>
      </div>
    </section>
  );
};

export default Main;
