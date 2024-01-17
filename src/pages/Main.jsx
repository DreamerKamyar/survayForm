import styles from "./Main.module.css";
import nailImage from "../assets/images/nail-image.png";

import { motion } from "framer-motion";
const Main = () => {
  return (
    <motion.section
      className={styles.main__container}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className={styles.nailimgae__container}>
        <img src={nailImage} alt="" className={styles.nailImage__img} />
      </div>
      <div className={styles.content__container}>
        <p className={styles.main__text}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکن
        </p>
      </div>
    </motion.section>
  );
};

export default Main;
