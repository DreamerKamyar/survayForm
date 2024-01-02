import React, { useState } from "react";
import styles from "./FormInput.module.css";
import IconGroup from "./IconGroup";
import Input from "./Input";
const FormInput = () => {
  const [activeInput, setActiveInput] = useState(0);
  const [isActive, setIsActive] = useState(false);
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".formInput")) {
      setIsActive(false);
    }
    if (event.target.closest(".formInput")) {
      setIsActive(true);
    }
  });
  const id = 1;
  const qustion = "this is a question ";

  const opttions = [
    {
      id: 1,
      text: "this is a text 1",
    },
    {
      id: 2,
      text: "this is a text 2",
    },
    {
      id: 3,
      text: "this is a text 3",
    },
    // {
    //   id: 4,
    //   text: "this is a text 4",
    // },
    // {
    //   id: 5,
    //   text: "this is a text 5",
    // },
    // {
    //   id: 6,
    //   text: "this is a text 6",
    // },
  ];
  return (
    <>
      <div className={`${styles.form__container} formInput`}>
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
          }}
        ></div>
        <div className={styles.question__container}>
          <span>.{id}</span>
          <h4>{qustion}</h4>
        </div>
        <IconGroup></IconGroup>
        <div
          className={`${styles.option__container}
      ${isActive === true ? styles.setActive : ""}
      `}
        >
          <div>
            {opttions.map((option) => {
              return (
                <Input
                  key={option.id}
                  setActive={setActiveInput}
                  id={option.id}
                  label={option.text}
                  isActive={activeInput}
                ></Input>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInput;
