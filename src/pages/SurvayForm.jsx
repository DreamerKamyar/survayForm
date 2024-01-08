import styles from "./SurvayForm.module.css";
import FormInput from "../components/FormInput";

import { formInputData } from "../constant/formInputData";
import PopUp from "../components/PopUp";
import { useState } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import slideVariants from "../constant/slideVarient";
const SurvayForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <motion.section
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.5,
      }}
    >
      {formInputData.map((forminput) => {
        return (
          <FormInput
            key={forminput.id}
            question={forminput.qustion}
            options={forminput.opttions}
            id={forminput.id}
          ></FormInput>
        );
      })}
      <div className={styles.modal__container}>
        <Button label={"ارسال نظرات"} clickHandler={openModalHandler}></Button>
      </div>
      {isModalOpen && (
        <PopUp isOpen={isModalOpen} onClose={openModalHandler}></PopUp>
      )}
    </motion.section>
  );
};

export default SurvayForm;
