import React from "react";
import styles from "./Root.module.css";
import logo from "../../assets/images/logo.png";
import { Outlet } from "react-router-dom";
import LinkButton from "../../components/LinkButton";

import { motion } from "framer-motion";
const Root = () => {
  return (
    <>
      <motion.main
        className={styles.main__container}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
      >
        <div className={styles.background__filter}>
          <div className={styles.logo__container}>
            <img src={logo} alt="" className={styles.logo__img} />
          </div>
          <div className={styles.content__container}>
            <Outlet></Outlet>
          </div>
        </div>
      </motion.main>
      <LinkButton
        link={".."}
        label={"برگشت"}
        style={{
          fontSize: "1.1rem",
          padding: "0.5rem 2rem",
          position: "fixed",
          top: "4%",
          left: "min(6% , 50px)",
        }}
      ></LinkButton>
    </>
  );
};

export default Root;
