import React from "react";
import styles from "./Root.module.css";
import logo from "../../assets/images/logo.png";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <main className={styles.main__container}>
      <div className={styles.logo__container}>
        <img src={logo} alt="" className={styles.logo__img} />
      </div>
      <div className={styles.content__container}>
        <Outlet></Outlet>
      </div>
    </main>
  );
};

export default Root;
