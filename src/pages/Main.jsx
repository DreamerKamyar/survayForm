import React from "react";
import styles from "./Main.module.css";
import nailImage from "../assets/images/nail-image.png";
import { Link } from "react-router-dom";
import LinkButton from "../components/LinkButton";
const Main = () => {
  return (
    <section className={styles.main__container}>
      <div className={styles.nailimgae__container}>
        <img src={nailImage} alt="" className={styles.nailImage__img} />
      </div>
      <div className={styles.content__container}>
        <p className={styles.main__text}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکن
        </p>
        <div className={styles.link__container}>
          <LinkButton link={"survay"} label={"نظرسنجی"}></LinkButton>
          <LinkButton link={"critics"} label={"انتقادات"}></LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Main;
