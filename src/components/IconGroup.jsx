import React, { useState } from "react";
import styles from "./IconGroup.module.css";
import { icons } from "../constant/icons";
const IconGroup = () => {
  const [isActive, setIsActive] = useState("");
  const iconChangeClinkHandler = (event) => {
    console.log(event.target.id);

    setIsActive(parseFloat(event.target.id));
  };
  return (
    <div className={styles.icon__container}>
      {icons.reverse().map((icon) => {
        return (
          <img
            id={icon.id}
            key={icon.id}
            src={isActive === icon.id ? icon.acitve : icon.inAcitve}
            alt=""
            className={styles.icon}
            onClick={iconChangeClinkHandler}
          />
        );
      })}
    </div>
  );
};

export default IconGroup;
