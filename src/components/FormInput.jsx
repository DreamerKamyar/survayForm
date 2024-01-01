import React from "react";
import styles from "./FormInput.module.css";
import IconGroup from "./IconGroup";
import Input from "./Input";
const FormInput = () => {
  const id = 1;
  const qustion = "this is a question ";
  const opttions = [
    {
      id: 1,
      text: "this is a text",
    },
    {
      id: 2,
      text: "this is a text",
    },
    {
      id: 3,
      text: "this is a text",
    },
    {
      id: 4,
      text: "this is a text",
    },
    {
      id: 5,
      text: "this is a text",
    },
    {
      id: 6,
      text: "this is a text",
    },
  ];
  return (
    <div className={styles.form__container}>
      <IconGroup></IconGroup>
      <div className={styles.question__container}>
        <span>.{id}</span>
        <h4>{qustion}</h4>
      </div>
      {opttions.map((option) => {
        return (
          <Input key={option.id} id={option.id} label={option.text}></Input>
        );
      })}
    </div>
  );
};

export default FormInput;
