import React, { useState } from "react";
import styles from "./FormInput.module.css";
import IconGroup from "./IconGroup";
import Input from "./Input";
const FormInput = ({ question, options, id }) => {
  console.log(id);
  const [activeInput, setActiveInput] = useState(0);
  const [isOpen, setIsOpen] = useState("");

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".formInput")) {
      setIsOpen("");
    }
  });
  const openInputHandler = (event) => {
    const selectedInput = event.target.closest(".formInput");

    setIsOpen(selectedInput.id);
  };

  return (
    <>
      <div
        className={`${styles.form__container} formInput`}
        id={id}
        onClick={openInputHandler}
      >
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
          }}
        ></div>
        <div className={styles.question__container}>
          <span>.{id.split("").at(-1)}</span>
          <h4>{question}</h4>
        </div>
        <IconGroup></IconGroup>
        <div
          className={`${styles.option__container}
      ${isOpen === id ? styles.setActive : ""}
      `}
        >
          <div>
            {options.map((option) => {
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
